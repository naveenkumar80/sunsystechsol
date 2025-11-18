'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Eye, 
  Trash2, 
  Mail,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import ProtectedRoute from '@/components/admin/ProtectedRoute'
import { leadsAPI } from '@/lib/api/admin'

export default function AdminLeadsPage() {
  const searchParams = useSearchParams()
  const urlSearch = searchParams.get('search')
  
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(urlSearch || '')
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedLead, setSelectedLead] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Set search term from URL if present
    if (urlSearch) {
      setSearchTerm(urlSearch)
    }
  }, [urlSearch])

  useEffect(() => {
    fetchLeads()
  }, [currentPage, statusFilter, urlSearch])

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const params = {
        page: currentPage,
        limit: 20
      }
      
      if (statusFilter) params.status = statusFilter
      if (searchTerm) params.search = searchTerm

      const response = await leadsAPI.getAll(params)
      
      if (response.success) {
        setLeads(response.data)
        setTotalPages(response.pagination?.totalPages || 1)
      }
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchLeads()
  }

  const handleStatusChange = async (leadId, newStatus) => {
    try {
      const response = await leadsAPI.update(leadId, { status: newStatus })
      if (response.success) {
        fetchLeads()
      }
    } catch (error) {
      console.error('Error updating lead:', error)
    }
  }

  const handleDelete = async (leadId) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        const response = await leadsAPI.delete(leadId)
        if (response.success) {
          fetchLeads()
        }
      } catch (error) {
        console.error('Error deleting lead:', error)
      }
    }
  }

  const viewLeadDetails = async (leadId) => {
    try {
      const response = await leadsAPI.getOne(leadId)
      if (response.success) {
        setSelectedLead(response.data)
        setShowModal(true)
      }
    } catch (error) {
      console.error('Error fetching lead details:', error)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <ProtectedRoute>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
          <p className="text-gray-600 mt-2">Manage and track all your business leads</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, or service..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </form>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Converted">Converted</option>
                <option value="Lost">Lost</option>
              </select>
            </div>
          </div>
          
          {/* Search Info */}
          {searchTerm && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Searching for: <span className="font-semibold">"{searchTerm}"</span>
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setCurrentPage(1)
                  fetchLeads()
                }}
                className="text-sm text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : leads.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <motion.tr
                        key={lead._id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span>{lead.email}</span>
                            </div>
                            {lead.phone && (
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>{lead.phone}</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">
                            {lead.service || 'Not specified'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer ${
                              lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                              lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                              lead.status === 'Qualified' ? 'bg-purple-100 text-purple-800' :
                              lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Converted">Converted</option>
                            <option value="Lost">Lost</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(lead.createdAt)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => viewLeadDetails(lead._id)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View Details"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(lead._id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm ? `No leads found for "${searchTerm}"` : 'No leads found'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    fetchLeads()
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear search and view all leads
                </button>
              )}
            </div>
          )}
        </div>

        {/* Lead Detail Modal */}
        {showModal && selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Lead Details</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Name</label>
                  <p className="text-lg text-gray-900">{selectedLead.name}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Email</label>
                    <p className="text-gray-900">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Phone</label>
                    <p className="text-gray-900">{selectedLead.phone || 'N/A'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Service</label>
                    <p className="text-gray-900">{selectedLead.service || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Budget</label>
                    <p className="text-gray-900">{selectedLead.budget || 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">Message</label>
                  <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedLead.message}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Status</label>
                    <p className="text-gray-900">{selectedLead.status}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Source</label>
                    <p className="text-gray-900">{selectedLead.source}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">Created At</label>
                  <p className="text-gray-900">{formatDate(selectedLead.createdAt)}</p>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  )
}
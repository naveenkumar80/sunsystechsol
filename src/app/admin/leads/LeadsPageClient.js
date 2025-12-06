"use client";

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

export default function LeadsPageClient() {
  const searchParams = useSearchParams()
  const urlSearch = searchParams.get('search');
  
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(urlSearch || '')
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedLead, setSelectedLead] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
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
      const params = { page: currentPage, limit: 20 }
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
      if (response.success) fetchLeads()
    } catch (error) {
      console.error('Error updating lead:', error)
    }
  }

  const handleDelete = async (leadId) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        const response = await leadsAPI.delete(leadId)
        if (response.success) fetchLeads()
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
        {/* Your UI goes here */}
      </div>
    </ProtectedRoute>
  );
}

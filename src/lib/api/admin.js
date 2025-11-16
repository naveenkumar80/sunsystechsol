const API_URL = 'http://localhost:5000/api'

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

// Leads API
export const leadsAPI = {
  getAll: async (params = {}) => {
    const query = new URLSearchParams(params).toString()
    const response = await fetch(`${API_URL}/leads?${query}`, {
      headers: getAuthHeaders()
    })
    return response.json()
  },

  getOne: async (id) => {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      headers: getAuthHeaders()
    })
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return response.json()
  },

  getStats: async () => {
    const response = await fetch(`${API_URL}/leads/stats`, {
      headers: getAuthHeaders()
    })
    return response.json()
  }
}

// Services API
export const servicesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/services`)
    return response.json()
  },

  create: async (data) => {
    const response = await fetch(`${API_URL}/services`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/services/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/services/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return response.json()
  }
}

// Portfolio API
export const portfolioAPI = {
  getAll: async (params = {}) => {
    const query = new URLSearchParams(params).toString()
    const response = await fetch(`${API_URL}/portfolio?${query}`)
    return response.json()
  },

  create: async (data) => {
    const response = await fetch(`${API_URL}/portfolio`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/portfolio/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/portfolio/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return response.json()
  }
}

// Blog API
export const blogAPI = {
  getAll: async (params = {}) => {
    const query = new URLSearchParams(params).toString()
    const response = await fetch(`${API_URL}/blog?${query}`, {
      headers: getAuthHeaders()
    })
    return response.json()
  },

  create: async (data) => {
    const response = await fetch(`${API_URL}/blog`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/blog/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/blog/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return response.json()
  }
}

// Testimonials API
export const testimonialsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/testimonials`, {
      headers: getAuthHeaders()
    })
    return response.json()
  },

  create: async (data) => {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    })
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    return response.json()
  }
}
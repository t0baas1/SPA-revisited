import axios from 'axios'

const baseUrl = 'http://localhost:3001/customers'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (customer) => {
    const response = await axios.post(baseUrl, customer)
    return response.data
}

const deleteCustomer = async (id) => {
    console.log('tulee serviceen')
    const url = baseUrl + '/' + id
    const response = await axios.delete(url)
    return response.data
}

export default { getAll, create, deleteCustomer }
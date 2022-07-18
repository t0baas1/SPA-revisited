import axios from 'axios'

const baseUrl = 'https://localhost:7117/api/customeritems'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (customer) => {
    const response = await axios.post(baseUrl, customer)
    return response.data
}

const update = async (id, customer) => {
    const url = baseUrl + '/' + id
    const response = await axios.put(url, customer)
    return response.data
}

const deleteCustomer = async (id) => {
    console.log('tulee serviceen')
    const url = baseUrl + '/' + id
    const response = await axios.delete(url)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteCustomer, update }
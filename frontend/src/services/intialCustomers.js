import axios from 'axios'

const baseUrl = 'http://www.filltext.com/?rows=100&pretty=true&id={index}&name={business}&address={addressObject}'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }
import axios from  'axios'

const base_url = 'https://newsapi.org/v2/top-headlines'
const api_key = '98225607b7a44e008499ee37663bcb81'
const country_code = 'us'

export const LIST_CATEGORIES = [
    { 
        key: 'general',
        title: 'All' 
    },
    { 
        key: 'business',
        title: 'Business'
    },
    {
        key: 'technology',
        title: 'Technology'
    },
    { 
        key: 'health',
        title: 'Health'
    },
    {
        key: 'science',
        title: 'Science'
    },
    { 
        key: 'sport',
        title: 'Sport'
    },
    {
        key: 'entertainment',
        title: 'Entertainment'
    }
]

export const getNews = async (categoryIndex = 0) => {
    const { data } = await axios
        .get(`${base_url}?country=${country_code}&category=${LIST_CATEGORIES[categoryIndex].key}&apiKey=${api_key}`)

        console.log(data.articles[1]);
    return data
}

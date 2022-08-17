import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e1251eabbcmsh0da0adbc57e7ec3p1c7d00jsn6bed578af79b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
})
return data;
}
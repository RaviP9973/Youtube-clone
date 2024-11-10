import Axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		// 'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        // 'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
        
	}
};

export const fetchData = async(url) =>{
    try {
        const {data} = await Axios.get(`${BASE_URL}/${url}`,options)
        return data;
    } catch (error) {
        console.error("Error in fetching api data: ",error);
        throw error;
    }
}
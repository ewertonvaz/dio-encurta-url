import axios from "axios";

//const baseURL = process.env.GIT_HUB_API_URL;
export const baseURL = 'http://localhost:5000';

const api = {
    generate: async (url) => {      
        const shortUrl = await axios.post(baseURL + '/api/generate', { originUrl: url }).then( res => res.data );
        return shortUrl;
    }
}

export default api;
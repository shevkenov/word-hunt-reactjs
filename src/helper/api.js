import axios from 'axios';

const dictionaryApi = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/"
});

export default dictionaryApi;
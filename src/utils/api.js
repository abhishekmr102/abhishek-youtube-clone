import axios from "axios";


const base_Url ="https://youtube138.p.rapidapi.com";

const options = {
    params: {q:'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEYS,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const FetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${base_Url}/${url}`,options);
    console.log(data);
    return data;
  }
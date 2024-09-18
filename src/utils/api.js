import axios from "axios";


const base_Url ="https://youtube138.p.rapidapi.com";

const options = {
    params: {q:'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': "e7676c3588msh8886abb537ef086p13885ejsn6d6b2b14d19d",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const FetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${base_Url}/${url}`,options);
    console.log(data);
    return data;
  }
import React,{useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FetchDataFromApi } from '../utils/api';
import LeftNav from './LeftNav';
import { Context } from '../context/contextApi';
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {

const [results , setResults] =  useState();
const {searchQuery} = useParams();
const {setLoading} = useContext(Context);

useEffect(()=>{
  document.getElementById("root").classList.remove("custum-h");
  fetchSearchResults();
},[searchQuery]);


const fetchSearchResults = ()=>{
  setLoading(true);
  FetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
    // console.log(res);
    setResults(res?.contents);
    setLoading(false);
  })
}
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>

      <div className='bg-black grow w-[calc(100%-240px)] h-full overflow-y-auto'>
      <div className='grid grid-cols-1 gap-2 p-5 '>
        {results?.map((items)=>{
          if(items?.type !== "video") return false;
          let video = items.video;
          return(
            <SearchResultVideoCard key={video?.videoId} video={video}/>
          )
        })}
       </div>
      </div>

    </div>
  )
}

export default SearchResult
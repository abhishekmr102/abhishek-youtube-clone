import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill} from "react-icons/bs"
import { AiOutlineLike } from 'react-icons/ai';
import {abbreviateNumber} from "js-abbreviation-number"

import { FetchDataFromApi } from '../utils/api';
import {Context} from "../context/contextApi"
import SuggestionVideoCard from "../components/SuggestionVideoCard";

const VideoDetails = () => {

const [video, setVideo] = useState();
const [relatedVideos , setRelatedVideos] = useState();
const {id} = useParams();
// console.log({ video })
const {setLoading} = useContext(Context);

useEffect(()=>{
  document.getElementById("root").classList.add("custum-h");
  fetchVideoDetails();
  fetchRelatedVideo();
},[id])

 
const fetchVideoDetails = ()=>{
  setLoading(true);
  FetchDataFromApi(`video/details/?id=${id}`).then((res)=>{
    // console.log(res);
    setVideo(res);
    setLoading(false);
  })
}

const fetchRelatedVideo = ()=>{
  setLoading(true);
  FetchDataFromApi(`video/related-contents/?id=${id}`).then((res)=>{
    // console.log(res);
    setRelatedVideos(res);
    setLoading(false);
  })
}


  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black/[0.7]'>
      <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-4 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer  
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
            height="100%"
            style={{backgroundColor:"#000000"}}
            playing={true}
             />
          </div>

           <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {video?.title}
           </div>


           <div className='flex justify-between flex-col md:flex-row mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='h-11 w-11 rounded-full overflow-hidden'>
                  <img src={video?.author?.avatar[0]?.url} className='h-full w-full object-cover'/>
                </div>
              </div>

              <div className='flex flex-col ml-3'>
                <div className='text-white text-md font-semibold flex items-center'>
                 {video?.title}
                {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>)} 
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
                </div>
            
            <div className='text-white/[0.7] text-sm '>
              {video?.author?.stats?.subscribersText}
            </div>
            </div>
            </div>

             <div className='flex text-white mt-4 md:mt-0'>
               <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className='text-xl text-white mr-2'/>
                <span>{`${abbreviateNumber(video?.stats?.likes,2)} Likes `}</span>
                </div>

                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineLike className='text-xl text-white mr-2'/>
                <span>{`${abbreviateNumber(video?.stats?.views,2)} Views `}</span>
                </div>

             </div>

           </div>

        </div>

{/* Suggestion col start */}
          <div className='flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] '>
              {relatedVideos?.contents?.map((items, index)=>{
                if(items?.type !== "video" ) return false;
                return (
                  <SuggestionVideoCard key={index} video={items?.video}/>
                )
              })}
          </div>
{/* Suggestion col end*/}
  
      </div>
    </div>
  )
}

export default VideoDetails
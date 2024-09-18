import React from 'react'
import moment from "moment";

const VideoLength = ({time}) => {

    const videoLengthInSecond = moment()
     .startOf('day')
     .seconds(time)
     .format("H:mm:ss");


  return (
    <div className='text-white absolute bottom-2 right-2 bg-black py-1 px-2 text-xs rounded-md'>
    {videoLengthInSecond}
    </div>
  )
}

export default VideoLength
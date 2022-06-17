import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../SocketContext'

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div className='grid grid-flow-row gap-4 md:grid-cols-2 md:gap-7'>
            <div className='bg-secondaryBg w-80  h-72 lg:w-96 rounded-2xl relative'>

                <video className='absolute w-80  h-72  lg:w-96 rounded-2xl ' playsInline muted autoPlay ref={myVideo} />

                <h1 className='inline-flex bg-secondaryBg2 p-1
                 px-3 mx-3 rounded-md bottom absolute bottom-3'
                >
                    {name || 'Name'}</h1>
            </div>



            <div className='bg-secondaryBg w-80 h-72 lg:w-96 rounded-2xl relative'>

                <video className='absolute w-80  h-72 lg:h-72  lg:w-96 rounded-2xl ' playsInline muted autoPlay ref={userVideo} />

                <h1 className='inline-flex bg-secondaryBg2 p-1
                            px-3 mx-3 rounded-md bottom absolute bottom-3'
                >
                    {call.name || 'Name'}</h1>
            </div>

        </div>
    )
}

export default VideoPlayer
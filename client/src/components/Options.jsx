import React, { useContext,useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Options = ({children}) => {

  const {me, callAccepted, name, setName,callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='bg-gray-900 rounded-xl p-4 mt-6'>
      <form className="flex flex-col " noValidate autoComplete="off">
        <input
          placeholder="Name"
           type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="flex-grow w-full text-primaryBg h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
        <CopyToClipboard text={me}>
        <button className="inline-flex bg-blue-600 mt-2 mb-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            type='button'
              >
                COPY YOUR ID
              </button>
        </CopyToClipboard>
         <input
                placeholder="ID to Call"
                type="text"
                onChange={(e) => setIdToCall(e.target.value)}
                className="flex-grow w-full text-primaryBg h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              {callAccepted && !callEnded ? (
                  <button
                  className="inline-flex mt-2 mb-4 bg-red-600 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  onClick={leaveCall}
                  type='button'
                >
                  HANG UP!
                </button>
              ):(
                <button
                className="inline-flex mt-2 mb-4 bg-red-600 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                onClick={() => callUser(idToCall)}
                type='button'
              >
                CALL
              </button>
              )}
              
      </form>
      {children}
    </div>
  )
}

export default Options
import React, {useContext} from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} is calling:</h1>
            <button className='bg-green-600 rounded-xl p-1' onClick={answerCall}>
              Ans
            </button>
          </div> 
      )}
      
    </>
  )
}

export default Notifications
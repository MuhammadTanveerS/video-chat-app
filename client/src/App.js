import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className='bg-primaryBg flex flex-col justify-center text-primaryText h-screen w-screen'>
        <div className=' mx-auto container flex flex-col justify-center items-center'>
              
              <VideoPlayer/>
              <Options>
                <Notifications />
              </Options>
        </div>
        
    </div>
  )
}

export default App
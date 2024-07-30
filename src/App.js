
import './App.css';


import Sidebar from './components/sidebar';
import Player from './components/player';
import Display from './components/display';
import { useContext } from 'react';
import { PlayerContext } from './context/playercontext';





const App=()=> {

// console.log(useContext(PlayerContext))
const {audioRef,track} = useContext(PlayerContext);



  return (
    <div className='h-screen bg-black'>
     <div className='h-[90%] flex'>
       <Sidebar/>
       <Display />
     </div>
     <Player/>
     <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './App.scss';
import AppRouter from './app/routers/appRouter'
function App() {
  const [loader , setLoader] = useState(true)
  useEffect(()=>{
        setLoader(false)
  },[])
  return loader?(<Loader type='pacman' />):(
    <div className="App">
     <AppRouter/>
    </div>
  );
}

export default App;

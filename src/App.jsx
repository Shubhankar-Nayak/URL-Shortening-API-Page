import { useState } from 'react'
import './App.css'
import AdvancedStatistics from './components/AdvancedStatistics'
import Footer from './components/Footer';
import Boost from './components/Boost';
import ShortLink from './components/ShortLink';
import Input from './components/Input';
import Landing from './components/Landing';
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {
  const [togglemenu, setToggleMenu] = useState(false);
  const [inputUrl, setInputUrl] = useState("");  
  const [error, setError] = useState("");
  const [URLs, setURLs] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  return (
    <div className='w-full h-screen relative'>
    
      <Navbar togglemenu={togglemenu} setToggleMenu={setToggleMenu} />

      {togglemenu && (
        <Menu />
      )}

      <Landing />

      <Input inputUrl={inputUrl} setInputUrl={setInputUrl} error={error} setError={setError} setURLs={setURLs} />

      {URLs.length !== 0 && (
        <div className='w-full bg-Gray flex justify-center items-center'>
          <ul className='w-[90%] laptop:w-[75%]'>
          {URLs.map((urlObj, index) => (
            <ShortLink urlObj={urlObj} index={index} copiedIndex={copiedIndex} setCopiedIndex={setCopiedIndex} />
          ))}
          </ul>
        </div>
      )}

      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  )
}

export default App

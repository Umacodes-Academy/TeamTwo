import UrlContainer from './components/UrlContainer'
import LinkResult from './components/LinkResult'
import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <div className='url-container'>
        <div className='url-wrapper'>
          <UrlContainer setInputValue={setInputValue}/>
          <LinkResult inputValue={inputValue}/>
        </div>
      </div>
    </>
  )
}

export default App

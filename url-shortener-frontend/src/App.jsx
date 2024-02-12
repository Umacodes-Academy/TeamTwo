import axios from 'axios';
import UrlContainer from './components/UrlContainer';
import LinkResult from './components/LinkResult';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [shortenLink, setShortenLink] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Here is the logic for fetching the api

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://cleanuri.com/api/v1/shorten?url=${inputValue}`)
      setShortenLink(res.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue])




  return (
    <>
      <div className='url-container'>
        <div className='url-wrapper'>
          <UrlContainer setInputValue={setInputValue} />
          <LinkResult
            shortenLink={shortenLink}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </>
  )
}

export default App

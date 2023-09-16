import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFech from './hooks/useFech'
import getRandomNumber from './utils/getRandomNumber'
import Locationinfo from './components/Locationinfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))  
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'Hola'}`
  const [ location, getLocation, hasError ] = useFech(url)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getLocation()
  }, [inputValue])
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div className='page_style'>
      <div className='banner'>
        <h1 className='banner_title' >Rick and Morty app</h1>
        <form className='banner_form' onSubmit={handleSubmit}>
          <input className='banner_input' ref={inputSearch} type="text" />
          <button className='banner_btn'>Search</button>
        </form>
      </div>
      {
        hasError
        ? <h2 className='card-err'>❌Hey! You must provide and id form 1 to 126 👌</h2>
        : (
          <>
            <div className='card_localinfo'>
              <Locationinfo 
                location={location}
                />
            </div>
            <div className='card_resident'> 
              {
                location?.residents.map(url => (
                  <ResidentCard  
                    key={url}
                    url={url}
                  />
                )) 
              }
            </div>
          </>
        )
      }
      
    
    </div>
  )
}

export default App

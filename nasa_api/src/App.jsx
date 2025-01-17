import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [showModal , setShowModal] = useState(false)

  function handleDisplay(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try{
        const res = await fetch(url)
        const apidata = await res.json()
        setData(apidata)
        console.log(data)

      }catch(error){
        console.log(error.message)
      }
    }
    fetchAPIData()
  },[])
  

  return (
    <>
  { data ?  (<Main data = {data}/>):(
    <div className="loadingState"><i className="fa-solid fa-gear"></i></div>
  )}
    { showModal && (<SideBar data = {data} handleDisplay={handleDisplay}/>)}
    {data && (<Footer data = {data} handleDisplay={handleDisplay}/>)}
      
    </>
  )
}

export default App

import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { fetchData } from '../service'

export default function RecipeLists({setLoader}) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [query, setQuery] = React.useState('pizza')
  const [data, setData] = React.useState([])

  const handleClick = () => {
    setQuery(searchTerm)
    setLoader(true)
  }
  React.useEffect(() => {
    // console.log(query)
    fetchData(query).then(
      (response) => {
        setData(response)
        setLoader(false)
      }
      
    )
  }, [query])
  // console.log(data)
  return (
    <div className='container'>
      <div className='heading-line'>
        <strong>Search Recipes</strong>
        <div className='input-wrapper' >
          <input onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder='Search your recipe' />
          <button onClick={handleClick}><BsSearch /></button>
        </div>
      </div>
      <div className='flexbox'>
        {
          data && data?.hits?.map((item, idx) => (
            <div key={idx} className='flexItem'>
              <div className='img-wrapper'>
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label.lenth >18 ?item.recipe.label:item.recipe.label.slice(0,18)+"..."}</p>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

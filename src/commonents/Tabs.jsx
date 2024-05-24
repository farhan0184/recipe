import React from 'react'
import { CiPizza } from 'react-icons/ci'
import { GiCheckMark, GiFruitBowl, GiNoodles } from 'react-icons/gi'
import { MdOutlineIcecream } from 'react-icons/md'
import { fetchTabData } from '../service'
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export default function Tabs({ setLoader }) {
  const [tablist, setTablist] = React.useState([
    {
      id: 'da6da2ae85484594928c1c675797bc5c',
      name: 'Pizza',
      icon: <CiPizza />
    },
    {
      id: '35ed266748b743eb9c10ab44bb1ff84b',
      name: 'Noodles',
      icon: <GiNoodles />
    },
    {
      id: '26fafaa765c2dcf22cf9c5f4542f4031',
      name: 'Desert',
      icon: <GiFruitBowl />
    },
    {
      id: '7ec8f5551e74e6050e5ca3290e4654ef',
      name: 'Ice cream',
      icon: <MdOutlineIcecream />
    }
  ])
  const [activeTab, setActiveTab] = React.useState(tablist[0]?.id)

  const [data, setData] = React.useState({})

  const handleActive = (item) => {
    setLoader(true)
    setActiveTab(item.id)
  }

  React.useEffect(() => {
    fetchTabData(activeTab).then(response => {
      setData(response.recipe)
      setLoader(false)
    }
    )
  }, [activeTab])
  // console.log(data)
  // const region = capitalizeFirstLetter(data?.cuisineType[0]) || null
  return (
    <div className="container">
      <h1 className='recipeHeading'>What would you like to have!</h1>
      <div className="tabs">
        {
          tablist.map((item, idx) => (
            <div onClick={() => handleActive(item)} key={idx} className={`tablist ${activeTab === item.id ? 'active' : ''}`}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))
        }


      </div>

      <div className='recipe_banner'>
        {
          Object.keys(data).length !== 0 && <>
            <div className="left-col">
              <span className='badge'>{capitalizeFirstLetter(data?.cuisineType[0])}</span>
              <h1>{data?.label}</h1>
              <p><strong>Recipe by:</strong><small>{data?.source}</small></p>
              <h3>Ingredients</h3>
              <div className='ingredients'>
                <ul>

                  {data?.ingredients.map((item, idx) => <li key={idx}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{item.text}</span></li>)}
                  
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img src={data?.image} alt={data?.label} />
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

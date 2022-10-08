import React from 'react'
import {useParams , useLocation} from 'react-router-dom'

function Description({Prodlist}) {
  const params = useParams()
  const location = useLocation()
  console.log(location)
  
  const ProductsList = Prodlist.find((prod) => prod.id === params.ProdId)
  
  
  
  return (
    <div>
      {ProductsList.description}
    </div>
  )
}

export default Description
import React from 'react'
import { Link } from 'react-router-dom'

function Products({list}) {
    
    return (
        <div>
            {list.map((el,i)=> <div key={i}> <h2> <Link to={`/Products/${el.id}`}> {el.name} </Link> </h2> <h6> {el.id} </h6>  </div>  ) }
        </div>
    )
}

export default Products
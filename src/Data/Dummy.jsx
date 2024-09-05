import React, { useEffect, useState } from 'react'

function Dummy() {
    const [Data , setData] = useState([]);

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://dummyjson.com/products');
            let mydata =await response.json()
            let newdata = mydata.products
            setData(newdata)
            console.log(newdata)
        }
        getData()
    })

  return (
    <div>
        {
            Data.map((e)=>{
                return(
                    <div className='data'>
                    <img src={e.images} alt="" />
                    <h1>{e.id}</h1>

                    </div>
                )
            })
        }
    </div>
    
  )
}

export default Dummy

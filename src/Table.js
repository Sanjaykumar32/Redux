import React from 'react'

import { useSelector } from 'react-redux'


export default function Table() {

 const el = useSelector(state=>state)

 console.log(el.table);

  return (
    <div>
 <table width="50%" border="1">
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
        </tr>
      </thead>
      <tbody>
        {/* { el.map((data) => {
             return <tr >
                <td>{data.name}</td> 
                <td>{data.amount}</td>
                </tr>
      })
      }
              */}
      </tbody>
    </table>



    </div>
  )
}

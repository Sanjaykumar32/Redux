import './App.css';
// import Other from './Other';

import { useSelector, useDispatch } from 'react-redux'


import {ADD_ITEM} from './actionTypes'
import { useState } from 'react';
import Table from './Table';


// let st = store.getState()

function App() {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  // const [details, setdetails] = useState([])

  // let el = useSelector(state=>state)
  let dispatch = useDispatch()

 
//  console.log(el.table);


  const HandalClick =  () => {

    if (name != "" && amount != "") {
      dispatch({
        type : ADD_ITEM , payload:{
          name : name,
          amount : amount,
        }
      })
    // const Alldata = { name: name, amount: amount }
    // setname("");
    // setamount('');
   
    // setdetails((el) => {
    //     return [...el, Alldata]
    //   })
  
  } 
}



  return (
    // <div className="App">
    //   {st.count}
    //   <button onClick={()=>{
    //     dispatch({type:"INCREMENT"})
    //   }}>Inc</button>


    //   <button onClick={()=>
    //     dispatch({
    //       type:ADD_ITEM, payload:{
    //         itemId:Math.random(),
    //         itemName:"ABC"
    //       }

    //     })
    //   }>Add To Cart</button>
      

    //   <p>This is Other : </p>
    //   <Other/>
    // </div>
    <>
    <div className='d-flex justify-center '>
    <input type="text" 
     value={name}
     onChange={(e)=> setname(e.target.value)}
    />
     <input type="text"
      value={amount}
      onChange={(e)=> setamount(e.target.value)}
     />

    </div>
    
    <div>
    <button  onClick={() => HandalClick()} >Save Data</button>
    
    </div>
    <Table/>
   
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

const App = ()=> {
  const [first, setfirst] = useState('');
  const [second, setsecond] = useState('')
  const [message, setmessage] = useState('')
  const [allDetails, setallDetails] = useState([])

  useEffect(() => {
    if(localStorage.allOfDetails){
      let localDetails = JSON.parse(localStorage.allOfDetails)
      setallDetails(localDetails)
    }
  },[])
  
  const add =()=>{
      if (!first)
      { setmessage('input first details')
      }
      else{
        setmessage('')
          let eachDetails = {first,second}
          setallDetails(()=>{
            let localDetails = [...allDetails,eachDetails]
            localStorage.allOfDetails = JSON.stringify(localDetails)
            return localDetails;
          })
      }
      setfirst('')
      setsecond('')

  }
  return (
    <>
      <center>
        <div> <br /><br />
          <input className='form-control my-1 w-50' type="text" placeholder='First' onChange={(e)=>setfirst(e.target.value)} value={first}/> <br /> <br />
          <input className='form-control my-1 w-50' type="text" placeholder='Second' onChange={(e)=>setsecond(e.target.value)} value={second}/> <br /><br /><br />
          <div className='alert-danger'>{message}</div>

          <button className='btn btn-primary' onClick={add}>Add</button> <br /><br />
        </div>
        <div>
          <table className='table table-striped w-50'>
            <thead>
              <td>S/N</td>
              <td>First</td>
              <td>Second</td>
            </thead>

            {allDetails.map((details,index)=>(
                <thead key={index}>
                  <td>{index+1}</td>
                  <td>{details.first}</td>
                  <td>{details.second}</td>
                </thead>
          ))}
          </table>
          
        </div>



        <div>
          
        </div>
      </center>
    </>
  );
}

export default App;

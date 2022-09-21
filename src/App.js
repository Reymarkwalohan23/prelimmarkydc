import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('caps');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [caps, setCaps]= useState([getDatafromLS()]);

  //input field states
  const [cap_name, setCapName]= useState('');
  const [brand, setBrand]= useState('');
  const [color, setColor]= useState('');
  const [price, setPrice]= useState('');

  //form submit event
  const handleAddCapSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let cap={
      cap_name,
      brand,
      color,
      price
    }
    setCaps([...caps, cap]);
    setCapName('');
    setBrand('');
    setColor('');
    setPrice('');
  }

  //delete from LS
  const deleteCap=(cap_name)=>{
    const filteredCaps=caps.filter((element,index)=>{
      return element.cap_name !== cap_name
    })
    setCaps(filteredCaps);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('caps', JSON.stringify(caps));
  },[caps])

  return(
    <div className="wrapper">
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddCapSubmit}>
            <label>Cap Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setCapName(e.target.value)} value={cap_name}></input>
            <label>Brand</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setBrand(e.target.value)} value={brand}></input>
            <label>Color</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <label>Price</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <button type="submit" className="btn btn-secondary btn-md">
              Add Cap
            </button>
          </form>
        </div>

        <div className="view-container">
          {caps.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Cap Name</th>
                  <th>Brand</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              
                <View caps={caps} deleteCap={deleteCap}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger btn-md" 
          onClick={()=>setCaps([])}>Remove All</button>
          </>}
          {caps.length <1 && <div>No caps added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;
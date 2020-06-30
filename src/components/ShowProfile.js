import React, {useState, useEffect} from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import jwt_decode from "jwt-decode";



var name="";

if(localStorage.getItem("jwtToken") != null){
var b = localStorage.getItem("jwtToken");
// console.log(b);
const decoded = jwt_decode(b);
name = decoded.name;
// console.log(name);
}else{
  name="No User";  
}


function ShowProfile() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [profiles, setItems] = useState([]);

async function handleDelete(event){
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete?")){
      // alert("great");
    // console.log("the link was clicked");
    const url = 'http://localhost:5000/profiles/'+event.target.value;
    // console.log(event.target.value); 
    await fetch(url, {
        method: 'delete'

      });        
      fetchItems();  
    }       
}

    const fetchItems = async ()=>{
      if(localStorage.getItem("jwtToken") == null){
        window.location.replace("/login");
      }
        const data = await fetch('http://localhost:5000/profiles/'+ name);
        const profiles = await data.json();   
        console.log (profiles);    
        setItems(profiles);
    }
  return (
    <div className="App">
      <div className="custom-form">
        <h1 id="title">My Profile</h1>
         <div className="custom-input">

  
    
    
   
  
  {profiles.map(item =>(
    
    
      

    <div>
      <div className="custom-input-field" style={{background: "none", fontSize: "25px", height: "0.75vw"}} ><span>{item.user}</span></div>
      <div className="custom-input-field" style={{background: "none", fontSize: "25px", height: "0.75vw"}} ><span>{item.gender}</span></div>
      <div className="custom-input-field" style={{background: "none", fontSize: "25px", height: "0.75vw"}}><span>{item.age}</span> years old</div>
      <div className="custom-input-field" style={{background: "none", fontSize: "25px", height: "0.75vw"}} ><span>{item.city}</span></div>   



     <div className="container-login100-form-btn">
     <button className="login100-form-btn"style={{width: "150px"}} value={item._id} onClick={handleDelete}>Delete</button>
     </div>
     <div className="container-login100-form-btn" style={{marginTop: "20px"}}>
      <button className="login100-form-btn" style={{width: "150px"}} value={item._id} ><a id="buttonLink" href={'/profiles/editprofile/'+item._id}>Edit</a></button>
      </div>
    </div>
    
    ))} 
  

          </div>               
         </div>     
    </div>
  );
}

export default ShowProfile;
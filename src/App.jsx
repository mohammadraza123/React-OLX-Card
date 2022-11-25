import React from 'react';
import './App.css';
import Card from './componenets/cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componenets/cards';



function App() {
   return(
    

   <>
       <h1 className="heading">OLX CARD</h1>
      <div className='second'>

       <Card imgsrc= "olx1.jpeg"  title= "Mehran Car" rs= "Rs 5,70000" address= "Port Qasim, Karachi . 5 days ago" featured=  {true}/>
            <Card imgsrc= "olx3.jpeg" title= "Vivo Y15s" rs= "Rs 60,000" address= "Shalimar ,Lahore . 5 days ago" featured=  {true}/>
            <Card imgsrc= "olx6.jpeg" title= "LENOVO THINKPAD" rs= "Rs 40,000" address= "Dhok Kala Khan,Quetta . 5 days ago" featured=  {true}/>
            <Card imgsrc= "olx4.jpeg" title= "Realme Mobile" rs= "Rs 50,000" address= "Chaman, Balochistan . 5 week ago" featured=  {false}/>
            <Card imgsrc= "olx5.jpeg" title= "Electric" rs= "Rs 5,70000" address= "New Town, Hyderabad . 1 month ago" featured=  {true}/>
            <Card imgsrc= "olx7.jpeg" title= "Betlis Sofa" rs= "Rs 30000" address= "Malir, Karachi . 9 days ago" featured=  {false}/>
            <Card imgsrc= "olx2.jpeg" title= "Furniture Shop" rs= "Rs 1,70000" address= "Saddar, Karachi . 2 week ago" featured=  {false}/>
    
      </div>
    </>
   
       
       )
       
    }
    
    


export default App;

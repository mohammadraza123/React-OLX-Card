// import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import  {AiOutlineHeart} from 'react-icons/ai';
function BasicExample(props) {
  console.log(props)
  return(

    
    <div id="olx_card">

      <Card  class="how" style={{ width: '18rem' }} >
      <Card.Img variant="top" src = "olx1.jpeg"/>
      <Card.Body>
        <Card.Title>Featured</Card.Title>
        <Card.Text>
          Mehran Car
<AiOutlineHeart  id="icon"/>
 </Card.Text>
        <h5>Rs 5,70000</h5>
        <p>Port Qasim, Karachi . 5 days ago</p>
      </Card.Body>
    </Card>
    </div>
    );
  }
    
  export default BasicExample;


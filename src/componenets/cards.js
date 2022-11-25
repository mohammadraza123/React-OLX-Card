// import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import  {AiOutlineHeart} from 'react-icons/ai';
function BasicExample(props) {
  console.log(props)
  return(

    
    <div id="olx_card">

     <Card  class="how" style={{ width: '18rem' }} >
      <Card.Img variant="top" src = {props.imgsrc}/>
      <Card.Body>
        {props.featured && <Card.Title>Featured</Card.Title>}
        <Card.Text>
          {props.title}
<AiOutlineHeart  id="icon"/>
 </Card.Text>
        <h5>{props.rs}</h5>
        <p>{props.address}</p>
      </Card.Body>
    </Card>
    </div>
    );
  }
    
  export default BasicExample;


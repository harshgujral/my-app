import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck ,faMarker ,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup ,Col ,Form ,Row} from 'react-bootstrap';
import './list.css';
export default function List({data , edit,deleteItm,disabled}){
    const {text , index} = data;
    
    // const edit =()=>{
    //     let input = document.getElementById("input")
    //     alert(input.innerText);

    //     // input.innerHTML=`<input type= "text" value="${text}" />`
    // }
// const edit = ()=>{

// }
   
    return(
      
        <>
        {/* <ListGroup className="list-main">
  <ListGroup.Item className=" list-group-item" id="input">{text}

 <div className="icons">
     <span ><FontAwesomeIcon icon={faCheck} /></span>
     <span onClick={edit}><FontAwesomeIcon icon={faMarker} /></span>
     <span><FontAwesomeIcon icon={faTrashCan} /></span>
 </div>
 </ListGroup.Item>
</ListGroup> */}


<Row className="d-flex align-items-center sp" >
<Col lg={9} >

<Form.Control type="text" placeholder="Enter a Text" value={text} className=""  disabled  />
</Col>

<Col lg={3}>
<div className="icons text-white">
     <span ><FontAwesomeIcon icon={faCheck} /></span>
     <span onClick={edit}><FontAwesomeIcon icon={faMarker} /></span>
     <span onClick ={()=>deleteItm(index)}> <FontAwesomeIcon icon={faTrashCan} /></span>
 </div>

</Col>


</Row>

{/* <ListGroup className="list-main">
  <ListGroup.Item className=" list-group-item" id="input">{text}

 <div className="icons">
     <span ><FontAwesomeIcon icon={faCheck} /></span>
     <span onClick={edit}><FontAwesomeIcon icon={faMarker} /></span>
     <span><FontAwesomeIcon icon={faTrashCan} /></span>
 </div>
 </ListGroup.Item>
</ListGroup>
         */}
        
        </>
    )
}
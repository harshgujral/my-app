import React , {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button , Col , Row} from 'react-bootstrap';
import './home.css';
import { Container } from "react-bootstrap";
import List from "./list/list";



export default function Home(){
    let arr = [ {
        text : "first element"
    },

    {
        text : "second element"
    }]; 
    const [value , setValue] = useState(arr)
   
//   const changeItm = (e)=>{
//    setValue(e.target.value)
//   }
const add=()=>{
  
    const inputVal = document.querySelector(".input").value;
   const updateArr = [...value]
    updateArr.push({text : inputVal});
    setValue(updateArr);
    console.log(updateArr)

    document.querySelector(".input").value = "";

}


const deleteItm = ()=>{
    const update = [...value]

// const del = number.target.element.attributes.getNamedItem('number').value;

alert("number")

// alert("deleteing" , index.target.attributes.getNamedItem('number').value)

    // const delItm =  e.target.element.attributes.getNamedItem(
    //     'number'
    //   ).value;
    //   alert(delItm)
    
}
   const edit = (e)=>{
   alert("value")
   
   }
  


    return(
        <>        
<Container>
    <Row>
        <Col>
<div className="box d-flex justify-content-center">
    <div fluid= "sm" className="content  p-3"> 
    <h1 className="text-white fs-3 text-center">To Do List</h1>

<Row>
<Col sm={9} md={9} >
    <Form.Control type="text" placeholder="Enter a Text" className="input" />
    </Col>
    <Col  sm={3}  md={3}>
    <Button variant="info" className="w-100 text-light"  onClick={add}>Click To Add</Button>{' '}
    </Col>
    </Row>
 
 {/* <List /> */}
 {
            value.map((presentData , index) =>(
                <List  key ={index} number = {index} data = {presentData} edit = {edit}  deleteItm = {deleteItm} />
            ))
 }
    </div>
</div>
</Col>
</Row>
</Container>

</>

    )
}
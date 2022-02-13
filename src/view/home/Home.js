import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button } from 'react-bootstrap';
import './home.css';
import { Container } from "react-bootstrap";
export default function Home(){
    return(
        <>        <h1>welcome to home page </h1>
<Container>
<div className="box">
    <div className="content">
    <h1>To Do List</h1>
<div className="input-field d-flex align-items-center">
    <Form.Control type="email" placeholder="Enter email" className="mx-2"/>
    <Button variant="outline-light mx-2 ">+</Button>{' '}

    </div>
    </div>
</div>

</Container>

</>

    )
}
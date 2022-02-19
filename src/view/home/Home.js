import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './home.css';
import { Container } from "react-bootstrap";
import List from "./list/list";

export default function Home() {
    const [value, setValue] = useState([])


    useEffect(() => { console.log("Value", value) }, [value])

    const add = () => {
        const inputVal = document.querySelector(".input").value;
        const updateArr = [...value]
        if (!inputVal) {
        } else {
            updateArr.push({ text: inputVal });
            setValue(updateArr);
            console.log("Add", updateArr)
            document.querySelector(".input").value = "";
        }
    }
    const deleteItm = (index) => {
        const update = [...value];
        alert(index)
        update.splice(index, 1);
        console.log("Values", update)
        setValue(update)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="box d-flex justify-content-center">
                            <div fluid="sm" className="content  p-3">
                                <h1 className="text-white fs-3 text-center">To Do List</h1>
                                <Row>
                                    <Col sm={9} md={9} >
                                        <Form.Control type="text" placeholder="Enter a Text" className="input" />
                                    </Col>
                                    <Col sm={3} md={3}>
                                        <Button variant="info" className="w-100 text-light" onClick={add}>Click To Add</Button>{' '}
                                    </Col>
                                </Row>
                                {
                                    value.map((presentData, index) => (
                                        <List key={index} data={presentData} index={index} deleteItm={() => deleteItm(index)} />
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
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMarker, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Col, Form, Row } from 'react-bootstrap';
import './list.css';
export default function List({ data, index, deleteItm }) {
    const { text } = data;
    const [taskValue, setTaskValue] = useState(text);
    const [task, setTask] = useState({ disabled: true, textDecoration: "none" })
    const [line, setLine] = useState({ textDecoration: "none" })
    const edit = () => {
        if (task.disabled == true) {
            setTask({ disabled: false })
        } else {
            setTask({ disabled: true })
        }
    }

    const onChangeText = (e) => {
        setTaskValue(e.target.value);
    };


    const done = () => {
        // alert("done")

        if (line.textDecoration == "none") {
            setLine({
                textDecoration: "line-through"
            })
        } else setLine({
            textDecoration: "none"
        })

    }
    // let line = document.getElementById("line")
    //     if (line.style.textDecoration == "none"){
    //         line.style.textDecoration = "line-through";
    //     }else {
    //         line.style.textDecoration = "none";
    //     }
    // }



    return (

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
                    <s id="line" style={{ textDecoration: line.textDecoration }}>
                        <Form.Control type="text" placeholder="Enter a Text" value={text} className="" disabled={task.disabled} onChange={onChangeText} />
                    </s>
                </Col>

                <Col lg={3}>
                    <div className="icons text-white">
                        <span onClick={done} ><FontAwesomeIcon icon={faCheck} /></span>
                        <span onClick={edit}><FontAwesomeIcon icon={faMarker} /></span>
                        <span onClick={ deleteItm}> <FontAwesomeIcon icon={faTrashCan} /></span>
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
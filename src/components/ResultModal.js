import React,{useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/esm/Form";
import {saveScore} from "../utils";

function ResultModal({ show, handleClose, header, body,fetchLeaderBoard }) {
    const [name, setName] = useState(null);
    const [leaderboard,setLeaderboard] =useState(null);

    useEffect(()=> {
        if (show){
            fetchLeaderBoard().then(setLeaderboard);
        }
    },[show]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{body}</p>
                {!leaderboard && <p> Loading Leaderboad...</p>}
                {leaderboard && leaderboard.map((entry,i) => (
                    <p key ={i}>{entry}</p>
                    ))}
                    <Form.Control type= "text"
                          placeholde4r="Your Name"
                          onChange={(event) => setName(event.target.value)}
            />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light"
                        onClick= {()=> {
                            if (name) {
                                saveScore(name);
                            }
                            handleClose();
                        }}
                        >
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ResultModal;

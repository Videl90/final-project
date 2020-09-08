import React from "react";
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import "./styles.css"

function ModalProject (props) {
    console.log(props.oneFlight);

    let changeFormat = (time) => {
        let newTime = time.split("T");
        return newTime[1]
    }

    let changeFormat2 = (date) => {
        let newDate = date.split("T");
        console.log(newDate);
        return newDate[0]
    }

    let changeDuration = (duration) => {
        let newDuration = duration.split("T");
        return newDuration[1]
    }

    return (
        // <h1>Hola</h1>
        props.oneFlight.map(flight => {
            return (
                <Modal
        {...props}
        size="md"
        className="modal-cont"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          Flight Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row>
                <Col xs={6} md={6}>
                <div>
                    <h6 className="departure-title">Departure</h6>
                    {console.log(flight.itineraries[0].segments[0].departure.at)}
                    <p className="flight-info"><strong>Date:</strong> {changeFormat2(flight.itineraries[0].segments[(flight.itineraries[0].segments.length) - 1].departure.at)}</p>
                    <p className="flight-info"><strong>Departure Time:</strong> <span>{changeFormat(flight.itineraries[0].segments[0].departure.at)}</span></p>
                    <p className="flight-info"><strong>Duration:</strong> <span>{changeDuration(flight.itineraries[0].duration)}</span></p>
                    <p><strong>Stops: </strong><span>{(flight.itineraries[0].segments.length) - 1}</span></p>
                </div>
                </Col>
                <Col xs={6} md={6}>
                <div>
                    <h6 className="departure-title">Arrival</h6>
                    <p className="flight-info"><strong>Date:</strong> {changeFormat2(flight.itineraries[1].segments[(flight.itineraries[1].segments.length) - 1].departure.at)}</p>
                    <p className="flight-info"><strong>Departure Time:</strong> <span>{changeFormat(flight.itineraries[1].segments[(flight.itineraries[1].segments.length) - 1].departure.at)}</span></p>
                    <p className="flight-info"><strong>Duration:</strong> <span>{changeDuration(flight.itineraries[1].duration)}</span></p>
                    <p><strong>Stops: </strong><span>{(flight.itineraries[1].segments.length) - 1}</span></p>
                </div>
                </Col>
            </Row>
            <div>
                <hr></hr>
            </div>
            <Row>
                <Col xs={6} md={6}>
                    <div>
                        <p><strong>Luggage: </strong><i class="fas fa-suitcase-rolling"></i></p>
                        <p><strong>Class: </strong><span>{flight.travelerPricings[0].fareDetailsBySegment[0].cabin}</span></p>
                        <p><strong>Available seats:</strong> {flight.numberOfBookableSeats}</p>
                    </div>
                </Col>
                <Col xs={6} md={6}>
                <p><strong>Adult Price:</strong> {flight.travelerPricings[0].price.total * 2} {flight.price.currency}</p>
                <p><strong>Child Price:</strong> {flight.travelerPricings[1].price.total * 2} {flight.price.currency}</p>
                </Col>
            </Row>   
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.chooseFlight}>Choose</Button>
      </Modal.Footer>
    </Modal>
            )
        })
    )
}

export default ModalProject;
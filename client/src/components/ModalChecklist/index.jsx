import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function ModalList(props) {
    //   console.log(props.oneList[0]);
    const { oneList: list } = props;
    console.log("MODAL", props, list);
  return (
        <Modal
          {...props}
          size="sm"
          className="modal-cont"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show= {props.show}
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="modal-title"
            >
              {list?.tripName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <Row>
                    <table className="listTable">
                      <thead>
                        <tr>
                          <th>List of items</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list?.checklist[0].items.map((item) => {
                          return (
                            <tr>
                              <td>{item}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
//     })
//   );
}

export default ModalList;

import React from 'react'
import { CardBody, Card, Button, FormGroup, Col, CardTitle } from 'reactstrap'

const Dashboard = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#003135", height: "100vh" }}>
            <Card style={{
                width: '400px'
            }}
                className="my-2"
                color="light"
            >
                <CardBody>
                    <CardTitle tag="h4" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        Choose a client
                    </CardTitle>
                    <FormGroup row>
                        <Col sm="12" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Button color='primary'>
                                Client 1
                            </Button>
                            <Button color='primary'>
                                Client 2
                            </Button>
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        </div>
    )
}

export default Dashboard

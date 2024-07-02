import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Label, Input, Row, Col, FormGroup, Form, Card, CardTitle, CardBody } from "reactstrap"

const SignUp = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#003135", height: "100vh" }}>
            <Card style={{
                width: '400px'
            }}
                color="light"
            >
                <CardBody>
                    <CardTitle tag="h4" style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                        Registration Form
                    </CardTitle>
                    <Form>
                        <FormGroup row>
                            <Label
                                for="Email"
                                sm={3}
                            >
                                Email
                            </Label>
                            <Col sm={9}>
                                <Input
                                    id="Email"
                                    name="email"
                                    placeholder="Enter Email"
                                    type="email"
                                    style={{ width: "250px" }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="Password"
                                sm={3}
                            >
                                Password
                            </Label>
                            <Col sm={9}>
                                <Input
                                    id="Password"
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    style={{ width: "250px" }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="CnfPassword"
                                sm={3}
                            >
                                Password
                            </Label>
                            <Col sm={9}>
                                <Input
                                    id="CnfPassword"
                                    name="password"
                                    placeholder="Confirm Password"
                                    type="password"
                                    style={{ width: "250px" }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="role"
                                sm={3}
                            >
                                Role
                            </Label>
                            <Col sm={9}>
                                <Input
                                    id="role"
                                    name="role"
                                    placeholder="Enter Role"
                                    type="text"
                                    style={{ width: "250px" }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm="12" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "110px", paddingRight: "30px" }}>
                                    <Button color='primary'>
                                        SignUp
                                    </Button>
                                    <Button color='primary'>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default SignUp

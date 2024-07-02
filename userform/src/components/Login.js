import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Label, Input, Row, Col, FormGroup, Form, Card, CardTitle, CardBody } from "reactstrap"

const Login = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#003135", height: "100vh" }}>
            <Card style={{
                width: '400px'
            }}
                color="light"
            >
                <CardBody>
                    <CardTitle tag="h4" style={{ display: "flex", justifyContent: "center" }}>
                        User Login
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
                        <FormGroup>
                            <Row>
                                <Col sm="12" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "110px", paddingRight: "30px" }}>
                                    <Button color='primary'>
                                        Login
                                    </Button>
                                    <Button color='primary'>
                                        Reset
                                    </Button>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                sm={6}
                            >
                                Do not have account
                            </Label>
                            <Col sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                < a href='' style={{ textDecoration: "none", border: "1px solid black" }}>SignUp</a>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login

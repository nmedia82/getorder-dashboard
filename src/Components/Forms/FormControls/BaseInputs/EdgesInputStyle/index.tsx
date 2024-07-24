import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { EdgesInputStyleTitle, EmailAddress, Password, CareerSelectTitle, DefaultFileText, DefaultInput, Comments } from '../../../../../Utils/Constants'
import { edgesInputStyleSubTitle, careerEdgesList } from '../../../../../Data/Forms/FormControls'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'
import GenderRadioInput from '../Common/GenderRadioInput'
import CardFooterSection from '../Common/CardFooterSection'

export default function EdgesInputStyle() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={EdgesInputStyleTitle} subTitle={edgesInputStyleSubTitle} />
                <Form className="theme-form dark-inputs" onSubmit={handleSubmit}>
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput5">{EmailAddress}</Label>
                                    <Input className="btn-pill" id="exampleFormControlInput5" type="email" placeholder="name@example.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleInputPassword6">{Password}</Label>
                                    <Input className="btn-pill" id="exampleInputPassword6" type="password" placeholder="Password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row><CommonSelectDropdown title={CareerSelectTitle} inputClass='btn-pill digits' options={careerEdgesList} /></Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="formFileSimple">{DefaultFileText}</Label>
                                    <Input className="btn-pill px-4" id="formFileSimple" type="file" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>{DefaultInput}</Label>
                                    <Input className="btn-pill" type="text" placeholder="Default input" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <GenderRadioInput />
                        <Row>
                            <Col>
                                <div>
                                    <Label htmlFor="exampleFormControlTextarea9">{Comments}</Label>
                                    <Input className="btn-pill" id="exampleFormControlTextarea9" type="textarea" rows="3" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}


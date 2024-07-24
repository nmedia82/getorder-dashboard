import React, { ChangeEvent, useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../Types/Forms.type';
import { Btn, H6, P } from '../../../../../AbstractElements';
import { Address, BillingInformation, ContactNumber, Country, Email, FirstName, LastName, OtherNotes, ProceedToNext, RememberMeNext, State, ZipCode } from '../../../../../Utils/Constants';
import { countryData } from '../../../../../Data/Forms/FormLayout';

export default function BillingForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", contact: "", email: "", address: "", country: "", state: "", zip: "", rememberNextTime: false, otherNotes: "", });
    const { firstName, lastName, contact, email, address, country, state, zip, rememberNextTime, otherNotes, } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && address !== "" && country !== "" && state !== "" && zip !== "" && rememberNextTime !== false && otherNotes !== "") {
            activeCallBack(2);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <>
            <H6>{BillingInformation}</H6>
            <P className="f-light">{'Fill up the following information '}</P>
            <Form onSubmit={(event) => event.preventDefault} className="needs-validation " noValidate>
                <Row className='g-3'>
                    <Col sm={6}>
                        <Label>{FirstName}<span className="txt-danger">*</span></Label>
                        <Input value={firstName} onChange={updateFormData} name="firstName" type="text" placeholder="Enter first name" />
                    </Col>
                    <Col sm={6}>
                        <Label>{LastName}<span className="txt-danger">*</span></Label>
                        <Input value={lastName} onChange={updateFormData} name="lastName" type="text" placeholder="Enter last name" />
                    </Col>
                    <Col sm={6}>
                        <Label>{ContactNumber}</Label>
                        <Input value={contact} onChange={updateFormData} name="contact" type="number" placeholder="Enter number" />
                    </Col>
                    <Col sm={6}>
                        <Label>{Email}<span className="txt-danger">*</span></Label>
                        <Input value={email} onChange={updateFormData} name="email" type="email" placeholder="yuri@example.com" />
                    </Col>
                    <Col xs={12}>
                        <Label>{Address} </Label>
                        <Input value={address} onChange={updateFormData} type="textarea" name="address" rows={3} />
                    </Col>
                    <Col sm={4}>
                        <Label>{Country}</Label>
                        <Input type="select" value={country} onChange={updateFormData} name="country">
                            {countryData.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </Input>
                    </Col>
                    <Col sm={4}>
                        <Label>{State}</Label>
                        <Input value={state} onChange={updateFormData} name="state" type="text" placeholder="Enter state" />
                    </Col>
                    <Col sm={4}>
                        <Label>{ZipCode}</Label>
                        <Input value={zip} onChange={updateFormData} type="text" name="zip" />
                    </Col>
                    <Col xs={12}>
                        <FormGroup check>
                            <Input name="rememberNextTime" onChange={updateFormData} id="invalid-check-wizard" type="checkbox" required />
                            <Label className="mb-0 d-block" htmlFor="invalid-check-wizard" check>{RememberMeNext}</Label>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <Label htmlFor="exampleFormControlTextarea-01">{OtherNotes}</Label>
                        <Input value={otherNotes} onChange={updateFormData} type="textarea" name="otherNotes" rows={3} placeholder="Enter your queries..." />
                    </Col>
                    <Col xs={12} className="text-end">
                        <Btn onClick={handleNextButton} color="primary">{ProceedToNext}<i className="fa fa-truck proceed-next" /></Btn>
                    </Col>
                </Row>
            </Form>
        </>
    )
}


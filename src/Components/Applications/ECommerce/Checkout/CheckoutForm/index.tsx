import React, { useState } from 'react'
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CheckoutFormType } from '../../../../../Types/ECommerce.type';
import { Address, CheckMeOut, EmailAddress, FirstName, LastName, LooksGood, Phone, PlaceOrder, PostalCode, StateCountry, TownCity } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import CheckoutSelect from './CheckoutSelect';

export default function CheckoutForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm<CheckoutFormType>();
    const [validate, setValidate] = useState(false);
    const onSubmit: SubmitHandler<CheckoutFormType> = (data) => {
        if (data) {
            setValidate(true);
            alert("You submitted the form and stuff!");
            navigate(`${process.env.PUBLIC_URL}/invoice/invoice_1`);
        } else {
            alert("Please add details");
        }
    };
    return (
        <Col xl={6} sm={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className='g-3'>
                    <Col sm={6}>
                        <Label>{FirstName}</Label>
                        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''} ${validate && !errors.firstName ? 'is-valid' : ''}`} {...register("firstName", { required: "Please enter your valid name" })} />
                        {errors.firstName && (<FormFeedback>{errors.firstName.message}</FormFeedback>)}
                        {validate && !errors.firstName && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <Col sm={6}>
                        <Label>{LastName}</Label>
                        <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''} ${validate && !errors.lastName ? 'is-valid' : ''}`} {...register("lastName", { required: "Please enter your valid name" })} />
                        {errors.lastName && (<FormFeedback>{errors.lastName.message}</FormFeedback>)}
                        {validate && !errors.lastName && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <Col sm={6}>
                        <Label>{Phone}</Label>
                        <input type="number" className={`form-control ${errors.phone ? 'is-invalid' : ''} ${validate && !errors.phone ? 'is-valid' : ''}`} {...register("phone", { required: "Please enter your number" })} />
                        {errors.phone && (<FormFeedback>{errors.phone.message}</FormFeedback>)}
                        {validate && !errors.phone && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <Col sm={6}>
                        <Label>{EmailAddress}</Label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''} ${validate && !errors.email ? 'is-valid' : ''}`} {...register("email", { required: "Please enter your email" })} />
                        {errors.email && (<FormFeedback>{errors.email.message}</FormFeedback>)}
                        {validate && !errors.email && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <CheckoutSelect />
                    <Col xs={12}>
                        <Label>{Address}</Label>
                        <input type="text" className={`form-control ${errors.address ? 'is-invalid' : ''} ${validate && !errors.address ? 'is-valid' : ''}`} {...register("address", { required: "Please enter your address" })} />
                        {errors.address && (<FormFeedback>{errors.address.message}</FormFeedback>)}
                        {validate && !errors.address && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <Col xs={12}>
                        <Label>{TownCity}</Label>
                        <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''} ${validate && !errors.city ? 'is-valid' : ''}`} {...register("city", { required: "Please enter your city" })} />
                        {errors.city && (<FormFeedback>{errors.city.message}</FormFeedback>)}
                        {validate && !errors.city && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </Col>
                    <Col xs={12}>
                        <Label>{StateCountry}</Label>
                        <input type="text" className={`form-control ${errors.state ? "is-invalid" : ''} ${validate && !errors.state ? "is-valid" : ""}`} {...register("state", { required: "Please enter your state" })} />
                        {errors.state && <FormFeedback>{errors.state.message}</FormFeedback>}
                        {validate && !errors.state && (<FormFeedback valid>{LooksGood}</FormFeedback>)}
                    </Col>
                    <Col xs={12}>
                        <Label>{PostalCode}</Label>
                        <input type="number" className={`form-control ${errors.pincode ? "is-invalid" : ''} ${validate && !errors.pincode ? "is-valid" : ""}`} {...register("pincode", { required: "Please enter your postal code" })} />
                        {errors.pincode && <FormFeedback>{errors.pincode.message}</FormFeedback>}
                        {validate && !errors.pincode && (<FormFeedback valid>{LooksGood}</FormFeedback>)}
                    </Col>
                    <Col xs={12}>
                        <FormGroup check>
                            <Input type="checkbox" id="gridCheck" required />
                            <Label htmlFor="gridCheck" check>{CheckMeOut}</Label>
                        </FormGroup>
                    </Col>
                    <div className="order-place">
                        <Btn color='primary'>{PlaceOrder}</Btn>
                    </div>
                </Row>
            </Form>
        </Col>
    )
}
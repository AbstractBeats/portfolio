import React from "react";
import { Button, Form } from "react-bootstrap";

function Contact(){
    return(<div className="form">
        <Form name ="contact" method="POST" data-netlify='true' onSubmit='submit'>
        <Form.Control className="d-none" name="form-name" value="contact"></Form.Control>
        <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Label>Your Email.</Form.Label>
            <Form.Control className="input" type = "email" name="Email" placeholder="your email" required/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control className="input" type = "text" name="name" placeholder="your name" required/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Send us your opinions!</Form.Label>
            <Form.Control className="input" as="textarea" rows={4} name="opinion"></Form.Control>
        </Form.Group>
        <Button type="submit" variant="outline-primary" size="lg">Submit</Button>
        </Form>
        </div>)
}

export default Contact
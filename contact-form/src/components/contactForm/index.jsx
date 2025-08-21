import React from 'react';
import InputField from '../common/inputField';
import Label from '../common/labels';
import styled from 'styled-components';
import Button from '../common/button';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const ContactForm = () => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("name", event.target[1].value);
        
    }
    return (
       <form onSubmit={onSubmit} style={{marginTop:'20px'}}>
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <InputField type="text" name="name" placeholder="Enter your name"/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <InputField type="email" name="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="message">Message</Label>
                <InputField as="textarea" name="message" rows="4" placeholder="Enter your message" />
            </FormGroup>
            <Button type="submit" $variant="outline" size="large" $margin="10px 0 0 0">Submit</Button>
        </form>
    );
};

export default ContactForm;
import React from 'react';
import Input from '../../atoms/Input';
import { Header, InputContainer, Label, TextEditor, Wrapper } from './styles';

const BookAppointment = () => {
  return (
    <Wrapper>
      <Header>Book Appointment</Header>
      <InputContainer>
        <Label>Full Name</Label>
        <Input placeholder="Enter Full Name" />
      </InputContainer>
      <InputContainer>
        <Label>Email Address or Phone number ?</Label>
        <Input placeholder="abcd@gmail.com" />
      </InputContainer>
      <InputContainer>
        <Label>Special Request ?</Label>
        <TextEditor placeholder="Type a Message " />
      </InputContainer>
      <InputContainer>
        <div className="check-wrapper">
          <Label>Do you have any allerges ?</Label>
          <div className="check-wrapper__container">
            <label>Yes</label>
            <div></div>
          </div>
          <div className="check-wrapper__container">
            <label>No</label>
            <div></div>
          </div>
        </div>
        <TextEditor placeholder="Type a Message " />
      </InputContainer>
    </Wrapper>
  );
};

export default BookAppointment;

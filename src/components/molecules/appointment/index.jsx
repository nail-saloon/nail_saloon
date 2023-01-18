import React from 'react';
import { DPIconCancelBtn } from '../../../icons';
import Input from '../../atoms/Input';
import {
  Footer,
  Header,
  InputContainer,
  Label,
  SelectDrop,
  TextEditor,
  Wrapper,
} from './styles';

const BookAppointment = ({ onClose }) => {
  return (
    <Wrapper>
      <Header>
        Book Appointment
        <DPIconCancelBtn className="btn-cancel" onClick={onClose} />
      </Header>
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
            <Input type="radio" className="check" />
          </div>
          <div className="check-wrapper__container">
            <label>No</label>
            <Input type="radio" className="check" />
          </div>
        </div>
        <TextEditor placeholder="Type a Message " />
      </InputContainer>

      <InputContainer>
        <Label>Prefered Date and Time ?</Label>
        <Input type="datetime-local" />
      </InputContainer>

      <SelectDrop name="nails" id="nails">
        <option value="Nails">Nails</option>
        <option value="medicure">Medicure</option>
        <option value="Predicure">Predicure</option>
      </SelectDrop>
      <Footer>Go to homepage</Footer>
    </Wrapper>
  );
};

export default BookAppointment;

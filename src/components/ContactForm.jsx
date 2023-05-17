import React from 'react';

import { addContactRedux } from 'slice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();
    const fieldResult = {
      key: nanoid(),
      name: evt.target.elements.contactName.value.trim(),
      number: evt.target.elements.contactPhone.value.trim(),
    };
    dispatch(addContactRedux(fieldResult));
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="contactName">Name</label>
      <input id="contactName" name="contactName" type="text" />
      <label htmlFor="contactPhone">Number</label>
      <input
        id="contactPhone"
        name="contactPhone"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit" className="submitButton">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

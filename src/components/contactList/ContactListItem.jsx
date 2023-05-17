import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContactRedux } from 'slice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="itemContainer">
        <span>{name}: </span>
        <span>{number}</span>
        <button onClick={() => dispatch(removeContactRedux(id))}>Delete</button>
      </div>
    </li>
  );
};

export default ContactListItem;

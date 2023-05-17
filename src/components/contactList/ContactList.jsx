import React from 'react';
import ContactListItem from './ContactListItem';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const currentFilter = useSelector(state => state.filter);
  const a = useSelector(state => state.contacts);
  return (
    <ul>
      {a.map(
        value =>
          value.name.includes(currentFilter) && (
            <ContactListItem
              key={value.key}
              id={value.key}
              name={value.name}
              number={value.number}
            />
          )
      )}
    </ul>
  );
};

export default ContactList;

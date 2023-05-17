import React from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './contactList';
import Filter from './Filter';
// import Filter from './Filter';

const App = () => {
  return (
    <div className={css.goitTemplateMarkup}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;

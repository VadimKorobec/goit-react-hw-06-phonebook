import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';

export const App = () => {
  const startContacts =
    JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  const [contacts, setContacts] = useState(startContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    const notification = contacts.find(item => item.name === contact.name);

    if (notification) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const filterContact = search => {
    setFilter(search);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm formSubmitHandle={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} filterContact={filterContact} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
};

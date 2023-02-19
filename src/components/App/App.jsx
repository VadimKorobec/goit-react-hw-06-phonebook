import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilteredConctacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredConctacts);

  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactsListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

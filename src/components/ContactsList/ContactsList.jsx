import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilteredConctacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredConctacts);

  return (
    <>
      <ul>
        <li key={contacts.id}>
          {contacts.map(contact => {
            return <ContactsListItem contact={contact} />;
          })}
        </li>
      </ul>
    </>
  );
};

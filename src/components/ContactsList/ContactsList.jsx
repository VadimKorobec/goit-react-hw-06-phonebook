import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilteredConctacts } from 'redux/selectors';

export const ContactsList = ({ deleteContact }) => {
  const contacts = useSelector(getFilteredConctacts);

  return (
    <>
      <li>
        {contacts.map(contact => {
          return (
            <ContactsListItem
              key={contacts.id}
              contact={contact}
              deleteContact={() => deleteContact(contact.id)}
            />
          );
        })}
      </li>
    </>
  );
};

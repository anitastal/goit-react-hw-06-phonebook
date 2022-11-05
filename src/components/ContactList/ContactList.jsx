import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteUser = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => handleDeleteUser(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

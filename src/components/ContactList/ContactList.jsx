import { ContactItem, Button, Contacts, ContactText} from './ContactList.styled';
import { removeContacts } from 'redux/phonebookSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normalizeFilter = filter.toLowerCase();
   
  const getVisibleContacts = () => {
    if (filter !== '') {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizeFilter)
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts();
      
   const deleteContactById = contactId => {
    dispatch(removeContacts(contactId));
  };

  return (
    <Contacts>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            <ContactText>
              {name} : {number}
            </ContactText>
            <Button
              type='button'
              name="Delete"
              onClick={() => deleteContactById(id)}
            >
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </Contacts>
  );
};
import { Main } from './Main/Main';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { P, SectionTitle } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Main title="Phonebook">
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <SectionTitle>Contacts</SectionTitle>
          <Filter title="Find contact by name" />
          <ContactList />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </Main>
  );
};

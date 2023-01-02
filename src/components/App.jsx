import { nanoid } from 'nanoid/non-secure';
import { Main } from './Main/Main';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { P, SectionTitle } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageContacts);
    return parsedContacts || [];
  });
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmit = data => {
    const id = nanoid();
    const isExist = contacts.find(contact => contact.name === data.name);

    if (isExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, { name: data.name, number: data.number, id: id }];
    });
  };

  const onClickDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <Main title="Phonebook">
      <ContactForm onChange={handleChange} onSubmit={formSubmit} />
      {contacts.length > 0 ? (
        <>
          <SectionTitle>Contacts</SectionTitle>
          <Filter
            title="Find contact by name"
            onChange={handleChange}
            value={filter}
          />
          <ContactList
            contacts={visibleContacts}
            onClickDelete={onClickDelete}
          />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </Main>
  );
};

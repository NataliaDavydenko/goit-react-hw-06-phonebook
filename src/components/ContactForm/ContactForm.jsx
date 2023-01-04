import { ButtonAdd } from 'components/PhoneBook/ButtonAdd';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { InputName } from 'components/PhoneBook/InputName';
import { InputTel } from 'components/PhoneBook/InputTel';
import { LabelContact } from 'components/PhoneBook/LabelContact';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContact = data => {
    const id = nanoid();
    data.id = id;
    contacts.filter(contact => contact.name === data.name).length > 0
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContacts({ name, number, id }));
  };

  const clickOnBtnAdd = e => {
    e.preventDefault();
    addContact({ name, number });
    reset();
  };
  
  return (
    <>
      <PhoneBook onSubmit={clickOnBtnAdd}>
        <LabelContact title="Name">
          <InputName value={name} onChange={handleChange} />
        </LabelContact>
        <LabelContact title="Number">
          <InputTel value={number} onChange={handleChange} />
        </LabelContact>
        <ButtonAdd text="Add contact" />
      </PhoneBook>
    </>
  );
};

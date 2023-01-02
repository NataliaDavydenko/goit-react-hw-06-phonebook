import { ButtonAdd } from 'components/PhoneBook/ButtonAdd';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { InputName } from 'components/PhoneBook/InputName';
import { InputTel } from 'components/PhoneBook/InputTel';
import { LabelContact } from 'components/PhoneBook/LabelContact';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const clickOnBtnAdd = e => {
    e.preventDefault();
    onSubmit({ name, number });
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

import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/phonebookSlice';

export const Filter = () => {
   const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (<div>
    <Label>Find contacts by name</Label>
    <Input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={onChange}
      value={filter}
      placeholder="Enter name"
    />
  </div>)
}

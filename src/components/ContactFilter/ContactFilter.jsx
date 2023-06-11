import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './ContactFilter.styled';
function ContactFilter({ filter, handleChangeFilter }) {
  return (
    <Container>
      <Label htmlFor="Filter">Find contacts by name</Label>
      <Input
        id="Filter"
        onChange={handleChangeFilter}
        value={filter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Container>
  );
}
export default ContactFilter;
ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

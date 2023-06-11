import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List, Button } from './ContactList.styled';
function ContactList({ existingName, onRemove }) {
  return (
    <List>
      {existingName.map(({ name, id, number }) => (
        <ContactItem name={name} key={id} number={number} id={id}>
          <Button type="button" onClick={onRemove} id={id}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
}
export default ContactList;
ContactList.propTypes = {
  existingName: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};

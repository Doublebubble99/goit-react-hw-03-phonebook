import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Info } from './ContactItem.styled';
function ContactItem({ name, number, children }) {
  return (
    <ListItem>
      <Info>
        {name}: {number}
      </Info>
      {children}
    </ListItem>
  );
}
export default ContactItem;
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

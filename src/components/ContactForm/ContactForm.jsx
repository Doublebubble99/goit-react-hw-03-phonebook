import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Wrapper,
} from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };
  onInput = evt => {
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value,
    });
  };
  onSubmit = evt => {
    evt.preventDefault();
    const { number, name } = this.state;
    this.props.addContact({
      number,
      name,
    });
    this.setState({
      number: '',
      name: '',
    });
  };
  render() {
    const { number, name } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form autoComplete="off" onSubmit={this.onSubmit}>
          <Wrapper>
            <Label htmlFor="Name">Name</Label>
            <Input
              value={name}
              id="Name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInput}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="Number">Number</Label>
            <Input
              value={number}
              id="Number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onInput}
            />
          </Wrapper>
          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

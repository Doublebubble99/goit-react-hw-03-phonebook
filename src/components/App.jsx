import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import { MainTitle } from './App.styled';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const store = localStorage.getItem('contacts');
    const parsedStorage = JSON.parse(store);
    if (parsedStorage) {
      this.setState({
        contacts: parsedStorage,
      });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  handleChangeFilter = evt => {
    const target = evt.target;
    this.setState({
      filter: target.value,
    });
  };
  addContact = data => {
    const { contacts } = this.state;
    const item = { ...data, id: nanoid() };
    const isExistingName = contacts.find(({ name }) => name === data.name);
    if (isExistingName) {
      alert(`${isExistingName.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, item],
    }));
  };
  handleRemoveItem = ({ target }) => {
    const { contacts } = this.state;
    const filteredByID = contacts.filter(({ id }) => id !== target.id);
    this.setState(prevState => ({
      contacts: filteredByID,
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    const existingName = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterNormalize.trim());
    });
    return (
      <section>
        <ContactForm addContact={this.addContact} />
        <div>
          <MainTitle>Contacts</MainTitle>
          <ContactFilter
            filter={filter}
            handleChangeFilter={this.handleChangeFilter}
          />
          <ContactList
            existingName={existingName}
            onRemove={this.handleRemoveItem}
          />
        </div>
      </section>
    );
  }
}
export default App;
///
///

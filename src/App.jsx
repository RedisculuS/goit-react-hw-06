import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts, setInitialContacts } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';
import initialContacts from './contacts.json';
import { useEffect } from 'react';

function App() {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(setInitialContacts(initialContacts));
    }
  }, [contacts, dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleSearch = (searchTerm) => {
    dispatch(changeFilter(searchTerm));
  };

  const actualContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={search} onSearch={handleSearch} />
      <ContactList contacts={actualContacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;

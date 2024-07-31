// App.js
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice.js';
import { changeFilter, selectNameFilter } from './redux/filtersSlice.js';

function App() {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

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

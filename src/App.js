import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import shortid from "shortid";
import Container from "./Components/Container";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactsList from "./Components/ContactList";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const onCheckName = (newName) => {
    return contacts.find(({ name }) => name === newName);
  };

  const onAddContact = (name, number) => {
    if (!onCheckName(name)) {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

      setContacts((prevContacts) => [...prevContacts, contact]);
      return;
    }

    alert(`${name} is already in contacts`);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const onResultSearch = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <Container>
      <Section title="My Phonebook">
        <ContactForm onSubmit={onAddContact} />
      </Section>

      <Section title="My Contacts">
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactsList
          contacts={onResultSearch()}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </Container>
  );
};

export default App;

import React from "react";
import Container from "./Components/Container";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactsList from "./Components/ContactList";

const App = () => {
  // const onCheckName = (newName) => {
  //   return contacts.find(({ name }) => name === newName);
  // };

  // const onAddContact = (name, number) => {
  //   if (!onCheckName(name)) {
  //     const contact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };

  //     setContacts((prevContacts) => [...prevContacts, contact]);
  //     return;
  //   }

  //   alert(`${name} is already in contacts`);
  // };

  return (
    <Container>
      <Section title="My Phonebook">
        <ContactForm />
      </Section>

      <Section title="My Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
};

export default App;

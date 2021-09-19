import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./Components/Container";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactsList from "./Components/ContactList";

const App = () => {
  return (
    <>
      <Container>
        <Section title="My Phonebook">
          <ContactForm />
        </Section>

        <Section title="My Contacts">
          <Filter />
          <ContactsList />
        </Section>
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;

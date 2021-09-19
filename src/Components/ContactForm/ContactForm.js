import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { toast } from "react-toastify";
import { getItems } from "../../redux/contacts/contacts-selectors";
import shortid from "shortid";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const checkDublicateName = (newName) => {
    return items.find(({ name }) => name === newName);
  };

  const handleChange = (e) => {
    const value = e.currentTarget.name;
    switch (value) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "number":
        setNumber(e.currentTarget.value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkDublicateName(name)) {
      toast.error(`${name} already exists in the contact book`);
      return;
    }

    dispatch(contactsActions.addContact(name, number));
    setName("");
    setNumber("");
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={nameId} className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameId}
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={numberId} className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberId}
          className={s.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

// const addContact = (name, number) => ({
//   type: "contacts/add",
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: "contacts/delete",
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: "contacts/changeFilter",
//   payload: value,
// });

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default contactsActions;

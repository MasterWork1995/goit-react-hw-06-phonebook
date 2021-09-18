import shortid from "shortid";
import types from "./contacts-types";

const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };

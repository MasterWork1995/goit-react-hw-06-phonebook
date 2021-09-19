import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactList.module.css";

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} classNames={"animate"} timeout={800}>
          <li className={s.item}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              type="button"
              className={s.button}
              onClick={() => dispatch(contactsActions.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: onResultSearch(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
// });

export default ContactsList;

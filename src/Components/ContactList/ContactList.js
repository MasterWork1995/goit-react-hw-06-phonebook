import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactsList = ({ contacts, onDeleteContact }) => {
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
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const onResultSearch = (contacts, filter) => {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      contact.number.includes(filter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: onResultSearch(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

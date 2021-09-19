export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  const items = getItems(state);
  const filter = getFilter(state);

  return items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      contact.number.includes(filter)
  );
};

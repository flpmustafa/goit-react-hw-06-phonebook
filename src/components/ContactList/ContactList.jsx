import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from 'components/ContactList/ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <div className={css.contact__list}>
      <h2>Contacts</h2>
    <ul className={css.contact__roster}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
      </ul>
      </div>
  );
}
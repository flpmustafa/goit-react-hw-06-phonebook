import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import  css from './app.module.css'

export function App() {
  const user = useSelector(state => state.contacts.items);

  return (
    <Section>
      <h2 className={css.h}>Phonebook</h2>
      <ContactForm />
      {!user.length ? (
        <p className={css.h}>Your phonebook is empty. Add your first contact</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Section>
  );
}
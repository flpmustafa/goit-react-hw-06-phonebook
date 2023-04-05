import { useDispatch, useSelector  } from 'react-redux';
import { addContact } from 'Redux/ContactsSlise';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  
  const inputSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value.trim();
    const number = evt.target.elements.number.value;

    if (contacts.some(({ name: nName }) => nName === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact(name, number));
     }
    evt.target.reset();
  };

    return (
      <div className={css.container}>
    <form className={css.form} onSubmit={inputSubmit}>
      <label className={css.label__form}>
        Name
        <input
          className={css.input__contact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter you name"
        />
      </label>
      <label className={css.label__form}>
        Number
        <input
          className={css.input__contact}              
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </label>
          <button
            className={css.btn}
            type="submit"
          >Add contact</button>
    </form>
  </div>
            );
}
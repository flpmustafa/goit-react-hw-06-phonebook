import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/ContactsSlise';
import css from '../ContactListItem/ContactListItem.module.css'

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li
      className={css.contact__item}
      key={id}>
      <p>
            <span>{name} : </span>
            {number}
          </p>
      <button
        className={css.btn__list}
        type="button"
        onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
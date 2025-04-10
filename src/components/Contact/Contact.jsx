import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <p className={styles.contactText}>
        {name}: {number}
      </p>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Видалити
      </button>
    </li>
  );
}
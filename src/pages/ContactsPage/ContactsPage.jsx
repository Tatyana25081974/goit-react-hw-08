import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import styles from './ContactsPage.module.css'; // Імпортуємо стилі

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Мої контакти</h1>

      <div className={`${styles.section} ${styles.formSection}`}>
        <ContactForm />
      </div>

      <div className={`${styles.section} ${styles.searchSection}`}>
        <SearchBox />
      </div>

      <div className={`${styles.section} ${styles.listSection}`}>
        <ContactList />
      </div>
    </div>
  );
}

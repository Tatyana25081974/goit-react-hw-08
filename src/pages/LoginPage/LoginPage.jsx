import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вхід у Книгу контактів</h2>
      <LoginForm />
    </div>
  );
}

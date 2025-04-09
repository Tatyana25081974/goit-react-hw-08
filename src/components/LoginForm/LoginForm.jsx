import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/authOps';
import styles from './LoginForm.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Невірний email').required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Мінімум 6 символів').required("Обов'язкове поле"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Вхід</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Email
            <Field name="email" type="email" className={styles.input} />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </label>

          <label className={styles.label}>
            Пароль
            <Field name="password" type="password" className={styles.input} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </label>

          <button type="submit" className={styles.button}>Увійти</button>
        </Form>
      </Formik>
    </div>
  );
}

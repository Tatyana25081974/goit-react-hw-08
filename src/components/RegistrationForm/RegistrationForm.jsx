import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOps';
import styles from './RegistrationForm.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Імʼя має містити мінімум 2 символи')
    .required('Обовʼязково'),
  email: Yup.string()
    .email('Некоректний email')
    .required('Обовʼязково'),
  password: Yup.string()
    .min(6, 'Пароль має містити мінімум 6 символів')
    .required('Обовʼязково'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    };
    return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Реєстрація</h2>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Ім'я
            <Field name="name" type="text" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>

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

          <button type="submit" className={styles.button}>Зареєструватися</button>
        </Form>
      </Formik>
    </div>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';

// Підключаємо Redux Provider для доступу до store
import { Provider } from 'react-redux';

// Підключаємо store і persistor
import { store, persistor } from './redux/store';

// Підключаємо PersistGate для відкладеного рендеру поки дані не відновляться
import { PersistGate } from 'redux-persist/integration/react';

// Підключаємо наш основний компонент додатку
import App from './components/App/App';

// Підключаємо глобальні стилі
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* PersistGate чекає, поки localStorage відновить стан */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

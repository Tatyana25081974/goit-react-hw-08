// Вибрати всі контакти зі стану
export const selectContacts = (state) => state.contacts.items;

// Вибрати статус завантаження контактів
export const selectIsLoading = (state) => state.contacts.isLoading;

// Вибрати помилку при роботі з контактами
export const selectError = (state) => state.contacts.error;

import { get, limitToFirst, orderByKey, push, query, ref, set, startAfter } from "firebase/database";
import { database } from "./firebase.js";

// Функция для перевірки унікальності email нового користувача
export async function isEmailUnique(email) {
  // Отримання посилання на базу даних:
  const usersRef = ref(database, "users");
  // Отримання даних з бази:
  const snapshot = await get(usersRef);

  // Перевірка наявності даних:
  if (snapshot.exists()) {
    // Дані з snapshot перетворюємо в об'єкт users:
    const users = snapshot.val();

    // Перебір об'єктів користувачів:
    for (const userId in users) {
      if (users[userId].email === email) {
        return false; // Такий Email вже існує
      }
    }
  }
  return true; // Email уникальний
}

// Функція для збереження даних користувача
export async function saveUserData(userId, userData) {
  const userRef = ref(database, `users/${userId}`);
  await set(userRef, userData);
}

// Функція для збереження бази даних teachers !!! В ПРОДАКШЕНІ ВИДАЛИТИ !!!
export async function writeTeachersDatabase(teachers) {
  const teachersRef = ref(database, "teachers");

  teachers.forEach((teacher) => {
    const newTeacherRef = push(teachersRef); // Генерує унікальний ключ для кожного вчителя
    set(newTeacherRef, teacher); // Записує дані вчителя за згенерованим ключем
  });
}

// Функція для отримання викладачів
// export async function fetchTeachers() {
//   const teachersRef = ref(database, "teachers");
//   const snapshot = await get(teachersRef);

//   // Перевіряємо, чи існують дані у базі даних.
//   if (snapshot.exists()) {
//     const teachersArray = [];

//     snapshot.forEach((childSnapshot) => {
//       const teacherId = childSnapshot.key; // Отримуємо унікальний ключ (teacherId)
//       const teacherData = childSnapshot.val(); // Отримуємо дані про вчителя

//       teachersArray.push({ ...teacherData, id: teacherId }); // Додаємо teacherId до об'єкта
//     });

//     return teachersArray; // Повертаємо масив із об'єктами вчителів, включаючи їх IDs
//   }

//   return [];
// }

// Функція для отримання викладачів з пагінацією
export async function fetchTeachers(pageSize, startKey = null) {
  const teachersRef = ref(database, "teachers");
  let teachersQuery;

  // Створюємо запит з пагінацією
  if (startKey) {
    teachersQuery = query(teachersRef, orderByKey(), startAfter(startKey), limitToFirst(pageSize));
  } else {
    teachersQuery = query(teachersRef, limitToFirst(pageSize));
  }

  const snapshot = await get(teachersQuery);

  // Перевіряємо, чи існують дані у базі даних.
  if (snapshot.exists()) {
    const teachersArray = [];
    let lastKey = null; // Змінна для збереження останнього ключа

    snapshot.forEach((childSnapshot) => {
      const teacherId = childSnapshot.key; // Отримуємо унікальний ключ (teacherId)
      const teacherData = childSnapshot.val(); // Отримуємо дані про вчителя

      teachersArray.push({ ...teacherData, id: teacherId }); // Додаємо teacherId до об'єкта
      lastKey = teacherId; // Оновлюємо lastKey
    });

    return { teachersArray, lastKey }; // Повертаємо масив викладачів та останній ключ
  }

  return { teachersArray: [], lastKey: null }; // Повертаємо порожній масив, якщо дані не знайдено
}

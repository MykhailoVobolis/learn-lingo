import { get, limitToFirst, orderByKey, push, query, ref, set, startAfter, update } from "firebase/database";
import { auth, database } from "./firebase.js";

// ----------------- Функция для перевірки унікальності email нового користувача -------------------
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

// ---------------- Функція для збереження даних користувача -------------------
export async function saveUserData(userId, userData) {
  const userRef = ref(database, `users/${userId}`);
  await set(userRef, userData);
}

// ----------------- Функція для збереження бази даних teachers !!! В ПРОДАКШЕНІ ВИДАЛИТИ !!! ------------------
export async function writeTeachersDatabase(teachers) {
  const teachersRef = ref(database, "teachers");

  teachers.forEach((teacher) => {
    const newTeacherRef = push(teachersRef); // Генерує унікальний ключ для кожного вчителя
    set(newTeacherRef, teacher); // Записує дані вчителя за згенерованим ключем
  });
}

// ----------------- Функція для отримання викладачів ------------------
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

// ---------------- Функція для отримання викладачів з пагінацією ------------------
export async function fetchTeachers(pageSize, startKey = null) {
  const teachersRef = ref(database, "teachers");
  let teachersQuery;

  // Створюємо запит з пагінацією до даючі +1 об'єкт у запиті для подальшої перевірки чи є у БД ще об'єкти
  if (startKey) {
    teachersQuery = query(teachersRef, orderByKey(), startAfter(startKey), limitToFirst(pageSize + 1));
  } else {
    teachersQuery = query(teachersRef, limitToFirst(pageSize + 1));
  }

  const snapshot = await get(teachersQuery);

  // Перевіряємо, чи існують дані у базі даних.
  if (snapshot.exists()) {
    const teachersArray = [];
    let lastKey = null; // Змінна для збереження останнього ключа

    // Перевиряємо чи існують ще об'екти у базі для завантаження
    const teachersNumber = Object.keys(snapshot.val()).length;
    const loadMore = teachersNumber > pageSize ? true : false;

    // Змінна-акумулятор для рендеру тільки pageSize кількості об'єктів з БД
    let i = 0;
    snapshot.forEach((childSnapshot) => {
      i++;
      const teacherId = childSnapshot.key; // Отримуємо унікальний ключ (teacherId)
      const teacherData = childSnapshot.val(); // Отримуємо дані про вчителя

      if (i <= pageSize) {
        teachersArray.push({ ...teacherData, id: teacherId }); // Додаємо teacherId до об'єкта
        lastKey = teacherId; // Оновлюємо lastKey
      }
    });

    return { teachersArray, lastKey, loadMore };
  }
  return { teachersArray: [], lastKey: null, loadMore: false };
}

// --------------- Функція для додавання вчителя до списку улюблених: -----------------
export async function toggleFavorite(teacher) {
  const { id } = teacher;
  const userId = auth.currentUser.uid;

  // Посилання на favorites для поточного користувача
  const favoriteRef = ref(database, `users/${userId}/favorites/${id}`);

  // Спочатку перевіряємо, чи є цей вчитель в favorites
  const snapshot = await get(favoriteRef);

  const updates = {};

  if (snapshot.exists()) {
    // Якщо вчитель вже є в списку, змінюємо на false (видаляємо)
    updates[`users/${userId}/favorites/${id}`] = null; // Можна використовувати null для видалення
  } else {
    // Якщо вчителя немає в списку, додаємо його з значенням true
    updates[`users/${userId}/favorites/${id}`] = teacher;
  }
  // Оновлюємо базу даних
  await update(ref(database), updates);

  // Отримуємо оновлений список favorites
  const favoritesRef = ref(database, `users/${userId}/favorites`);
  const favoritesSnapshot = await get(favoritesRef);

  // Якщо favorites не порожній, повертаємо масив об'єктів
  if (favoritesSnapshot.exists()) {
    const favoritesData = favoritesSnapshot.val();

    // Перетворюємо об'єкти в масив ключив (id)
    const favoritesIdArray = Object.keys(favoritesData);
    const favoritesDataArray = Object.values(favoritesData);

    return { favoritesIdArray, favoritesDataArray };
  } else {
    // Якщо список порожній
    return { favoritesIdArray: [], favoritesDataArray: [] };
  }
}

// Функція для отримання даных колекції favorites
export async function fetchFavoritesId() {
  const userId = auth.currentUser.uid;
  const favoritesRef = ref(database, `users/${userId}/favorites`);
  const favoritesSnapshot = await get(favoritesRef);

  // Якщо favorites не порожній, повертаємо масив об'єктів
  if (favoritesSnapshot.exists()) {
    const favoritesData = favoritesSnapshot.val();

    // Перетворюємо об'єкти в масив ключив (id)
    const favoritesArray = Object.keys(favoritesData);

    return favoritesArray;
  } else {
    // Якщо список порожній
    return [];
  }
}

// --------------- Функція для отримання викладачів з колекції Favorites з пагінацією ----------------
export async function fetchFavorites(pageSize, startKey = null) {
  const userId = auth.currentUser.uid;
  const favoritesRef = ref(database, `users/${userId}/favorites`);
  let teachersQuery;

  // Створюємо запит з пагінацією до даючі +1 об'єкт у запиті для подальшої перевірки чи є у БД ще об'єкти
  if (startKey) {
    teachersQuery = query(favoritesRef, orderByKey(), startAfter(startKey), limitToFirst(pageSize + 1));
  } else {
    teachersQuery = query(favoritesRef, limitToFirst(pageSize + 1));
  }

  const snapshot = await get(teachersQuery);

  // Перевіряємо, чи існують дані у базі даних.
  if (snapshot.exists()) {
    const teachersArray = [];
    let lastKey = null; // Змінна для збереження останнього ключа

    // Перевиряємо чи існують ще об'екти у базі для завантаження
    const teachersNumber = Object.keys(snapshot.val()).length;
    const loadMore = teachersNumber > pageSize ? true : false;

    // Змінна-акумулятор для рендеру тільки pageSize кількості об'єктів з БД
    let i = 0;
    snapshot.forEach((childSnapshot) => {
      i++;
      const teacherId = childSnapshot.key; // Отримуємо унікальний ключ (teacherId)
      const teacherData = childSnapshot.val(); // Отримуємо дані про вчителя

      if (i <= pageSize) {
        teachersArray.push({ ...teacherData, id: teacherId }); // Додаємо teacherId до об'єкта
        lastKey = teacherId; // Оновлюємо lastKey
      }
    });

    return { teachersArray, lastKey, loadMore };
  }
  return { teachersArray: [], lastKey: null, loadMore: false };
}

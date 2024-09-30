import { get, ref, set } from "firebase/database";
import { database } from "./firebase.js";

// Функция для перевірки унікальності email нового користувача
export async function isEmailUnique(email) {
  const usersRef = ref(database, "users");
  const snapshot = await get(usersRef);

  if (snapshot.exists()) {
    const users = snapshot.val();
    for (let userId in users) {
      if (users[userId].email === email) {
        return false; // Такий Email вже існує
      }
    }
  }
  return true; // Email уникальний
}

// Функция для сохранения данных пользователя
export async function saveUserData(userId, userData) {
  const userRef = ref(database, `users/${userId}`);
  await set(userRef, userData);
}

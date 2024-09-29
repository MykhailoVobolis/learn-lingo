// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { get, ref, set } from "firebase/database";
// import { auth, database } from "./firebase.js";

// // Функция для перевірки уникальності email нового користувача
// async function isEmailUnique(email) {
//   const usersRef = ref(database, "users");
//   const snapshot = await get(usersRef);

//   if (snapshot.exists()) {
//     const users = snapshot.val();
//     // Перевіряємо, чи існує вже такий email у базі даних Realtime Database (by firebase)
//     for (let userId in users) {
//       if (users[userId].email === email) {
//         return false; // Такий Email вже існує
//       }
//     }
//   }
//   return true; // Email уникальний
// }

// // Реєстрація користувача
// export async function registerUser(userData) {
//   const { name, email, password } = userData;

//   // Перевірка унікальності email
//   const emailIsUnique = await isEmailUnique(email);
//   if (!emailIsUnique) {
//     console.error("Цей email вже використовується."); // Змінити у продакшен на tost !!!
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Оновлення displayName користувача
//     await updateProfile(user, {
//       displayName: name,
//     });

//     // Збереження даних користувача в базі даних
//     const userRef = ref(database, `users/${user.uid}`);

//     await set(userRef, {
//       name: name,
//       email: email,
//     });
//   } catch (error) {
//     console.log(error); // Змінити у продакшен на tost !!!
//   }
// }

// // Log in користувача
// export async function loginUser(userData) {
//   const { email, password } = userData;
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     console.log(user.displayName); // Прибрати у продакшені !!!
//   } catch (error) {
//     console.error("Помилка реєстрації:", error); // Змінити у продакшен на tost !!!
//   }
// }

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

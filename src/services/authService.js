import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { isEmailUnique, saveUserData } from "./firebaseService.js";
import { auth } from "./firebase.js";

// Реєстрація користувача
export async function registerUser(userData) {
  const { name, email, password } = userData;

  // Перевірка унікальності email
  const emailIsUnique = await isEmailUnique(email);
  if (!emailIsUnique) {
    console.error("Цей email вже використовується."); // Змінити у продакшен на tost !!!
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Оновлення displayName користувача
    await updateProfile(user, {
      displayName: name,
    });

    // Збереження даних користувача в базі даних
    await saveUserData(user.uid, {
      name: name,
      email: email,
    });
  } catch (error) {
    console.log(error); // Змінити у продакшен на tost !!!
  }
}

// Log in користувача
export async function loginUser(userData) {
  const { email, password } = userData;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user.displayName); // Прибрати у продакшені !!!
  } catch (error) {
    console.error("Помилка реєстрації:", error); // Змінити у продакшен на tost !!!
  }
}

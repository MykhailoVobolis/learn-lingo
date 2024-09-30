import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { isEmailUnique, saveUserData } from "../../services/firebaseService.js";

// Реєстрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  const { name, email, password } = newUser;

  // Перевірка унікальності email
  const emailIsUnique = await isEmailUnique(email);
  if (!emailIsUnique) {
    console.error("Цей email вже використовується."); // Змінити у продакшен на tost !!!
    return thunkAPI.rejectWithValue("Email вже використовується.");
  }

  try {
    // Реєстрація користувача
    const response = await createUserWithEmailAndPassword(auth, email, password);
    // Оновлення профілю користувача (додавання displayName)
    await updateProfile(response.user, {
      displayName: name,
    });

    // Створюємо серіалізований об'єкт нового користувача для збереження в стані
    const userData = {
      user: {
        uid: response.user.uid,
        email: response.user.email,
        name: response.user.displayName,
      },
    };

    // Збереження даних нового користувача в базі даних
    await saveUserData(userData.user.uid, {
      name: userData.user.name,
      email: userData.user.email,
    });

    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Login користувача
export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  const { email, password } = userInfo;

  // Перевірка наявності email користувача в базі даних
  const emailIsUnique = await isEmailUnique(email);
  if (emailIsUnique) {
    console.error("Цей користувач не зареєстрований."); // Змінити у продакшен на tost !!!
    return thunkAPI.rejectWithValue("Email користувача не знайдено.");
  }

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    // Створюємо серіалізований об'єкт користувача для збереження в стані
    const userData = {
      user: {
        uid: response.user.uid,
        email: response.user.email,
        name: response.user.displayName,
      },
    };

    return userData;
  } catch (error) {
    console.error("Помилка реєстрації:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

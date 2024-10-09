import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { isEmailUnique, saveUserData } from "../../services/firebaseService.js";

// Реєстрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  const { name, email, password } = newUser;

  // Перевірка унікальності email
  const emailIsUnique = await isEmailUnique(email);
  if (!emailIsUnique) {
    return thunkAPI.rejectWithValue(
      "This email address is already registered. If you already have an account, please log in to your account."
    );
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
    return thunkAPI.rejectWithValue(
      "No user with this email address was found. Please check your details or register."
    );
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
    if (error.code === "auth/invalid-credential") {
      return thunkAPI.rejectWithValue("Invalid login or password. Please check your details and try again.");
    } else if (error.code === "auth/too-many-requests") {
      return thunkAPI.rejectWithValue(
        "Access to this account has been temporarily disabled due to many failed login attempts. You can try again later."
      );
    } else {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

// Logout користувача
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

# LearnLingo

[Live Site](https://top-learn-lingo.vercel.app/)

## Overview

LearnLingo is an educational platform designed to help users find and book language tutors from around the world. With a diverse range of experienced tutors, subjects, and nationalities, Learn Lingo makes language learning accessible and personalized.

## Main sections

**Home page:**

![Home Page](./src/assets/images/home-page.png)

**Teachers' page:**

![Teachers Page](./src/assets/images/teachers-page.png)

**User registration and authorization:**

![Sign Up](./src/assets/images/sign-up.png)
![Sign In](./src/assets/images/sign-in.png)

**Favorite teachers page. Available to authorized users:**

![Teacher Info](./src/assets/images/favorite-teachers-page.png)

**Full information about the teacher and reviews:**

![Teacher Info](./src/assets/images/teacher-info.png)

**A convenient form of registration for a trial lesson:**

![Trial Lesson](./src/assets/images/trial-lesson.png)

## Features

- **Search for Tutors:** Users can browse through a wide range of language tutors.
- **Tutor Reviews:** Access thousands of reviews from other students to help in decision-making.
- **Responsive Design:** The application is optimized for mobile, tablet, and desktop devices.
- **Favorites:** Users can add their preferred tutors to a favorites list.
- **Booking System:** Book a session with a tutor directly from the app.

## Technologies Used

- **Frontend:**

  - React
  - Redux Toolkit for state management
  - Firebase Realtime Database for data storage
  - Axios for API requests
  - Vite for fast development and build
  - Material UI for styling
  - React Router for navigation

- **Backend:**
  - Firebase Authentication for user authentication
  - Firebase Realtime Database for storing tutor and booking data

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MykhailoVobolis/learn-lingo.git
   ```

2. Navigate to the project folder:

   ```bash
   cd learn-lingo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following Firebase credentials:

   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_DATABASE_URL=your-database-url
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

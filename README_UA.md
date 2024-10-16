# LearnLingo

[Жива сторінка](https://top-learn-lingo.vercel.app/) — ознайомтеся з працюючою версією проєкту.

## Огляд

LearnLingo — це освітня платформа, яка допомагає користувачам знаходити та бронювати уроки з викладачами мов з усього світу. Завдяки різноманіттю досвідчених викладачів, предметів та національностей, Learn Lingo робить вивчення мов доступним та індивідуалізованим.

## Основні розділи

**Домашня сторінка:**

![Home Page](./src/assets/images/home-page.png)

**Cторінка вікладачів:**

![Teachers Page](./src/assets/images/teachers-page.png)

**Реєстрація та авторизація користувачів:**

![Sign Up](./src/assets/images/sign-up.png)

![Sign In](./src/assets/images/sign-in.png)

**Сторінка обраних викладачів. Доступна авторизованим користувачам:**

![Teacher Info](./src/assets/images/favorite-teachers-page.png)

**Повна інформація про викладача та відгуки:**

![Teacher Info](./src/assets/images/teacher-info.png)

**Зручна форма запису на пробне заняття:**

![Trial Lesson](./src/assets/images/trial-lesson.png)

## Особливості

- **Пошук викладачів:** Користувачі можуть переглядати великий вибір викладачів мов.
- **Відгуки про викладачів:** Доступ до тисяч відгуків від інших студентів для прийняття рішення.
- **Адаптивний дизайн:** Додаток оптимізовано для мобільних пристроїв, планшетів і настільних комп'ютерів. Верстка від 320рх до 1440рх.
- **Обране:** Користувачі можуть додавати улюблених викладачів у список обраного.
- **Система бронювання:** Бронюйте уроки з викладачем безпосередньо через додаток.

## Використані технології

- **Фронтенд:**

  - React
  - Redux Toolkit для управління станом
  - React Router для навігації
  - Vite для швидкої розробки та збірки
  - Material UI для стилізації

- **Бекенд:**
  - Firebase Authentication для автентифікації користувачів
  - Firebase Realtime Database для зберігання даних про викладачів та бронювання

## Початок роботи

Щоб запустити проект локально, виконайте наступні кроки:

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/MykhailoVobolis/learn-lingo.git
   ```

2. Перейдіть до папки проекту:

   ```bash
   cd learn-lingo
   ```

3. Встановіть залежності:

   ```bash
   npm install
   ```

4. Створіть файл `.env` у кореневій директорії з такими даними Firebase:

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

5. Запустіть сервер розробки:

   ```bash
   npm run dev
   ```

6. Відкрийте [http://localhost:5173](http://localhost:5173), щоб переглянути в браузері.

## Матеріали

[Жива сторінка](https://top-learn-lingo.vercel.app/) — ознайомтеся з працюючою версією проєкту.

[Технічне завдання](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit) — деталі проєкту, які було використано для розробки.

[Макет Figma](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0) — дизайн інтерфейсу, який використовувався для створення проекту.

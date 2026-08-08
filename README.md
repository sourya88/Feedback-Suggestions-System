# Feedback & Suggestions System

A simple web-based application that allows users to submit feedback and suggestions through an easy-to-use form. Submitted feedback is stored in **Firebase Realtime Database** and displayed dynamically on the webpage.

## Features

* User feedback and suggestion form
* Name and email validation
* Feedback validation
* Firebase Realtime Database integration
* Stores submitted feedback in real time
* Displays submitted feedback dynamically
* Success and error messages
* Simple and responsive user interface

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript** – Form validation and application logic
* **Firebase Realtime Database** – Data storage and retrieval
* **Firebase Hosting** – Deployment (if deployed)

## Project Structure

```text
Feedback-Suggestions-System/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. The user enters their name, email, and feedback.
2. JavaScript validates the entered information.
3. The feedback is submitted to Firebase Realtime Database.
4. Firebase generates a unique ID for each submission.
5. Submitted feedback is retrieved and displayed on the webpage.
6. The feedback remains available after refreshing the page.

## Firebase Database Structure

```text
feedback
│
├── -uniqueDocumentID
│   ├── name
│   ├── email
│   ├── feedback
│   └── createdAt
│
└── -uniqueDocumentID
    ├── name
    ├── email
    ├── feedback
    └── createdAt
```

## Setup and Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

Open the project folder in **VS Code**.

### 3. Configure Firebase

Create a Firebase project and enable **Realtime Database**.

Add your Firebase configuration to `script.js`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

> Do not upload sensitive credentials or private Firebase service-account files to GitHub.

### 4. Run the application

Use **VS Code Live Server** or another local web server to open `index.html`.

## Future Improvements

* Add an admin dashboard
* Add edit and delete functionality
* Add feedback categories
* Add rating system
* Add authentication for administrators
* Improve UI and accessibility
* Deploy the application using Firebase Hosting

## Learning Outcomes

Through this project, I practiced:

* JavaScript DOM manipulation
* Client-side form validation
* Firebase integration
* Realtime Database operations
* Asynchronous JavaScript
* Handling user input and errors
* Basic frontend application development

## Author

**Palak Suryawanshi**

Computer Science & Engineering Student

---

⭐ If you find this project useful, feel free to star the repository.

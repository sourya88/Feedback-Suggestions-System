// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVQpFeazdSq1qXjRSugYcNjcGHy1rcKyE",
  authDomain: "feedback-web-app-62230.firebaseapp.com",
    databaseURL: "https://feedback-web-app-62230-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "feedback-web-app-62230",
  storageBucket: "feedback-web-app-62230.firebasestorage.app",
  messagingSenderId: "616673123114",
  appId: "1:616673123114:web:fdbe0ee3f2fcf602ad9c53",
  measurementId: "G-CRPCQXNTRZ"
};

// Initialize Firebase





const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

console.log("Firebase connected successfully!");






// ===============================
// Get HTML Elements
// ===============================

const feedbackForm = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const feedbackInput = document.getElementById("feedback");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const feedbackError = document.getElementById("feedbackError");

const message = document.getElementById("message");

const feedbackList = document.getElementById("feedbackList");


// ===============================
// Submit Feedback
// ===============================

feedbackForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    console.log("Submit button clicked!");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const feedback = feedbackInput.value.trim();

    // Clear errors
    nameError.textContent = "";
    emailError.textContent = "";
    feedbackError.textContent = "";
    message.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Feedback validation
    if (feedback === "") {
        feedbackError.textContent = "Please enter your feedback.";
        isValid = false;
    }

    console.log("Validation result:", isValid);

    if (!isValid) {
        return;
    }

    try {

        console.log("Saving feedback...");

       const feedbackRef = ref(database, "feedback");

const newFeedbackRef = push(feedbackRef, {
    name: name,
    email: email,
    feedback: feedback,
    createdAt: Date.now()
});

console.log("SUCCESS! Saved feedback:", newFeedbackRef.key);   


        message.textContent =
            "Feedback submitted successfully!";

        message.style.color = "green";

        feedbackForm.reset();

        await loadFeedback();

    } catch (error) {

        console.error("FIRESTORE WRITE ERROR:", error);

        message.textContent =
            "Failed to save feedback.";

        message.style.color = "red";
    }
});


// ===============================
// Load Feedback
// ===============================

async function loadFeedback() {

    const feedbackList =
        document.getElementById("feedbackList");

    feedbackList.innerHTML =
        "<p>Loading feedback...</p>";

    const feedbackRef = ref(database, "feedback");

    onValue(
        feedbackRef,
        (snapshot) => {

            feedbackList.innerHTML = "";

            if (!snapshot.exists()) {

                feedbackList.innerHTML =
                    "<p>No feedback submitted yet.</p>";

                return;
            }

            const data = snapshot.val();

            Object.values(data).forEach((feedback) => {

                const card =
                    document.createElement("div");

                card.classList.add("feedback-card");

                card.innerHTML = `
                    <h3>${feedback.name}</h3>

                    <p class="email">
                        ${feedback.email}
                    </p>

                    <p>
                        ${feedback.feedback}
                    </p>
                `;

                feedbackList.appendChild(card);
            });
        },
        (error) => {

            console.error(
                "REALTIME DATABASE READ ERROR:",
                error
            );

            feedbackList.innerHTML =
                "<p>Unable to load feedback.</p>";
        }
    );
}
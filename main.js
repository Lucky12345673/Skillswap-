document.querySelector('.find-match-btn').addEventListener('click', () => {
    const matches = ['Python Expert', 'Marketing Guru', 'SEO Specialist'];
    const result = matches[Math.floor(Math.random() * matches.length)];
    document.querySelector('.match-result').textContent = `Matched with: ${result}`;
});

document.querySelector('.add-skill-btn').addEventListener('click', () => {
    const newSkill = prompt('Enter new skill:');
    if (newSkill) {
        const skillList = document.querySelector('.skill-list');
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.textContent = newSkill;
        skillList.appendChild(skillCard);
    }
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwCjaX-eZ3xbTUjiTu-H89THhgg0T1O3k",
  authDomain: "skillswap-7fb4c.firebaseapp.com",
  projectId: "skillswap-7fb4c",
  storageBucket: "skillswap-7fb4c.firebasestorage.app",
  messagingSenderId: "290196171870",
  appId: "1:290196171870:web:ef1231f61e7c18226f58cf",
  measurementId: "G-LE656R18HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
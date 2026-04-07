import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Flownox Automation Leads - Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3ihdR7aSpweJBQd3EXAzA-0TzJQJPtR8",
  authDomain: "flownox-automation-2026-v1.firebaseapp.com",
  projectId: "flownox-automation-2026-v1",
  storageBucket: "flownox-automation-2026-v1.firebasestorage.app",
  messagingSenderId: "675307592328",
  appId: "1:675307592328:web:f5e5e211abafb9c97cdd3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

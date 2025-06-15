import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { messaging } from './firebase';
import { getToken } from "firebase/messaging";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    // Generate Token
    const token = await getToken(messaging, {
      vapidKey: "BH2rCQkMjwmOTRH9jkjykkmx5xUx25cDweLmL6cTlbJznP_nxtivrycwO4ltmlX3TyiHQjGGjJtZJqADYefGtPE",
    });
    console.log("Token Gen", token);
    // Send this token  to server (db)
  } else if (permission === "denied") {
    alert("You denied for the notification");
  }
}

requestPermission();

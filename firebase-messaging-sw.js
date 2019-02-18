importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
    apiKey: "--YOUR KEY--",
    authDomain: "--YOUR DOMAIN--",
    databaseURL: "--YOUR DB_URL--",
    projectId: "--YOUR PRJ_ID--",
    storageBucket: "--YOUR BUCKET--",
    messagingSenderId: "--YOUR MSG_SEND_ID--"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
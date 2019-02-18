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
  messaging.usePublicVapidKey('--YOUR PVK--');
  
  messaging.requestPermission().then(function() {
       console.log('Have Permission');
       getRegisterToken();
  })
  .catch(function(err) {
        console.log('Permission denied', err);
  });


  function getRegisterToken(){
    console.log(messaging);
    messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        document.getElementById("token").innerHTML = "TOKEN=?"+currentToken+"?=TOKEN";
        console.log("TOKEN="+currentToken);
        //sendTokenToServer(currentToken);
        //updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        //updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    }).catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
      //showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);
    });
  }

  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }

  messaging.onMessage(function(payload) {
    console.log("Reached");
    console.log(payload);

    new Notification(payload.notification.title, {
      body: payload.notification.body
    });
  });
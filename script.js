$(document).ready(function () {
  $("#next-quote").on("click", function (e) {
    e.preventDefault();

    var randomQuoteNumber = getRandomQuoteNumber();
    updateQuote(randomQuoteNumber);
  });

  var q = location.search.split("?q=")[1];

  if (q >= 0 && q < quotes.length) {
    updateQuote(q);
  } else {
    $("#next-quote").click();
  }
});



function updateQuote(quoteNumber) {
  var randomQuote = quotes[quoteNumber];

  $("#quote").html(randomQuote.fact);
  $("#author").html(randomQuote.author);
  $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
}

function getRandomQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
}

var quotes = [{ "author": "catLover", "fact": "The oldest known pet cat existed 9,500 years ago" },
{ "author": "catLover", "fact": "Cats spend 70% of their lives sleeping" },
{ "author": "catLover", "fact": "A cat was the Mayor of an Alaskan town for 20 years" },

{ "author": "catLover", "fact": "The record for the longest cat ever is 48.5 inches" },
{ "author": "catLover", "fact": "The richest cat in the world had £7 million" },
{ "author": "catLover", "fact": "Cats walk like camels and giraffes" },
{ "author": "catLover", "fact": "Isaac Newton invented the cat door" },
{ "author": "catLover", "fact": "In 1963 a cat went to space" },

{ "author": "catLover", "fact": "Ancient Egyptians would shave off their eyebrows when their cats died" },

{ "author": "catLover", "fact": "House cats share 95.6% of their genetic makeup with tigers" },
{ "author": "catLover", "fact": "A house cat can reach speeds of up to 30mph" },
{ "author": "catLover", "fact": "The oldest cat in the world was 38 years old!" },
{ "author": "catLover", "fact": "The record for the loudest purr is 67.8db(A)" },
{ "author": "catLover", "fact": " Didga the cat can perform 24 tricks in one minute" },

]



/*const VAPID_KEY = 'BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo'
const BACK_URL=''
const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}



if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js", { scope: "." })
    .then((register) => {
      console.log("service worker registered");
      if ("Notification" in window) {
        Notification.requestPermission((result) => {
          if (result === "granted") {
            console.log("Acess granted! :)");
            register.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(VAPID_KEY)
            }).then(subscription => {
              fetch(BACK_URL+'/subscribe', {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                  "content-type": "application/json"
                }
              });
            });

          
          } else if (result === "denied") {
            console.log("Access denied :(");
          } else {
            console.log("Request ignored :/");
          }
        });
      }
    })
    .catch((err) => console.log("service worker not registered", err));
}*/

// const check = () => {
//   if (!('serviceWorker' in navigator)) {
//     throw new Error('No Service Worker support!')
//   }
//   if (!('PushManager' in window)) {
//     throw new Error('No Push API Support!')
//   }
// }


// // I added a function that can be used to register a service worker.
// const registerServiceWorker = async () => {
//   const swRegistration = await navigator.serviceWorker.register('sw.js'); //notice the file name
//   return swRegistration;
// }
// const requestNotificationPermission = async () => {
//   const permission = await window.Notification.requestPermission();
//   // value of permission can be 'granted', 'default', 'denied'
//   // granted: user has accepted the request
//   // default: user has dismissed the notification permission popup by clicking on x
//   // denied: user has denied the request.
//   if(permission !== 'granted'){
//       throw new Error('Permission not granted for Notification');
//   }
// }
// const showLocalNotification = (title, body, swRegistration) => {
//   const options = {
//       body,
//       // here you can add more properties like icon, image, vibrate, etc.
//   };
//   swRegistration.showNotification(title, options);
// }
// const main = async () => {
//   check();
//   const swRegistration = await registerServiceWorker();
//   const permission =  await requestNotificationPermission();
//   showLocalNotification('Welcome', 'to cat fun club', swRegistration);
// }
// main();

/*window.addEventListener("offline", function(){
  showLocalNotification('Error!',"You are offline",);
});

window.addEventListener("online", function(){
  showLocalNotification('Success!','You are back online!',);
});*/



function showNotification() {
  const notification = new Notification("New message", {
    body: "Welcome to cat lovers club!",
    //icon: "../img/favicon-32x32-dunplab-manifest-33102.png"

  });
}

function showNotificationOffline() {
  const notification = new Notification("New message", {
    body: "You are offline!",
    //icon: "../img/favicon-32x32-dunplab-manifest-33102.png"
  });
}

function showNotificationOnline() {
  const notification = new Notification("New message", {
    body: "You are back online!",
    //icon: "../img/favicon-32x32-dunplab-manifest-33102.png"
  });
}

window.addEventListener("offline", showNotificationOffline);
window.addEventListener("online", showNotificationOnline);

// console.log(Notification.permission);
// if (Notification.permission === "granted") {
//   showNotification();
// }

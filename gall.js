var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('../sw.js',{scope:"/index.html"}).then( () => {
    console.log('Service Worker Registered')
   })
 })
} */

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
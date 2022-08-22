function notify(message) {


    let notificationContent = document.getElementById("notification");
    notificationContent.textContent = message;
    notificationContent.style.display = "block"

    setTimeout(() => {
        notificationContent.style.display = "none";   
    },2000);
    
}
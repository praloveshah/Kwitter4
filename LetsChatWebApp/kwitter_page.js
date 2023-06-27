function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("message").textContent;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like : 0,
    });
    document.getElementById("user_message").textContent = "";
  }
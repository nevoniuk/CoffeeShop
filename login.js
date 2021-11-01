function show() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function saveLogin() {
    let username = document.getElementById("username").value;
    if (!username) {
      alert("no username input")
      return false
    }
    let password = document.getElementById("password").value;
    alert(username + password)
  }
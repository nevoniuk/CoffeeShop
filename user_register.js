function saveLogin() {
    let username = document.getElementById("username").value;
    if (!username) {
      alert("no username input")
      return false
    }
    let password = document.getElementById("password").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let name = firstname + " " + lastname;
    let email = document.getElementById("email").value;
    alert(username + password)
}
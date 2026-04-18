function login() {
  let name = document.getElementById("username").value;

  if (name === "") {
    alert("Enter your name!");
    return;
  }

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("welcomePage").classList.remove("hidden");

  document.getElementById("welcomeText").innerText = "Welcome " + name + " 🎉";
}

function startApp() {
  document.getElementById("welcomePage").classList.add("hidden");
  document.getElementById("appPage").classList.remove("hidden");
}

function predict() {
  let digit = Math.floor(Math.random() * 10);
  document.getElementById("result").innerText = digit;
  document.getElementById("resultBox").classList.remove("hidden");
}

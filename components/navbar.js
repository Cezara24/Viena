function handleAuthDisplay() {
  if (localStorage.getItem("isLoggedIn") === null) {
    localStorage.setItem("isLoggedIn", "false");
  }
  if (localStorage.getItem("username") === null) {
    localStorage.setItem("username", "");
  }
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const authLink = document.getElementById("authLink");
  const userProfile = document.getElementById("userProfile");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!authLink || !userProfile || !logoutBtn) {
    console.log("Elemente navbar lipsă!");
    return;
  }

  if (isLoggedIn === "true") {
    authLink.style.setProperty("display", "none", "important");
    userProfile.style.setProperty("display", "flex", "important");
    logoutBtn.style.setProperty("display", "flex", "important");
  } else {
    authLink.style.setProperty("display", "block", "important");
    userProfile.style.setProperty("display", "none", "important");
    logoutBtn.style.setProperty("display", "none", "important");
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("username", "");
    userProfile.style.setProperty("display", "none", "important");
    logoutBtn.style.setProperty("display", "none", "important");
    authLink.style.setProperty("display", "block", "important");
    location.reload();
  });
}

window.handleAuthDisplay = handleAuthDisplay;
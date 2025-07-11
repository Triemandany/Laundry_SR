document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
  
      try {
        const response = await fetch("login.php", {
          method: "POST",
          body: formData
        });
  
        const result = await response.json();
  
        if (result.success) {
          window.location.href = "home.html";
        } else {
          alert(result.message);
        }
      } catch (error) {
        alert("Terjadi kesalahan. Silakan coba lagi.");
        console.error(error);
      }
    });
  });
  
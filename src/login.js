var submitBtn = document.getElementById("login-button");
var Email = document.getElementById("Email").value;
var Password = document.getElementById("Password").value;



var formdata = new FormData();
formdata.append("Email", Email);
formdata.append("Password", Password);



var requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow",
};


fetch("http://185.217.131.186:5055/api/admins/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
  fetch("http://185.217.131.186:5055/api/admins/login", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((result) => {
      // Login successful, store token and redirect to admin panel
      localStorage.setItem("admin_token", result.token);
      window.location = "./index.html";
    })
    .catch((error) => {
      window.location.reload();   
      console.log("Login failed:", error);
      alert("Invalid Email or Password, please try again.");
      window.location.reload();
    });
})




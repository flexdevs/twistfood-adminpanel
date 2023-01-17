const { createApp } = Vue;

createApp({
 data() {
    return {
        email: "",
        password: "",
      };
    },
    methods: {
      submitForm() {
        var formdata = new FormData();
        formdata.append("Email", this.email);
        formdata.append("Password", this.password);
  
        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
  
        fetch("http://185.217.131.186:5055/api/admins/login", requestOptions)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          })
          .then((result) => {
            localStorage.setItem("admin_token", result.token);
            window.location = "./index.html";
          })
          .catch((error) => {
            console.log("Login failed:", error);
            alert("Invalid Email or Password, please try again.");
          });
      },
    },
}).mount("#login");




const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      categories: []
    }
  },
  created() {
    fetch('http://185.217.131.186:5055/api/categories?page=1')
    .then(response => response.json())
    .then(data => {
      this.categories = data;
    })
    .catch(error => console.log(error))
  },
  
  mounted() {
    let modalBtn = document.getElementById("add_admin_btn");
    let modal = document.getElementById("modal");

    modalBtn.onclick = () => {
      modal.style.display = "flex";
    };

    let closeBtn = document.getElementById("close_btn");

    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },          
 }).mount('#app');

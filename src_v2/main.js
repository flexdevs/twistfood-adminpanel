const { createApp } = Vue;

createApp({
data() {
return {
categories: [],
order: [],
products : []
}
},
created() {
this.fetchCategories();
this.fetchOrders();
this.fetchProducts();
},



methods: {
fetchCategories() {
fetch('http://185.217.131.186:5055/api/categories?page=1')
.then(response => response.json())
.then(data => {
this.categories = data;
})
.catch(error => console.log(error))
},

fetchOrders() {
fetch('http://185.217.131.186:5055/api/orders/GetAll?page=1')
.then(response => response.json())
.then(data => {
  console.log(data)
  this.order = data;

})
.catch(error => console.log(error))
},

fetchProducts(){
fetch("http://185.217.131.186:5055/api/products?page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.products = data;
  })
  .catch(error => console.log(error))

},

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

}
}).mount('#app');
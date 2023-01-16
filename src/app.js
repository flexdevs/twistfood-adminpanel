function addItem() {
  // Code to add a new item to the menu
  let itemName = prompt("Enter the name of the item:");
  let itemPrice = prompt("Enter the price of the item:");
  data.menu.push({ name: itemName, price: itemPrice });
  refreshMenuTable();
}

function editItem(itemName) {
  // Code to edit an existing item on the menu
  let item = data.menu.find((i) => i.name === itemName);
  if (item) {
    let newItemName = prompt("Enter the new name of the item:", item.name);
    let newItemPrice = prompt("Enter the new price of the item:", item.price);
    item.name = newItemName;
    item.price = newItemPrice;
    refreshMenuTable();
  }
}

function deleteItem(itemName) {
  // Code to delete an existing item from the menu
  data.menu = data.menu.filter((i) => i.name !== itemName);
  refreshMenuTable();
}
function cancelOrder(orderNumber) {
  // Code to cancel an existing order
  data.orders = data.orders.filter((o) => o.number !== orderNumber);
  refreshOrdersTable();
}
function addCustomer() {
  // Code to add a new customer
  let customerName = prompt("Enter the name of the customer:");
  let customerEmail = prompt("Enter the email of the customer:");
  let customerPhone = prompt("Enter the phone of the customer:");
  data.customers.push({
    name: customerName,
    email: customerEmail,
    phone: customerPhone,
  });

  refreshCustomersTable();
}
function editCustomer(customerName) {
  // Code to edit an existing customer
  let customer = data.customers.find((c) => c.name === customerName);
  if (customer) {
    let newCustomerName = prompt(
      "Enter the new name of the customer:",
      customer.name
    );
    let newCustomerEmail = prompt(
      "Enter the new email of the customer:",
      customer.email
    );
    let newCustomerPhone = prompt(
      "Enter the new phone of the customer:",
      customer.phone
    );
    customer.name = newCustomerName;
    customer.email = newCustomerEmail;
    customer.phone = newCustomerPhone;
    refreshCustomersTable();
  }
}

function deleteCustomer(customerName) {
  // Code to delete an existing customer
  data.customers = data.customers.filter((c) => c.name !== customerName);
  refreshCustomersTable();
}

let modalBtn = document.getElementById("add_admin_btn");
let modal = document.getElementById("modal");

modalBtn.onclick = function () {
  modal.style.display = "flex";
};

let closeBtn = document.getElementById("close_btn");

closeBtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



let mRegBtn = document.getElementById("register_btn");
mRegBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  let mName = document.getElementById("mName").value;
  let mLastName = document.getElementById("mLastName").value;
  let mPhone = document.getElementById("phone").value;
  let mBdate = document.getElementById("birthdate").value;
  let mSalary = document.getElementById("salary").value;
  let mPassportNum = document.getElementById("passportNum").value;
  let mEmail = document.getElementById("mEmail").value;
  let mPassword = document.getElementById("mPassword").value;
  let mIsHead = document.getElementById("mIsHead").value;
  let mImage = document.getElementById("mUpload").files[0];
  var token= localStorage.getItem("admin_token");
  if(!token){
    console.error('token not found in local storage');
    return;
  }
  if(!mImage){
    console.error('mImage is not defined');
    return;
  }
  var formdata = new FormData();
  formdata.append("FirstName", mName);
  formdata.append("LastName", mLastName);
  formdata.append("PhoneNumber", mPhone);
  formdata.append("BirthDate", mBdate);
  formdata.append("Image", mImage);
  formdata.append("Salary", mSalary);
  formdata.append("PassportSeriaNumber", mPassportNum);
  formdata.append("Password", mPassword);
  formdata.append("IsHead", mIsHead);
  formdata.append("Email", mEmail);
  try {
    let response = await fetch("http://185.217.131.186:5055/api/admins/register", {
      method: 'POST', 
      headers: {
          'Authorization': `Bearer ${token}`,
      },
      body: formdata,
    });
    if(!response.ok){
      console.error('request failed with status:',response.status);
      return;
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem("admin_token"));

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://185.217.131.186:5055/api/categories?page=1", requestOptions)
  .then(response => response.json())
  .then(data => {
    let output = '<table>';
    output += '<tr><th>ID</th><th>Products</th><th>Action</th></tr>';
    data.forEach(item => {
 
      output += `<tr>`;
      output += `<td>${item.id}</td>`;
      output += `<td>${item.categoryName}</td>`;
      output += `<td><button class="edit-button">Edit</button> <button class="delete-button">Delete</button></td>`;
      
 
      output += `</tr>`;
    });
    document.getElementById('category').innerHTML = output;
  })
  .catch(error => console.log('error', error));
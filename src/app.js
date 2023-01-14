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

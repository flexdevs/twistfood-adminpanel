
let mRegBtn = document.getElementById("register_btn");
mRegBtn.addEventListener("click", async (e) => {
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
  var token = localStorage.getItem("admin_token");
  if (!token) {
    console.error("token not found in local storage");
    return;
  }
  if (!mImage) {
    console.error("mImage is not defined");
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
    let response = await fetch(
      "http://185.217.131.186:5055/api/admins/register",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      }
    );
    if (!response.ok) {
      console.error("request failed with status:", response.status);
      return;
    }
    let data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error(error);
  }
});

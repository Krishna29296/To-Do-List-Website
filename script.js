// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// function check(submit) {
//     if(form.email.value=="todo123@gmail.com" && form.password.value=="1234")
//     {
//         window.location.href = "./todo.html"; // Redirect to todo.html
//     }
//     else
//     {
//         alert("Enter valid user name and password");
//     }
// }

function login(event) {
    event.preventDefault(); // Prevent default form submission
  
    var username = document.getElementsByName("uname")[0].value;
    var password = document.getElementsByName("psw")[0].value;
  
    // Check if username and password are correct (for demo purposes)
    if (username === "Krishna" && password === "123") {
      window.location.href = "todo.html"; // Redirect to todo.html
    } else {
      alert("Invalid username or password");
    }
  }
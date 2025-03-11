let loginBtn = document.querySelector(".login-btn");
let wraper = document.querySelector(".wraper");

loginBtn.addEventListener("click", function(){
wraper.classList.add("active");
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
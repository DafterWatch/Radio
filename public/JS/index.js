document.getElementById('profile-image').src = "/assets/user.png";
$(function(){
    $('#profile-image').click( () =>{
        $('#image-selector').click();
    });
    $('#image-selector').change( (event) =>{
        let target = event.target || window.event.srcElement;
        let files = target.files;
        if (FileReader && files && files.length) {
            let reader = new FileReader();
            reader.onload = function () {
                document.getElementById('profile-image').src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }
    });
});
function register(){    
    location.href = "login/login.html";
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
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
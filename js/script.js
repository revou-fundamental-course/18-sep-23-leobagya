function validateForm() {
    const nama = document.forms["message-form"]["name"].value;
    const email = document.forms["message-form"]["email"].value;
    const minat = document.forms["message-form"]["interested"].value;
     
    if (nama==null || nama==""){
        document.getElementById("name-error").innerHTML = "nama tidak boleh kosong"; 
    } 
    if (email==null || email==""){
        document.getElementById("email-error").innerHTML = "email tidak boleh kosong";
    }
    if (minat==null || minat==""){
        document.getElementById("interested-error").innerHTML = "minat tidak boleh kosong";
    }
    console.log(nama, email, minat);
    return false;
}


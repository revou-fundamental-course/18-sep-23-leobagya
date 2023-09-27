function validateForm() {
    const nama = document.forms["message-form"]["name"].value;
    const email = document.forms["message-form"]["email"].value;
    const minat = document.forms["message-form"]["interested"].value;
     
    if (nama==null || nama=="" && email==null || email=="" && minat==null || minat==""){
        alert("Data tidak boleh ada yang kosong");
    } else if (nama==null || nama==""){
        document.getElementById("nama-error").innerHTML = "nama tidak boleh kosong"; 
    } else if (email==null || email==""){
        document.getElementById("email-error").innerHTML = "email tidak boleh kosong";
    } else if (minat==null || minat==""){
        document.getElementById("minat-error").innerHTML = "minat tidak boleh kosong";
    } else {
        document.getElementById("minat-error").innerHTML = "";
        alert("data berhasil dikirim");
    }
    console.log(nama, email, minat);
    return false;
}


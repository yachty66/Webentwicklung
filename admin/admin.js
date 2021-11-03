/*var objPassword = [{
    username: "a",
    password: "b"
}]*/

var attempt = 3;

function getCredentials(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "a" && password == "b"){
        alert ("Login successfully");
        document.getElementById("form-admin").style.display = "none";
        document.getElementById("list-staffs").style.display = "flex";
        document.getElementById("list-students").style.display = "flex";
    }
    else{
        attempt --;
        alert("Login Credentials incorrect.");
        if (attempt==0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}




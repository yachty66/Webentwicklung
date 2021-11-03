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

function onClickStudentsButton(){
    document.getElementById("list-students").style.display = "none";
    document.getElementById("list-staffs").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("main-for-lists").style.display = "flex";
    document.getElementById("buttons-student").style.display = "flex";
    document.getElementById("add-student").style.display = "flex";
    document.getElementById("update-student").style.display = "flex";
    document.getElementById("delete-student").style.display = "flex";
}

function onClickAddStudentsButton(){
    document.getElementById("add-student").style.display = "none";
    document.getElementById("update-student").style.display = "none";
    document.getElementById("delete-student").style.display = "none";
    document.getElementById("list-order").style.display = "none";
}

function onClickCheckForm(){
    var test = document.getElementById('Student_Id').value
    var li = "<li>" + test + "<li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("Student_Id").value = ""; // clear the value


    var First_Name = document.getElementById('First_Name').value
    var Last_Name = document.getElementById('Last_Name').value
    var DOB = document.getElementById('DOB').value
    var GenderFemale = document.getElementById('GenderFemale').value
    var GenderMale = document.getElementById('GenderMale').value
    var e = document.getElementById("Departments");
    var option = e.options[e.selectedIndex].text;
    var Email_Id = document.getElementById('Email_Id').value

    if(Student_Id == null || Student_Id == "", First_Name == null || First_Name == "", option == "------", Email_Id == null || Email_Id == ""){
        document.getElementById("error").style.display = "block";
    }else{
        var list = document.getElementById(list);
        var listItem = document.createElement("li");
        listItem.innerText = inputField.value;
        list.appendChild(listItem);
        //hier muss ich jetzt die einträge in die studenten liste eintragen und den alten view wieder herstellen

    }

    

    
}

function test(){
    document.getElementById("error").style.display = "block";
}






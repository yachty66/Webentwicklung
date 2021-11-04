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

    var Student_Id = document.getElementById('Student_Id').value
    var First_Name = document.getElementById('First_Name').value
    var Last_Name = document.getElementById('Last_Name').value
    var DOB = document.getElementById('DOB').value
    var GenderFemale = document.getElementById('GenderFemale').value
    var GenderMale = document.getElementById('GenderMale').value
    var e = document.getElementById("Departments");
    var option = e.options[e.selectedIndex].text;
    var Email_Id = document.getElementById('Email_Id').value

    if(Student_Id == null || Student_Id == "" || First_Name == null || First_Name == "" || option == "------" || Email_Id == null || Email_Id == ""){
        document.getElementById("error").style.display = "block";
    }else{
        document.getElementById("main-for-form").style.display = "none";
        document.getElementById("main-for-lists").style.display = "flex";
        document.getElementById("buttons-student").style.display = "flex";
        document.getElementById("list-order").style.display = "flex";

        var liStudent_Id = "<li>" + "Student_Id: " + Student_Id + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', liStudent_Id);
        document.getElementById("Student_Id").value = ""; // clear the value

        var liFirst_Name = "<li>" + "First_Name: " + First_Name + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', liFirst_Name);
        document.getElementById("First_Name").value = ""; // clear the value

        var liLast_Name = "<li>" + "Last_Name: " + Last_Name + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', liLast_Name);
        document.getElementById("Last_Name").value = ""; // clear the value

        var DOB = "<li>" + "DOB: " + DOB + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', DOB);
        document.getElementById("DOB").value = ""; // clear the value

        var liDepartments = "<li>" + "Department: " + option + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', liDepartments);
        document.getElementById("Departments").value = ""; // clear the value

        var liEmail_Id = "<li>" + "Email_Id: " + Email_Id + "</li>";
        document.getElementById("list").insertAdjacentHTML('beforeend', liEmail_Id);
        document.getElementById("Email_Id").value = ""; // clear the valu

        if (document.getElementById('GenderFemale').checked == false && document.getElementById('GenderMale').checked == false){
            var liGenderFemale = "<li>" + "Gender: " + "</li>";
            document.getElementById("list").insertAdjacentHTML('beforeend', liGenderFemale);
        }

        if (document.getElementById('GenderFemale').checked == true){
            var liGenderFemale = "<li>" + "Gender: " + "Female" + "</li>";
            document.getElementById("list").insertAdjacentHTML('beforeend', liGenderFemale);
            var line = "<hr>";
            document.getElementById("list").insertAdjacentHTML('beforeend', line);
            document.getElementById("Gender_Female").value = ""; // eventuell muss ich das noch clearen 
        }else if(document.getElementById('GenderMale').checked == true){
            var liGenderMale = "<li>" + "Gender: " + "Male" + "</li>";
            document.getElementById("list").insertAdjacentHTML('beforeend', liGenderMale);
            var line = "<hr>";
            document.getElementById("list").insertAdjacentHTML('beforeend', line);
            document.getElementById("Gender_Male").value = ""; // eventuell muss ich das noch clearen 
        }else{
            var line = "<hr>";
            document.getElementById("list").insertAdjacentHTML('beforeend', line);

        }
    }
}






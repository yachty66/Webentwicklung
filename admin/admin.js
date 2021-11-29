/*var objPassword = [{
    username: "a",
    password: "b"
}]*/

var attempt = 3;

function getCredentials(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "a" && password == "a"){
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

    document.getElementById("main-for-form").style.display = "flex";
    document.getElementById("main-for-lists").style.display = "none";

    
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

        document.getElementById("add-student").style.display = "flex";
        document.getElementById("update-student").style.display = "flex";
        document.getElementById("delete-student").style.display = "flex";

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


//code who hides current date and future date DOB
function hideDateDOB(){
    var today = new Date();
    var yesterday = new Date(today.getTime() - 24*60*60*1000);
    var dd = yesterday.getDate();
    var mm = yesterday.getMonth() + 1; //January is 0!
    var yyyy = yesterday.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    } 
        
    yesterday = yyyy + '-' + mm + '-' + dd;
    document.getElementById("DOB").setAttribute("max", yesterday);
}

//if choosed date - current date is < 17 or > 60 throw InvalidDOB
function checkAge(){
    document.getElementById("DOB").addEventListener("change", function(){
        var input = this.value;
        var birthDate = new Date(input);
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        if(age < 17 || age > 60){
            document.getElementById('DOB').value = "";
            alert("invalid DOB");
            throw "invalid DOB";
        }
    })
}

//hides date for joining date
function hideDateJoin(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("Joining_Date").setAttribute("max", today);
}

//staff
function onClickStaffsButton(){
    document.getElementById("list-students").style.display = "none";
    document.getElementById("list-staffs").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("main-for-list-staff").style.display = "flex";

    document.getElementById("buttons-staff").style.display = "flex";
    document.getElementById("add-staff").style.display = "flex";
    document.getElementById("update-staff").style.display = "flex";
    document.getElementById("delete-staff").style.display = "flex";
}

function onClickAddStaffsButton(){
    document.getElementById("add-staff").style.display = "none";
    document.getElementById("update-staff").style.display = "none";
    document.getElementById("delete-staff").style.display = "none";
    document.getElementById("list-order-staff").style.display = "none";
    document.getElementById("main-for-list-staff").style.display = "none";
    document.getElementById("main-for-form-staff").style.display = "flex";
}

function onClickCheckFormStaff(){
    var Staff_Id = document.getElementById('Staff_Id').value
    var First_Name = document.getElementById('First_Name_staff').value
    var Last_Name = document.getElementById('Last_Name_staff').value
    var DOB = document.getElementById('DOB_staff').value
    var GenderFemale = document.getElementById('GenderFemale_staff').value
    var GenderMale = document.getElementById('GenderMale_staff').value
    var Email_Id = document.getElementById('Email_Id_staff').value

    if(Staff_Id == null || Staff_Id == "" || First_Name == null || First_Name == "" || Email_Id == null || Email_Id == ""){
        document.getElementById("error-staff").style.display = "block";
    }else{
        document.getElementById("main-for-form-staff").style.display = "none";
        document.getElementById("main-for-list-staff").style.display = "flex";
        document.getElementById("buttons-staff").style.display = "flex";
        document.getElementById("list-order-staff").style.display = "flex";

        document.getElementById("add-staff").style.display = "flex";
        document.getElementById("update-staff").style.display = "flex";
        document.getElementById("delete-staff").style.display = "flex";

        var liStaff_Id = "<li>" + "Staff_Id: " + Staff_Id + "</li>";
        document.getElementById("staff-list").insertAdjacentHTML('beforeend', liStaff_Id);
        document.getElementById("Staff_Id").value = ""; // clear the value

        var liFirst_Name_staff = "<li>" + "First_Name: " + First_Name + "</li>";
        document.getElementById("staff-list").insertAdjacentHTML('beforeend', liFirst_Name_staff);
        document.getElementById("First_Name_staff").value = ""; // clear the value

        var liLast_Name_staff = "<li>" + "Last_Name: " + Last_Name + "</li>";
        document.getElementById("staff-list").insertAdjacentHTML('beforeend', liLast_Name_staff);
        document.getElementById("Last_Name_staff").value = ""; // clear the value

        var liDOB_staff = "<li>" + "DOB: " + DOB + "</li>";
        document.getElementById("staff-list").insertAdjacentHTML('beforeend', liDOB_staff);
        document.getElementById("DOB_staff").value = ""; // clear the value

        var liEmail_Id_staff = "<li>" + "Email_Id: " + Email_Id + "</li>";
        document.getElementById("staff-list").insertAdjacentHTML('beforeend', liEmail_Id_staff);
        document.getElementById("Email_Id_staff").value = ""; // clear the valu

        if (document.getElementById('GenderFemale_staff').checked == false && document.getElementById('GenderMale_staff').checked == false){
            var liGenderFemale_staff = "<li>" + "Gender: " + "</li>";
            document.getElementById("staff-list").insertAdjacentHTML('beforeend', liGenderFemale_staff);
        }

        if (document.getElementById('GenderFemale_staff').checked == true){
            var liGenderFemale_staff = "<li>" + "Gender: " + "Female" + "</li>";
            document.getElementById("staff-list").insertAdjacentHTML('beforeend', liGenderFemale_staff);
            var line = "<hr>";
            document.getElementById("list").insertAdjacentHTML('beforeend', line);
            document.getElementById("Gender_Female_staff").value = ""; // eventuell muss ich das noch clea
        }else if(document.getElementById('GenderMale_staff').checked == true){
            var liGenderMale_staff = "<li>" + "Gender: " + "Male" + "</li>";
            document.getElementById("staff-list").insertAdjacentHTML('beforeend', liGenderMale_staff);
            var line = "<hr>";
            document.getElementById("staff-list").insertAdjacentHTML('beforeend', line);
            document.getElementById("Gender_Male_staff").value = ""; // eventuell muss ich das noch clearen 
        }else{
            var line = "<hr>";
            document.getElementById("staff-list").insertAdjacentHTML('beforeend', line);
        }
    }
}




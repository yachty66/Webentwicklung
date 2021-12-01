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

    "use strict";
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    console.log(row);
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
        td6.className += " dep"; 
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");

    td1.innerHTML = document.getElementById("Student_Id").value;
    td2.innerHTML = document.getElementById("First_Name").value;
    td3.innerHTML = document.getElementById("Last_Name").value;
    td4.innerHTML = document.getElementById("DOB").value;
    if (document.getElementById('GenderFemale').checked == false && document.getElementById('GenderMale').checked == false){
        td5.innerHTML = "";
    }
    if (document.getElementById('GenderFemale').checked == true){
        td5.innerHTML = "F"; 
    }else if(document.getElementById('GenderMale').checked == true){
        td5.innerHTML = "M"; 
    }
    td6.innerHTML = document.getElementById("Departments").value;
    td7.innerHTML = document.getElementById("Email_Id").value;    
    td8.innerHTML = document.getElementById("Joining_Date").value;

    var Student_Id = document.getElementById('Student_Id').value;
    var First_Name = document.getElementById('First_Name').value;
    var Last_Name = document.getElementById('Last_Name').value;
    var DOB = document.getElementById('DOB').value;
    var GenderFemale = document.getElementById('GenderFemale').value;
    var GenderMale = document.getElementById('GenderMale').value;
    var e = document.getElementById("Departments");
    var option = e.options[e.selectedIndex].text;
    var Email_Id = document.getElementById('Email_Id').value;

    if(Student_Id == null || Student_Id == "" || First_Name == null || First_Name == "" || option == "------" || Email_Id == null || Email_Id == ""){
        document.getElementById("error").style.display = "block";
    }
    else{
        document.getElementById("main-for-form").style.display = "none";
        document.getElementById("main-for-lists").style.display = "flex";
        document.getElementById("buttons-student").style.display = "flex";
        document.getElementById("list-order").style.display = "flex";
        document.getElementById("error").style.display = "none";

        document.getElementById("add-student").style.display = "flex";
        document.getElementById("update-student").style.display = "flex";
        document.getElementById("delete-student").style.display = "flex";

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);
        row.appendChild(td8);   

        table.children[0].appendChild(row);  

        document.getElementById("Student_Id").value = "";
        document.getElementById("First_Name").value = "";
        document.getElementById("Last_Name").value = ""; // clear the value
        document.getElementById("DOB").value = "";
        document.getElementById("Departments").value = "empty";
        document.getElementById("Email_Id").value = ""; 

        document.getElementById("GenderFemale").checked = false; 
        document.getElementById("GenderMale").checked = false;
        document.getElementById("Joining_Date").value = "";
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

function changeDisplayTableDepartments(){
    //select value
    var sel = document.getElementById('departmentsSelector');
    var departmentSelected = sel.value;

    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    console.log(tr[1].getElementsByTagName("td")[5]);

    for(i=0; i< tr.length; i++){
        td = tr[i+1].getElementsByTagName("td")[5]; // hier gibt es noch fehlermeldung
        if(departmentSelected != "empty" && td.textContent != departmentSelected){
            tr[i+1].style.display = "none";
        }else{
            tr[i+1].style.display = "";
        }
    }
}

function changeDisplayTableSemester(){
    //select value
    var sel = document.getElementById("semesterSelector");
    var semesterSelected = sel.value;

    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    console.log(tr[1].getElementsByTagName("td")[7]);

    for(i=0; i< tr.length; i++){
        td = tr[i+1].getElementsByTagName("td")[7].textContent;
        var splitDate = td.split("-")[1];
        if(semesterSelected == "Winter"){
            if(splitDate == "10" || splitDate == "11" || splitDate == "12" || splitDate == "01" || splitDate == "02" || splitDate == "03"){
                tr[i+1].style.display = "";
            }
            else{
                tr[i+1].style.display = "none";
            }  
        }
        else if (semesterSelected == "Summer"){
            if(splitDate == "04" || splitDate == "05" || splitDate == "06" || splitDate == "07" || splitDate == "08" || splitDate == "09"){
                tr[i+1].style.display = "";
            }else{
                tr[i+1].style.display = "none";
            }  
        }
        else{
            tr[i+1].style.display = "";
        }
    }
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
    document.getElementById("main-for-form-staff").style.display = "flex";
    document.getElementById("main-for-list-staff").style.display = "none";
    
}

function onClickCheckFormStaff(){
    console.log("hallo");
    "use strict";
    var table = document.getElementById("table-staff");
    var row = document.createElement("tr");
    console.log(row);
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
        td6.className += " depStaff"; 
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");

    td1.innerHTML = document.getElementById("Staff_Id").value;
    td2.innerHTML = document.getElementById("First_Name_staff").value;
    td3.innerHTML = document.getElementById("Last_Name_staff").value;
    td4.innerHTML = document.getElementById("DOB_staff").value;
    if (document.getElementById('GenderFemale_staff').checked == false && document.getElementById('GenderMale_staff').checked == false){
        td5.innerHTML = "";
    }
    if (document.getElementById('GenderFemale_staff').checked == true){
        td5.innerHTML = "F"; 
    }else if(document.getElementById('GenderMale_staff').checked == true){
        td5.innerHTML = "M"; 
    }
    td6.innerHTML = document.getElementById("DepartmentsStaff").value;
    td7.innerHTML = document.getElementById("Email_Id_staff").value;    
    td8.innerHTML = document.getElementById("Joining_Date_staff").value;


    var Staff_Id = document.getElementById('Staff_Id').value;
    var First_Name = document.getElementById('First_Name_staff').value;
    var Last_Name = document.getElementById('Last_Name_staff').value;
    var DOB = document.getElementById('DOB_staff').value;
    var GenderFemale = document.getElementById('GenderFemale_staff').value;
    var GenderMale = document.getElementById('GenderMale_staff').value;
    var Email_Id = document.getElementById('Email_Id_staff').value;

    if(Staff_Id == null || Staff_Id == "" || First_Name == null || First_Name == "" || Email_Id == null || Email_Id == ""){
        document.getElementById("error-staff").style.display = "block";
    }else{
        document.getElementById("main-for-form-staff").style.display = "none";
        document.getElementById("main-for-list-staff").style.display = "flex";
        document.getElementById("buttons-staff").style.display = "flex";
        document.getElementById("list-order-staff").style.display = "flex";
        document.getElementById("error-staff").style.display = "none";

        document.getElementById("add-staff").style.display = "flex";
        document.getElementById("update-staff").style.display = "flex";
        document.getElementById("delete-staff").style.display = "flex";

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);
        row.appendChild(td8);   

        table.children[0].appendChild(row);  

        document.getElementById("Staff_Id").value = "";
        document.getElementById("First_Name_staff").value = "";
        document.getElementById("Last_Name_staff").value = ""; // clear the value
        document.getElementById("DOB_staff").value = "";
        document.getElementById("DepartmentsStaff").value = "empty";
        document.getElementById("Email_Id_staff").value = ""; 

        document.getElementById("GenderFemale_staff").checked = false; 
        document.getElementById("GenderMale_staff").checked = false;
        document.getElementById("Joining_Date_staff").value = "";
    }
}

//code who hides current date and future date DOB
function hideDateDOBStaff(){
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
    document.getElementById("DOB_staff").setAttribute("max", yesterday);
}

//if choosed date - current date is < 17 or > 60 throw InvalidDOB
function checkAgeStaff(){
    document.getElementById("DOB_staff").addEventListener("change", function(){
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
            document.getElementById('DOB_staff').value = "";
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
    document.getElementById("Joining_Date_staff").setAttribute("max", today);
}



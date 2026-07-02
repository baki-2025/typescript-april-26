let userId: (string|number|boolean);

userId = "102";
userId = 102;
userId = true;

function displayUserInfo(userId:string|number){
    console.log(userId)
}

displayUserInfo("102");
displayUserInfo(102);

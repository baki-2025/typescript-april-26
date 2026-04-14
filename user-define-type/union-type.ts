let userId: string | number| boolean;

userId = "191";
userId = 102 ;
userId = true;


function displayUserInfo(userId: string | number){
    console.log(userId)
}

displayUserInfo("191")
displayUserInfo(102)
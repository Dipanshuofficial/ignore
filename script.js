function cheeckForm(){
    var u=document.getElementById("uname").value;
    var p=document.getElementById("pwd").value;
    for (i in u){
        if(u[i]==' '){
            alert("No Space in username");
            return;
        }
    }
    if(p==""){
        alert("Password Cannot Be Empty");
        return;
    }
    else alert("Looks Good!");
}
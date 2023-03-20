for(var i = 0; i<a.length; i++){
    a[i].onclick = ()=>{
        document.querySelector('#open').click();
    }
}
function setTheme(){
    var body = document.body;
    body.classList.toggle("dark-mode");
    var Theme;
    if(body.classList.contains("dark-mode")){
        console.log("Dark theme enabled");
    }else{
        console.log("Light mode enabled");
    }
}
var fa_cog = document.querySelector(".fa-cog");
fa_cog.onclick = () =>{
    
}

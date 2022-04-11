window.addEventListener("load" , ()=>{

    // chek session
    let lastUser = localStorage.getItem("isFirstTime")

    if(lastUser){
        window.location.href = "/login.html"
    }

})

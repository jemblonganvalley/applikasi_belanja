
const handleLogin = (event)=>{

    event.preventDefault()

    // tangkap value dari element input
    let email = event.target.email.value
        password = event.target.password.value

    if(!email || !password){
        alert("Silakan Lengkapi data")
        return
    }

    let users = JSON.parse(localStorage.getItem("_users"))

    // find user
    let findUser = users.filter((item)=>{
        return item.email === email // array
    })

    if(findUser.length == 0){
        alert("Email tidak ditemukan")
        return
    }

    // check password
    let checkPassword = users.filter((item)=>{
        return item.password === password
    })

    if(checkPassword.length == 0){
        alert("Password salah")
        return
    }

    // setstorage bernama isLogin
    localStorage.setItem("isLogin",  JSON.stringify({
        email : findUser[0].email,
        username : findUser[0].username
    })) 

    alert("Login berhasil")

    window.location.href = "/dashboard"

}
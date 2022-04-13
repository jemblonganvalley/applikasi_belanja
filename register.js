

const handleSubmit = (event)=>{

    // stop form untuk mereload page
    event.preventDefault() 

    // kita tangkap value dari element input form register
    let username = event.target.username.value 
        password = event.target.password.value
        email = event.target.email.value
        password2 = event.target["password-2"].value

    console.info({
        username : username,
        email : email,
        password : password,
        password2 : password2
    })

    // form validation
    // semua field harus di isi
    if( !username || !password || !email || !password2 ){
        alert("Silakan lengkapi data")
        return // code stop tidak lanjut kebawah
    }

    // check apakah password dan password2 sama
    if(password !== password2){
        alert("Password harus sama")
        return 
    }

    // get users from localstorage
    let users = JSON.parse(localStorage.getItem("_users")) 

    // check apakah users sudah ada
    let findUser = users.filter((item)=>{
        return item.email == email 
    }) 

    if( findUser.length > 0 ){
        alert("Email Sudah di gunakan")
        return
    }

    // menambahkan data ke dalam array users
    users.push({
        email : email,
        password : password,
        username : username
    })

    // store kembali data ke localstorage users
    localStorage.setItem("_users", JSON.stringify(users))

    alert("Registrasi Berhasil")

    // lempar page ke login
    window.location.href = "/login.html"

}
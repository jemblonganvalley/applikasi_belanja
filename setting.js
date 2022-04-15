

// logout
const handleLogOut = ()=>{
    let yakin = confirm("Yakin Keluar ?")

    if(yakin){
        localStorage.setItem("isLogin", false)
        window.location.href = "/"
        return
    }
    return false
}

// hapus semua list belanja
const deleteListBelanja = ()=>{

    let yakin = confirm("Yakin akan hapus semua list belanja ?")
    if(!yakin){
        return false
    }

    let user = JSON.parse(localStorage.getItem("isLogin"))
    let _listbelanja = JSON.parse(localStorage.getItem("_listbelanja"))

    let filterByUser = _listbelanja.filter((item)=>{
        return item.user.username !== user.username
    })

    // update _listbelanja tanpa data kita
    localStorage.setItem("_listbelanja", JSON.stringify(filterByUser))

    alert("Semua data list belanja berhasil di hapus")

}

// hapus list belanja finish
const deleteListBelanjaFinish = ()=>{
    let yakin = confirm("Yakin akan hapus semua list belanja yang sudah selesai ?")
    if(!yakin){
        return false
    }

    let user = JSON.parse(localStorage.getItem("isLogin"))
    let _listbelanja_finish = JSON.parse(localStorage.getItem("_listbelanja_finish"))

    let filterByUser = _listbelanja_finish.filter((item)=>{
        return item.user.username !== user.username
    })

    localStorage.setItem("_listbelanja_finish", JSON.stringify(filterByUser))

    alert("Berhasil Delete semua list belanja yang sudah selesai.")
}
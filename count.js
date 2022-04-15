
const count = ()=>{
    //tangkap user
    let user = JSON.parse(localStorage.getItem("isLogin"))

    // tangkap _listbelanja 
    let _listbelanja = JSON.parse(localStorage.getItem("_listbelanja"))

    // tangkap _listbelanja_finish
    let _listbelanja_finish = JSON.parse(localStorage.getItem("_listbelanja_finish"))

    // filter 
    let filterListBelanja = _listbelanja.filter((item)=>{
        return item.user.email == user.email
    })

    let filterListBelanjaFinish = _listbelanja_finish.filter((item)=>{
        return item.user.email == user.email
    })

    console.info({
        listBelanja : filterListBelanja.length,
        listBelanjaFinish : filterListBelanjaFinish.length
    })

    let total_listbelanja = document.getElementById("total_listbelanja")
    let total_listbelanja_finish = document.getElementById("total_listbelanja_finish")

    total_listbelanja.innerHTML = filterListBelanja.length
    total_listbelanja_finish.innerHTML = filterListBelanjaFinish.length

}

count()
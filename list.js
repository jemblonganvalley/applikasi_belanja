

// litener saat page ter load
window.addEventListener("load", ()=>{

    // dapatkan data user
    let user = JSON.parse(localStorage.getItem("isLogin"))

    // dapatkan list belanja
    let listbelanja = JSON.parse(localStorage.getItem("_listbelanja"))

    // filter list belanja sesuai email user
    let filterListByUser = listbelanja.filter((item)=>{

        return item.user.email == user.email

    })  

    // tangkap komponen wrapper card
    let list_card_wrapper = document.getElementById("list_card_wrapper")

    filterListByUser.map((item)=>{
        list_card_wrapper.innerHTML += `
        <div class="w-full p-4 flex flex-col gap-2 bg-white shadow-md rounded-lg">
            <h1 class="text-orange-500 font-bold capitalize"> ${item.judul} </h1>
            <ul class="w-full flex flex-col">
                ${item.list.map((e)=>{
                    return `
                    <li class="h-12 flex items-center px-2 border-b-[1px] border-b-orange-500">
                        ${e.name}
                        <input type="checkbox" class="ml-auto h-5 w-5"  />
                    </li>
                    `
                }).join("")  }
            </ul>

            <button class="h-12 w-[120px] ml-auto bg-orange-500 text-white flex justify-center items-center rounded-md mt-4" onclick="handleFinish(event)" data-list_id="${item.id}">
                selesai
            </button>
        </div>
        `
    })
})

const handleFinish = (event)=>{

    // ambil data list 
    let _listbelanja = JSON.parse(localStorage.getItem("_listbelanja"))

    // ambil data _listbelanja_finish
    let _listbelanja_finish = JSON.parse(localStorage.getItem("_listbelanja_finish"))

    // id dari list yang akan di selesaikan
    let list_id = event.target.dataset.list_id

    // filter _listbelanja sesuai id list_id
    let filterList = _listbelanja.filter((item)=>{
        return item.id == list_id // array
    })

    // push _listbelanja_finish dari hasil filter
    _listbelanja_finish.push(filterList[0])

    // store data hasil filter ke _listbelanja_finish
    localStorage.setItem("_listbelanja_finish", JSON.stringify(_listbelanja_finish))

    // delete data dari list belanja
    // cari index dari data yang akan di delete
    let idx = _listbelanja.indexOf(filterList[0])

    _listbelanja.splice(idx, 1)

    localStorage.setItem("_listbelanja", JSON.stringify(_listbelanja))

    window.location.reload()

}
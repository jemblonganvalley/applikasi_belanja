

// penampung data list
let data_list = []

// fungsi untuk menambahkan data list
const addList = ()=>{

    // tangkap element list_added
    let list_added = document.getElementById("list_added")

    let inputList = document.getElementById("list")

    // reset list added sehingga data tidak dobel
    list_added.innerHTML = ""

    // check apakah inputlist sudah di isi
    if(!inputList.value){
        alert("silakan isi list")
        // maping array data_list ke html
        data_list.map((item)=>{
            list_added.innerHTML += `
                <div class="w-full bg-white flex items-center px-4 h-12 text-gray-500 shadow-md italic" id="${item.id}" >
                    ${item.name}
                </div>
            `
        })
        return
    }

    data_list.push({
        id : Date.now() , 
        name : inputList.value,
        checked : false
    })

    // maping array data_list ke html
    data_list.map((item)=>{
        list_added.innerHTML += `
            <div class="w-full bg-white flex items-center px-4 h-12 text-gray-500 shadow-md italic" id="${item.id}" >
                ${item.name}
            </div>
        `
    })

    // reset field list
    inputList.value = ""

}

// confirm submit list belanja
const handleSubmitList = ( event )=>{

    // hentikan form untuk reload page
    event.preventDefault()
    
    // ambil data user dari localstorage
    const user = JSON.parse(localStorage.getItem("isLogin"))

    // ambil judul
    const judul = event.target.judul.value

    console.info({
        id : Date.now(),
        user : user,
        judul : judul,
        list : data_list
    })

    // ambil data _listbelanja
    let _listbelanja = JSON.parse(localStorage.getItem("_listbelanja")) // array

    // buat data baru
    let newList = {
        id : Date.now(),
        user : user,
        judul : judul,
        list : data_list
    }

    // push atau masukan data ke array _listbelanja
    _listbelanja.push(newList)

    // store ke local storage
    localStorage.setItem("_listbelanja", JSON.stringify(_listbelanja))

    // lempar page ke page listbelanja
    window.location.href = "/dashboard/list.html"

}
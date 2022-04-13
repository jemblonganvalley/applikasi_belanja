// tangkap element list_added
let list_added = document.getElementById("list_added")

// penampung data list
let data_list = []

// fungsi untuk menambahkan data list
const addList = ()=>{

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
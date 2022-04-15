
window.addEventListener("load", ()=>{

    // check apakah data _listbelanja sudah ada
    const _listbelanja = localStorage.getItem("_listbelanja")

    // jika belum ada maka kita buatkan
    if(!_listbelanja){
        localStorage.setItem("_listbelanja", "[]")
    }

    // check apakah _listbelanja_finish sudah ada 
    const _listbelanja_finish = localStorage.getItem("_listbelanja_finish")

    // jika tidak kita buatkan
    if(!_listbelanja_finish){
        localStorage.setItem("_listbelanja_finish", "[]")
    }

    // kita akan tambahkan element navbar ke body
    document.body.innerHTML += `
    <div class="w-full p-6 fixed bottom-0 left-0 z-[100] ">

        <nav class="w-full h-16 bg-orange-500 text-white flex items-center rounded-full max-w-[500px] mx-auto">
            <a href="/dashboard/" class="flex-1 h-full flex justify-center items-center">
                <span class="material-icons-outlined">
                    home
                </span>
            </a>

            <a href="/dashboard/add_note.html" class="flex-1 h-full flex justify-center items-center">
                <span class="material-icons-outlined">
                    note_add
                </span>
            </a>

            <a href="/dashboard/list.html" class="flex-1 h-full flex justify-center items-center">
                <span class="material-icons-outlined">
                    checklist
                </span>
            </a>

            <a href="/dashboard/setting.html" class="flex-1 h-full flex justify-center items-center">
                <span class="material-icons-outlined">
                    settings
                </span>
            </a>
        </nav>

    </div>
    `
})
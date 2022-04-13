// pengecekan unique user
window.addEventListener("load", () => {

  let users = localStorage.getItem("_users")

  if(!users){
    localStorage.setItem("_users", "[]")
  }

});

const handleSlide = (to) => {
  window.location.href = to
};

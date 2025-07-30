const table_data = document.querySelectorAll('td')
const reveals = document.querySelectorAll(".reveal");
const notification = document.querySelector(".notification")

function show_notification(message){
    notification.innerHTML = message

    notification.classList.add('show')

    setTimeout(hide_notification, 2000)
}
function hide_notification(){
    notification.classList.remove('show')
}

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 200; 

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        } else{
            el.classList.remove('active')
        }
    });
});

table_data.forEach((td) => {
    td.addEventListener("click", () => {
        td_text = td.innerHTML

        navigator.clipboard.writeText(td_text)

        show_notification("Pesan Berhasil Di Salin")
    })
})

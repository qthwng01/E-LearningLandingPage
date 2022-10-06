function menuMobile() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}

/* Parallax Scroll*/
let items = document.querySelectorAll('.item');
document.addEventListener('scroll', (event) => {
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 350) {
            item.classList.add('active');
        }
    })
})
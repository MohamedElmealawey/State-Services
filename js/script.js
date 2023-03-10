AOS.init();

const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.tabs .content li');

allIndicator.forEach(item=> {
    item.addEventListener('click', function () {
        const content = document.querySelector(this.dataset.target);

        allIndicator.forEach(i=> {
            i.classList.remove('active');
        })

        allContent.forEach(i=> {
            i.classList.remove('active');
        })

        content.classList.add('active');
        this.classList.add('active');
    })
})

let up=document.querySelector(".scroll-up");

up.addEventListener("click",()=>{
    window.scroll(0,0);
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>350){
        up.classList.add("active");
    }else{
        up.classList.remove("active");
    }
})


window.addEventListener("load",()=>{
    setTimeout(() => {
        document.querySelector(".loader").classList.add("loader-hidden");
    }, 1200);
})


const accordion=document.querySelectorAll(".navbar a");
accordion.forEach(acco=>{
    acco.onclick=()=>{
        accordion.forEach(dion=>dion.classList.remove("active"));
        acco.classList.toggle("active");
    }
})
let serv=document.querySelector(".coulmn")
const accordio=document.querySelectorAll(".service .row .head a");
accordio.forEach(acco=>{
    acco.onclick=()=>{
        accordio.forEach(dion=>dion.classList.remove("active"));
        acco.classList.toggle("active");
    }
})

lightGallery(document.querySelector(".projects .box-container"))

var swiper=new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper=new Swiper(".reviews-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

var swiper=new Swiper(".blogs-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

var swiper=new Swiper(".logo-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        640:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        1000:{
            slidesPerView:5,
        }
    }
});


let bar=document.querySelector("#menu-btn");
let lis=document.querySelector(".navbar");

bar.onclick=()=>{
    lis.classList.toggle("active");
    bar.classList.toggle("fa-times");
}

let user=document.querySelector("#login-btn");
let log=document.querySelector(".login-form");
let loginnow=document.querySelector("#login-now");

user.onclick=()=>{
    log.classList.toggle("active");
    user.classList.toggle("fa-times");
}

let usernew=document.querySelector("#new-user");
let reg=document.querySelector(".register-form");

usernew.onclick=()=>{
    log.classList.remove("active");
    reg.classList.toggle("active");
}

loginnow.onclick=()=>{
    reg.classList.remove("active");
    log.classList.toggle("active");
}


let infbtn=document.querySelector("#info-btn");
let clos=document.querySelector("#close-btn");
let info=document.querySelector(".contact-info");

infbtn.onclick=()=>{
    info.classList.toggle("active");
}
clos.onclick=()=>{
    info.classList.remove("active");
}

window.onscroll=()=>{
    bar.classList.remove("fa-times");
    lis.classList.remove("active");

    let maxHeight=window.document.body.scrollHeight - window.innerHeight;
    let percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';
}


let searchForm=document.querySelector("#search-form");
let searchIcon=document.querySelector("#search-btn");
let closeSearch=document.querySelector("#close");

searchIcon.onclick=()=>{
    searchForm.classList.toggle("active");
}
closeSearch.onclick=()=>{
    searchForm.classList.remove("active");
}




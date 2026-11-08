var header = document.querySelector(".header-slider");
var slidess = document.querySelectorAll(".slide");
var nextBtn = document.querySelector("#nextBtn");
var prevBtn = document.querySelector("#prevBtn");

var countHero = 0;
var lengthHero = slidess.length;

var card = setInterval(function() {
    terminal("nextBtn");
}, 2500);

nextBtn.onclick = function () {
    terminal("nextBtn");
};

prevBtn.onclick = function() {
    terminal("prevBtn");
};

function terminal(direction) {
    var slideCurs = direction || "nextBtn";

    if (typeof event !== 'undefined' && event && event.target) {
        if (event.target.id === "nextBtn") slideCurs = "nextBtn";
        if (event.target.id === "prevBtn") slideCurs = "prevBtn";
    }

    if (slideCurs === "nextBtn") {

        if (countHero < lengthHero - 1) {
            countHero++;
        } else {
            countHero = 0; 
        }
    }
    else if (slideCurs === "prevBtn") {
        if (countHero > 0) {
            countHero--;
        } else {
            countHero = lengthHero - 1; 
        }
    }

    for (var p = 0; p < slidess.length; p++) {
        slidess[p].style.transform = "translateX(-" + (countHero * 100) + "%)";
        slidess[p].style.transition = "transform 0.5s ease-in-out";
    }
}


//---scroll---
function funn() {
    // ---- div3 ----
    var div3 = document.querySelector(".div3");
    if (div3) {
        var poqr = div3.querySelector(".poqr");
        var poqr1 = div3.querySelector(".poqr1");
        var poqr2 = div3.querySelector(".poqr2");
        var poqr3 = div3.querySelector(".poqr3");

        if (window.scrollY > div3.offsetTop - 150) {
            if (poqr) poqr.classList.add("active");
            if (poqr1) poqr1.classList.add("active2");
            if (poqr2) poqr2.classList.add("active3");
            if (poqr3) poqr3.classList.add("active4");
        } else {
            if (poqr) poqr.classList.remove("active");
            if (poqr1) poqr1.classList.remove("active2");
            if (poqr2) poqr2.classList.remove("active3");
            if (poqr3) poqr3.classList.remove("active4");
        }
    }

    // ---- div4 ----
    var div4 = document.querySelector(".div4");
    if (div4) {
        var poqr4 = div4.querySelector(".poqr4");
        var poqr5 = div4.querySelector(".poqr5");

        if (window.scrollY > div4.offsetTop - 150) {
            if (poqr4) poqr4.classList.add("active5");
            if (poqr5) poqr5.classList.add("active6");
        } else {
            if (poqr4) poqr4.classList.remove("active5");
            if (poqr5) poqr5.classList.remove("active6");
        }
    }

    // ---- schedule-section ----
    var scheduleSection = document.querySelector(".schedule-section");
    if (scheduleSection) {
        var poqr7 = scheduleSection.querySelector(".poqr7");
        var scheduleTabs = scheduleSection.querySelector(".schedule-tabs");
        var items = scheduleSection.querySelectorAll(".schedule-item");
        var btn = scheduleSection.querySelector(".btn");

        if (window.scrollY > scheduleSection.offsetTop - 150) { 
            if (poqr7) poqr7.classList.add("active7");
            if (scheduleTabs) scheduleTabs.classList.add("active8");
            if (btn) btn.classList.add("active10");
            for (var i = 0; i < items.length; i++) {
                items[i].classList.add("active9");
            }
        } else {
            if (poqr7) poqr7.classList.remove("active7");
            if (scheduleTabs) scheduleTabs.classList.remove("active8");
            if (btn) btn.classList.remove("active10");
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove("active9");
            }
        }
    }

    // ---- div5 ----
    var div5 = document.querySelector(".div5");
    if (div5) {
        var poqr8 = div5.querySelector(".poqr8");
        var poqr9 = div5.querySelector(".poqr9");
        var innerDivs = div5.querySelectorAll(".div");

        if (window.scrollY > div5.offsetTop - 150) { 
            if (poqr8) poqr8.classList.add("active11");
            if (poqr9) poqr9.classList.add("active12");
            for (var i = 0; i < innerDivs.length; i++) {
                innerDivs[i].classList.add("active13");
            }
        } else {
            if (poqr8) poqr8.classList.remove("active11");
            if (poqr9) poqr9.classList.remove("active12");
            for (var i = 0; i < innerDivs.length; i++) {
                innerDivs[i].classList.remove("active13");
            }
        }
    }

    // ---- div6----
    var div6 = document.querySelector(".div6");
    if (div6) {
        var poqr10 = div6.querySelector(".poqr10");
        var poqr11 = div6.querySelector(".poqr11");
        var slides = div6.querySelector(".slides");
        var testimonial = div6.querySelectorAll(".testimonial-card"); 

        if (window.scrollY > div6.offsetTop - 150) { 
            if (poqr10) poqr10.classList.add("active14");
            if (poqr11) poqr11.classList.add("active15");
            if (slides) slides.classList.add("active16"); 
            
            for (var i = 0; i < testimonial.length; i++) {
                testimonial[i].classList.add("active17");
            }          
        } else {
            if (poqr10) poqr10.classList.remove("active14");
            if (poqr11) poqr11.classList.remove("active15");
            if (slides) slides.classList.remove("active16");
            
            for (var i = 0; i < testimonial.length; i++) {
                testimonial[i].classList.remove("active17");
            }   
        }
    }

    // ---- div7 ----
    var div7 = document.querySelector(".div7");
    if (div7) {
        var poqr13 = div7.querySelector(".poqr13");
        var poqr14 = div7.querySelector(".poqr14");
        var divv = div7.querySelectorAll(".divv1");

        if (window.scrollY > div7.offsetTop - 150) { 
            if (poqr13) poqr13.classList.add("active18");
            if (poqr14) poqr14.classList.add("active19");
            
            if (divv && divv.length > 0) {
                for (var i = 0; i < divv.length; i++) {
                    divv[i].classList.add("active20");
                }
            }          
        } else {
            if (poqr13) poqr13.classList.remove("active18");
            if (poqr14) poqr14.classList.remove("active19");
            
            if (divv && divv.length > 0) {
                for (var i = 0; i < divv.length; i++) {
                    divv[i].classList.remove("active20");
                }
            }
        }
    }
    //---div8---
   // ---- div8 ----
    var div8 = document.querySelector(".div8");
    if (div8) {
        var poqr15 = div8.querySelector(".poqr15");
        var poqr16 = div8.querySelector(".poqr16");
        var poqr17 = div8.querySelector(".poqr17");
        var form = div8.querySelector(".contact-form"); 
        var formRow = div8.querySelectorAll(".form-row"); 

        if (window.scrollY > div8.offsetTop - 150) { 
            if (poqr15) poqr15.classList.add("active21");
            if (poqr16) poqr16.classList.add("active25"); 
            if (poqr17) poqr17.classList.add("active22");
            if (form) form.classList.add("active23"); 
            
            if (formRow && formRow.length > 0) {
                for (var i = 0; i < formRow.length; i++) {
                    formRow[i].classList.add("active24");
                }
            }
        } else {
            if (poqr15) poqr15.classList.remove("active21");
            if (poqr16) poqr16.classList.remove("active25");
            if (poqr17) poqr17.classList.remove("active22");
            if (form) form.classList.remove("active23");
            
            if (formRow && formRow.length > 0) {
                for (var i = 0; i < formRow.length; i++) {
                    formRow[i].classList.remove("active24");
                }
            }
        }
    }
    //---footer---
   var footer = document.querySelector(".footer");
    if (footer) {
        var footBlocks = footer.querySelectorAll(".foot");

        if (window.scrollY > footer.offsetTop - 500) { 
            if (footBlocks && footBlocks.length > 0) {
                for (var i = 0; i < footBlocks.length; i++) {
                    footBlocks[i].classList.add("active25");
                }
            }          
        } else {
            if (footBlocks && footBlocks.length > 0) {
                for (var i = 0; i < footBlocks.length; i++) {
                    footBlocks[i].classList.remove("active25");
                }
            }
        }
    }
}

funn();


//month 
var month = document.getElementById("months");
var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");

var sec = 1000;
var min = 1000 * 60;
var hr = 1000 * 60 * 60;
var dayMs = 1000 * 60 * 60 * 24;
var mon = dayMs * 30;

setInterval(fun, 1000);

function fun() {
    var now = new Date();
    var eventDate = new Date("2027-01-30T00:00:00").getTime();
    var currentTime = now.getTime();
    var diff = eventDate - currentTime;

    if (diff < 0) {
        return;
    }

    var monthsCount = Math.floor(diff / mon);
    var daysCount = Math.floor((diff % mon) / dayMs);
    var hoursCount = Math.floor((diff % dayMs) / hr);
    var minutesCount = Math.floor((diff % hr) / min);
    var secondsCount = Math.floor((diff % min) / sec);

    month.innerText = monthsCount;
    day.innerText = daysCount;
    hour.innerText = hoursCount;
    minute.innerText = minutesCount;
    second.innerText = secondsCount;
}
fun()



//ommouseenter/onmouseleave  icons
var poqr = document.querySelectorAll(".poqr6");

for (var i = 0; i < poqr.length; i++) {
    poqr[i].onmouseenter = di;
    poqr[i].onmouseleave = dii;
}

function di() {
    var icon = this.querySelector(".social-icons");
    icon.style.top = "0px";
    icon.style.width = "50px"
    icon.style.height = "150px"
}

function dii() {
    var icons = this.querySelector(".social-icons");
    icons.style.top = "-150px";
}

//schedule plan onclick
var buttons = document.querySelectorAll(".tab-btn");
var items = document.querySelectorAll(".schedule-item");

for (var k = 0; k < items.length; k++) {
    if (k < 4) {
        items[k].style.display = "flex";
    } else {
        items[k].style.display = "none";
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("data-index", i);

    buttons[i].onclick = function () {

        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");

        var index = this.getAttribute("data-index");

        for (var k = 0; k < items.length; k++) {
            if (index == 0) {
                if (k >= 0 && k <= 3) {
                    items[k].style.display = "flex";
                } else {
                    items[k].style.display = "none";
                }
            }
            else if (index == 1) {
                if (k >= 4 && k <= 6) {
                    items[k].style.display = "flex";
                } else {
                    items[k].style.display = "none";
                }
            }
            else if (index == 2) {
                if (k >= 7 && k <= 8) {
                    items[k].style.display = "flex";
                } else {
                    items[k].style.display = "none";
                }
            }
        }
    };
}


//OFFICIAL SPONSOR onclick/setinterval
var slides = document.querySelector(".slides");
var cards = document.querySelectorAll(".testimonial-card");
var btnL = document.querySelector("#btnL");
var btnR = document.querySelector("#btnR");

var count = 0;
var length = cards.length;
var half = 2;

var cardd = setInterval(function () {
    slide("btnR");
}, 2500);

btnR.onclick = function () {
    clearInterval(cardd);
    slide("btnR");
    cardd = setInterval(function () {
        slide("btnR");
    }, 2500);
};

btnL.onclick = function () {
    clearInterval(cardd);
    slide("btnL");
    cardd = setInterval(function () {
        slide("btnR");
    }, 2500);
};

function slide(direction) {
    var slideCurs = direction || "btnR";

    if (typeof event !== 'undefined' && event && event.target) {
        if (event.target.id === "btnR") slideCurs = "btnR";
        if (event.target.id === "btnL") slideCurs = "btnL";
    }

    if (slideCurs === "btnR") {
        if (count < length - half) {
            count += half;
        } else {
            count = 0;
        }
    }
    else if (slideCurs === "buttL" || slideCurs === "btnL") {
        if (count > 0) {
            count -= half;
        } else {
            count = length - half;
        }
    }

    var stepIndex = count / half;
    slides.style.transform = "translateX(-" + (stepIndex * 100) + "%)";
}

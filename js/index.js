function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
HTMLElement.prototype.serialize = function () {
    var res = "";
    var elements = this.querySelectorAll("input, select, textarea");
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        if (e.name) {
            res = res + `${e.name}=${e.value}&`;
        }
    }
    console.log(res);
    return res;
};

ready(() => {
    var typed = new Typed("#typed", {
        strings: ["#WeAreChallengers"],
        smartBackspace: true, // Default value
        startDelay: 10,
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 500,
        loop: true,
    });
    //animation
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
    
    
    
    function getAds()
    {
      const data =[{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"11","filename":"11647704358.jpg","id":57,"title":"1"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"","filename":"1647711942.","id":67,"title":""},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":".form {         padding: 0;         width: 90%;         padding-left: 15%;     }","filename":"kmlklkdfs1647711628.jpg","id":66,"title":"kmlklkdfs"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"","filename":"1647711611.","id":65,"title":""},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"kajsldkjalskjdlaksjdlkja","filename":"hj1647710915.jpg","id":64,"title":"hj"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"","filename":"1647710848.","id":63,"title":""},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"55","filename":"551647708280.jpg","id":62,"title":"55"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"","filename":"1647708106.jpg","id":61,"title":""},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"44","filename":"41647704572.jpg","id":60,"title":"4"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"33","filename":"31647704557.jpg","id":59,"title":"3"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"22","filename":"21647704538.jpg","id":58,"title":"2"},{"date":"Sat, 19 Mar 2022 00:00:00 GMT","description":"","filename":"1647712058.","id":68,"title":""}]
      return data;
    }
    function renderAds(){
        const adb = document.querySelector(".swiper-wrapper");
        const ads=getAds();
        const innerHTML=ads.reduce((prev,cur)=>{
            return prev+`
            <div class="swiper-slide adbox" >
            <img src="http://localhost:5000/ad/${cur.filename}" alt="">
            <h1>${cur.title}</h1>
            <h3>${cur.description}</h3>
            </div>
            `
        },"");
        adb.innerHTML=innerHTML;
    }
    var swiper = new Swiper(".mySwiperad", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        autoplay: {
            delay: 2500,
          },
    });

    
    renderAds();
    
    


    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    document.querySelectorAll(".navbar li").forEach((e) =>
        e.addEventListener("click", function () {
            [...document.getElementsByClassName("navbar-collapse")].forEach(
                (f) => {
                    console.log(f);
                    f.classList.toggle("show");
                }
            );
            console.log("clicked1");
        })
    );
    [...document.getElementsByClassName("cross")].forEach((e) =>
        e.addEventListener("click", function () {
            [...document.getElementsByClassName("close")].forEach((f) =>
                f.classList.toggle("show")
            );

            console.log("clicked2");
        })
    );

    document.getElementById("submit-form").addEventListener(
        "submit",
        function (e) {
            const google_script_url =
                "https://script.google.com/macros/s/AKfycbw7zHeNRhilb3V3bQ9A9hbNeCVv9HCA026AIUPSLh1HcgI4LPblDRL8HIPIbfI_qlrC/exec";
            const request = new XMLHttpRequest();
            request.open("POST", google_script_url, true);
            request.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            const data = document.getElementById("submit-form").serialize();
            try {
                request.send(data);
                alert("Sent successfully!");
                document.getElementById("submit-form").reset();
                e.preventDefault();
            } catch (err) {
                alert("Sending failed.");
                window.location.reload();
            }
        },
        false
    );
});

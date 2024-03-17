
ScrollReveal({ reset: true, distance: "50px", duration: 500 });


//////////////////////////////
//
//  index.htmlのanimation
//
/////////////////////////////

// logo headerのスライドanimation
ScrollReveal().reveal('.logo, .header_menu', { delay: 400, origin: "left" });

//バーガーメニューの開閉animation
const burger = document.querySelector(".burger");
const header = document.querySelector(".header_menu");
const headerlinks=document.querySelectorAll(".header_menu li");

burger.addEventListener("click", () => {
  header.classList.toggle("header_active");
  burger.classList.toggle("toggle");

  headerlinks.forEach((link,index) => {
    if(link.style.animation){link.style.animation = "";
    }  else{
    link.style.animation = `headerlinksFade 0.5s ease forwards ${
      index / 7 + 0.5}s`;
    }
  });
});

// image内テキストのcontact以外をスライドするanimation
ScrollReveal().reveal('.image_inner .pop', { delay: 400, origin: "top" });


// section1の中の画像を使用性を下げない程度の時差付けでアニメーション表示
ScrollReveal().reveal('.section1 .container .row .col .image3', { delay: 200, origin: "left" });
ScrollReveal().reveal('.section1 .container .row .col .image2', { delay: 300, origin: "left" });
ScrollReveal().reveal('.section1 .container .row .col .image1', { delay: 400, origin: "left" });

// section2の中の画像を使用性を下げない程度の時差付けでアニメーション表示
ScrollReveal().reveal('.section2 .container .row .col .image3', { delay: 200, origin: "left" });
ScrollReveal().reveal('.section2 .container .row .col .image2', { delay: 300, origin: "left" });
ScrollReveal().reveal('.section2 .container .row .col .image1', { delay: 400, origin: "left" });

// image内テキストのcontact以外をスライドするanimation
ScrollReveal().reveal('.footer .footer_inner h1,.footer .footer_inner p', { delay: 300, origin: "bottom" });





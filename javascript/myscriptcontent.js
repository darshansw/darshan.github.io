        //Toggle night/light modes
        var icon = document.getElementById("icon");
        icon.onclick = function () 
        {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                icon.src = "images/sun.png";
            }
            else {
                icon.src = "images/moon.png";
            }
        }

// Swiper slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // Submit button
  const btns = document.querySelectorAll(".btn");

    btns.forEach((btn) => {
        btn.addEventListener("mousemove", function (e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            btn.children[0].style.transform = "translate(" + x * 0.5 + "px, " + y * 0.0 + "px)";
        });
    });

    btns.forEach((btn) => {
        btn.addEventListener("mouseout", function (e) {
            btn.children[0].style.transform = "translate(0px,0px)";
        });
    });
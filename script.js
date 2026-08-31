/* =====================================================
   I-TECH SOLUTIONS
   FINAL JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const yearElements =
        document.querySelectorAll("#currentYear");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });



    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.querySelector(".navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("show");

                if (
                    navbar.classList.contains("show")
                ) {

                    menuToggle.textContent = "✕";

                } else {

                    menuToggle.textContent = "☰";

                }

            }
        );


        /* Close menu after clicking link */

        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navbar.classList.remove(
                        "show"
                    );

                    menuToggle.textContent = "☰";

                }
            );

        });

    }



    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    const navigationLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();


        if (
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });



    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .feature, .cta, .contact-form"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(25px)";

                element.style.transition =
                    "opacity .7s ease, transform .7s ease";

                observer.observe(element);

            }
        );

    }



    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        targetId === "#"
                    ) {

                        event.preventDefault();

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );



    /* =================================================
       HEADER SCROLL EFFECT
    ================================================= */

    const header =
        document.querySelector(".header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 30
                ) {

                    header.style.boxShadow =
                        "0 10px 40px rgba(0,0,0,.25)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            }
        );

    }



    /* =================================================
       BUTTON CLICK EFFECT
    ================================================= */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .login-btn, .signup-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "mousedown",
                function () {

                    button.style.transform =
                        "scale(.97)";

                }
            );


            button.addEventListener(
                "mouseup",
                function () {

                    button.style.transform =
                        "";

                }
            );


            button.addEventListener(
                "mouseleave",
                function () {

                    button.style.transform =
                        "";

                }
            );

        }
    );



    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameField =
                    document.getElementById(
                        "name"
                    );


                const emailField =
                    document.getElementById(
                        "email"
                    );


                const messageField =
                    document.getElementById(
                        "message"
                    );


                if (
                    nameField &&
                    emailField &&
                    messageField
                ) {

                    const name =
                        nameField.value.trim();

                    const email =
                        emailField.value.trim();

                    const message =
                        messageField.value.trim();


                    if (
                        !name ||
                        !email ||
                        !message
                    ) {

                        alert(
                            "Please complete all required fields."
                        );

                        return;

                    }


                    alert(
                        "Thank you, " +
                        name +
                        "! Your message has been submitted."
                    );


                    contactForm.reset();

                }

            }
        );

    }



    /* =================================================
       NEWSLETTER FORM
    ================================================= */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    newsletterForm
                    .querySelector(
                        'input[type="email"]'
                    );


                if (
                    email &&
                    email.value.trim()
                ) {

                    alert(
                        "Thank you for subscribing!"
                    );

                    newsletterForm.reset();

                }

            }
        );

    }



    /* =================================================
       CURSOR GLOW EFFECT
    ================================================= */

    const cursorGlow =
        document.createElement("div");


    cursorGlow.style.position =
        "fixed";

    cursorGlow.style.width =
        "180px";

    cursorGlow.style.height =
        "180px";

    cursorGlow.style.borderRadius =
        "50%";

    cursorGlow.style.pointerEvents =
        "none";

    cursorGlow.style.zIndex =
        "-1";

    cursorGlow.style.background =
        "radial-gradient(circle, rgba(0,217,255,.08), transparent 70%)";

    cursorGlow.style.transform =
        "translate(-50%, -50%)";

    cursorGlow.style.transition =
        "left .12s ease, top .12s ease";

    document.body.appendChild(
        cursorGlow
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );



    /* =================================================
       DISABLE CURSOR EFFECT ON TOUCH DEVICES
    ================================================= */

    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {

        cursorGlow.remove();

    }



    /* =================================================
       CONSOLE BRAND MESSAGE
    ================================================= */

    console.log(
        "%c I-Tech Solutions ",
        "background:#00d9ff;color:#031019;font-size:18px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Technology • Repair • Software • Security"
    );

});
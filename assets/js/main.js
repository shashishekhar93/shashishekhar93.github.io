(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loader = document.querySelector(".loader");
  document.body.classList.add("is-loading");
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation.
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  toggle?.addEventListener("click", () => nav.classList.toggle("menu-open"));
  document.querySelectorAll(".nav__links a").forEach(link => link.addEventListener("click", () => nav.classList.remove("menu-open")));

  if (reduced || typeof gsap === "undefined") {
    loader?.remove();
    document.body.classList.remove("is-loading");
    document.querySelectorAll(".reveal").forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
    document.querySelectorAll(".hero__title .line > span").forEach(el => el.style.transform = "none");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Smooth scrolling.
  let lenis;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // Intro / preloader.
  const counter = document.querySelector(".loader__counter");
  const bar = document.querySelector(".loader__bar span");
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(loader, {
        yPercent: -100, duration: .95, ease: "power4.inOut",
        onComplete: () => { loader.remove(); document.body.classList.remove("is-loading"); }
      });
    }
  });
  tl.to({value:0}, {
    value:100, duration:1.15, ease:"power2.inOut",
    onUpdate() {
      const v = Math.round(this.targets()[0].value);
      if (counter) counter.textContent = String(v).padStart(2,"0");
      if (bar) bar.style.width = `${v}%`;
    }
  })
  .to(".hero__title .line > span", { y:0, duration:1.05, stagger:.09, ease:"power4.out" }, "-=.45")
  .from(".hero__eyebrow, .hero__intro, .circle-link, .hero__scroll", { opacity:0, y:20, duration:.7, stagger:.08, ease:"power3.out" }, "-=.7");

  // Navigation background.
  ScrollTrigger.create({
    start: 40,
    onEnter: () => nav.classList.add("is-scrolled"),
    onLeaveBack: () => nav.classList.remove("is-scrolled")
  });

  // Generic reveals.
  gsap.utils.toArray(".reveal").forEach((el) => {
    if (el.closest(".hero")) return;
    gsap.fromTo(el,
      { autoAlpha:0, y:38 },
      { autoAlpha:1, y:0, duration:.9, ease:"power3.out",
        scrollTrigger:{ trigger:el, start:"top 86%", once:true }
      }
    );
  });

  // Counters.
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.dataset.count);
    gsap.fromTo(el, { textContent:0 }, {
      textContent:target, duration:1.4, ease:"power2.out", snap:{textContent:1},
      scrollTrigger:{trigger:el, start:"top 85%", once:true}
    });
  });

  // Subtle project parallax.
  gsap.utils.toArray(".project__media img, .project-card__image img").forEach(img => {
    gsap.to(img, {
      yPercent:5, ease:"none",
      scrollTrigger:{trigger:img.closest(".project, .project-card"), start:"top bottom", end:"bottom top", scrub:true}
    });
  });

  // Cursor.
  const dot = document.querySelector(".cursor:not(.cursor--ring)");
  const ring = document.querySelector(".cursor--ring");
  if (dot && ring && window.matchMedia("(pointer:fine)").matches) {
    let mx=window.innerWidth/2, my=window.innerHeight/2, rx=mx, ry=my;
    window.addEventListener("mousemove", e => { mx=e.clientX; my=e.clientY; gsap.to(dot,{x:mx,y:my,duration:.08}); });
    gsap.ticker.add(() => {
      rx += (mx-rx)*.14; ry += (my-ry)*.14;
      gsap.set(ring,{x:rx,y:ry});
    });
    document.querySelectorAll("a, button, .project-card, .project__media").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  }

  // Magnetic CTA.
  document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      gsap.to(el,{x:x*.18,y:y*.18,duration:.35,ease:"power3.out"});
    });
    el.addEventListener("mouseleave", () => gsap.to(el,{x:0,y:0,duration:.5,ease:"elastic.out(1,.5)"}));
  });
})();

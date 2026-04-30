window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".containerPai",
      start: "top top",
      end: "+=300%",
      onLeaveBack: () => {},   
      onLeave: () => {
        window.location.href = "home.html";  
      },
      pin: true,
      scrub: 2,
    },
  });

  tl.to(".secao1", { WebkitMaskSize: "20vw", maskSize: "20vw", duration: 2 });
  tl.to(".secaoBranca", { backgroundColor: "white", duration: 1 }, "-=1");
  tl.from(".secao2 img", { opacity: 0, filter: "blur(20px)", duration: 0.5 }, "+=.3");
  tl.call(() => {
    window.location.href = "index.html";  
  });

  ScrollTrigger.refresh();
});

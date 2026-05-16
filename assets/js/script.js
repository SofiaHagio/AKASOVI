window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
 
  const tl = gsap.timeline({
    onComplete: () => {
      window.location.href = "sobre.html";
    }
  });
 
  tl.to(".secao1", { WebkitMaskSize: "20vw", maskSize: "20vw", duration: 2 });
  tl.to(".secaoBranca", { backgroundColor: "white", duration: 1 }, "-=1");
  tl.from(".secao2 img", { opacity: 0, filter: "blur(20px)", duration: 0.5 }, "+=.3");
  tl.to(".secao2 img", { opacity: 0, duration: 0.4 }, "+=0.8");
});
 
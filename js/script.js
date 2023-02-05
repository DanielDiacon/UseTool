
// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});


// 100vh form mobile <=>
const documentHeight = () => {
   const doc = document.documentElement
   doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

//smooth scroll <=>
window.addEventListener('scroll', e => {
   document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
   wrapper: '.scroll-wrapper',
   content: '.scroll-content'
})
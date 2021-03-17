////////////////////////lOADER////////////////////////

window.addEventListener('load',() => {
    const preload = document.querySelector('.preloader');
    preload.classList.add('preloader-finish');
})


// ///////////////////////EVENTS FUNC/////////////


const event_1 = document.querySelector('#event_1');//workshop
const event_2 = document.querySelector('#event_2');//sponsors
const event_3 = document.querySelector('#event_3');//home heading
const event_4 = document.querySelector('#event_4');//about
const event_5 = document.querySelector('#event_5');//events
const event_6 = document.querySelector('#event_6');//team

const aboutHome = document.querySelector('#about__home');
const teamHome = document.querySelector('#team__home');
const sponsorsHome = document.querySelector('#sponsors__home');



let yheight,xwidth;
// let events = [event_1,event_2,event_3,event_4,event_5,event_6]

////////////////////functionality section///////



//about
var  e1 = gsap.timeline({defaults:{duration: 0.4,}},{paused:true}) 
// sponsors
var  e2 = gsap.timeline({defaults:{duration: 0.4}},{paused:true}) 

// Team
var  e3 = gsap.timeline({defaults:{duration: 0.4}},{paused:true}) 



const fn_event_1 = () => {
    
e1.to("#countdown",{duration:0.01, opacity:0})
    .to("footer",{duration:0.01, opacity:0})
    .to(".nav__category,.home__container__img",{duration:0.02, opacity:0})
    .to(".countdown",{duration:0.01, opacity:0})
    .to(".about--section",{scale:1})
    .to(".about--section",{height:"100vh"})
    .to(".about--section",{duration: 1,width:"100vw",ease:"power4.out"})
    .to(".background__line",{height:"10vh",width:"10vw"})
    .to(".background__line",{height:"100vh"})
    .to(".background__back",{duration:0.01, opacity:1})
    .to(".about__heading,.about__home",{duration:0.01, opacity:1})
    .to(".about__heading--bg",{opacity:1})
    .to(".about__images",{scale:1,opacity:1})
    .to(".about__details",{scale:1,opacity:1},"-=1")
}



const fn_event_2 = () => {                
        e2.to("#countdown",{duration:0.01, opacity:0})
        .to("footer",{duration:0.01, opacity:0})
        .to(".nav__category,.home__container__img",{duration:0.02, opacity:0})
        .to(".countdown",{duration:0.01, opacity:0})
        .to(".sponsors--section",{scale:1})
        .to(".sponsors--section",{height:"100vh"})
        .to(".sponsors--section",{duration: 1,width:"100vw",ease:"power4.out"})
        .to(".background__line",{height:"10vh",width:"10vw"})
        .to(".background__line",{height:"100vh"})
        .to(".background__back",{duration:0.01, opacity:1})
        .to(".sponsors__heading--bg",{opacity:1})
        .to(".sponsors__heading",{duration:0.01, opacity:1})
        .to(".sponsors__row",{duration:0.01,opacity:1})
        .to(".sponsors__footer",{duration:0.01,opacity:1},"-=1")
}




const fn_event_3 = () => {                
    e3.to("#countdown",{duration:0.01, opacity:0})
    .to("footer",{duration:0.01, opacity:0})
    .to(".nav__category,.home__container__img",{duration:0.02, opacity:0})
    .to(".countdown",{duration:0.01, opacity:0})
    .to(".team--section",{scale:1})
    .to(".team--section",{height:"100vh"})
    .to(".team--section",{duration: 1,width:"100vw",ease:"power4.out"})
    .to(".background__line",{height:"10vh",width:"10vw"})
    .to(".background__line",{height:"100vh"})
    .to(".background__back",{duration:0.01, opacity:1})
    .to(".team__heading--bg",{opacity:1})
    .to(".team__heading",{duration:0.01, opacity:1})
    .to(".team__card",{duration:0.01,opacity:1})
    // .to(".sponsors__footer",{duration:0.01,opacity:1},"-=1")
}
    
    
    
event_2.addEventListener('click',(e) => {

    console.log("clicked");

    // e1.play();

    fn_event_2();
    
    e2.play();

    console.log("as");
})


event_4.addEventListener('click',(e) => {

    console.log("clicked");

    // e1.play();

    fn_event_1();

    e1.play();

    console.log("as");
})



event_6.addEventListener('click',(e) => {

    console.log("clicked");

    // e1.play();

    fn_event_3();

    e3.play();

    console.log("as");
})




aboutHome.addEventListener('click',()=>{
    
    console.log("as");
    e1.reversed() ? e1.play() : e1.reverse();
})


sponsorsHome.addEventListener('click',()=>{
    

    console.log("as");
    e2.reversed() ? e2.play() : e2.reverse();
})

teamHome.addEventListener('click',()=>{
    console.log("vackteam");
    e3.reversed() ? e3.play() : e3.reverse();
})











// TEST
// document.querySelector("html").addEventListener("click",(e) => {
//     // console.log(e.view) 
//     console.log(e.view.outerHeight , e.view.outerWidth)
    
//     console.log(e.view.innerHeight , e.view.innerWidth)

    
// yheight = -e.view.innerHeight + 0.2 * e.view.innerHeight;
// xwidth= -e.view.innerWidth + 0.11 * e.view.innerWidth;
// })


// // TEST
// // document.querySelector("html").addEventListener("click",(e) => {
// //     // console.log(e.view) 
// //     console.log(e.view.outerHeight , e.view.outerWidth)
    
// //     console.log(e.view.innerHeight , e.view.innerWidth)

    
// // yheight = -e.view.innerHeight + 0.2 * e.view.innerHeight;
// // xwidth= -e.view.innerWidth + 0.11 * e.view.innerWidth;
// // })




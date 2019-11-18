let images = [
    [
        "./Assets/1/1.png",
        "./Assets/1/2.png",
        "./Assets/1/3.png",
        "./Assets/1/4.png",
        "./Assets/1/5.png",
        "./Assets/1/6.png",
        "./Assets/1/7.png",
    ],
    [
        "./Assets/2/1.png",
        "./Assets/2/2.png",
        "./Assets/2/3.png",
        "./Assets/2/4.png",
        "./Assets/2/5.png",
        "./Assets/2/6.png",
        "./Assets/2/7.png",
        "./Assets/2/8.png",
        "./Assets/2/9.png",
        "./Assets/2/10.png",
        "./Assets/2/11.png",
        "./Assets/2/12.png",
        "./Assets/2/13.png",
        "./Assets/2/14.png",
        "./Assets/2/15.png",
        "./Assets/2/16.png",
        "./Assets/2/17.png",
        "./Assets/2/18.png",
    ]
];


let obj = { curImg: 0 };
let imageSet = 0;
let image = document.querySelector('.my-img');
let button = document.querySelector('.change-button');
// button.addEventListener('click', () => {
//     let section = document.querySelector('.section');
//     window.scrollTo(0,0); 
//     if(imageSet % images.length - 1 === 0){
//         imageSet = 0;
//         TweenMax.to(section, 2, { backgroundColor: 'purple' });
//     }else{
//         imageSet++;
//         TweenMax.to(section, 2, { backgroundColor: 'red' });
//     }
//     console.log(imageSet)
//     TweenMax.to(image, 2, { opacity: 1 });
//     image.setAttribute('src', `${images[imageSet][0]}`)


// })
document.addEventListener("keyup", (e) => {
    if (e.keyCode == 32 || e.which == 32) {

        let section = document.querySelector('.section');
        window.scrollTo(0, 0);
        if (imageSet % images.length - 1 === 0) {
            imageSet = 0;
            TweenMax.to(section, 2, { backgroundColor: 'purple' });
        } else {
            imageSet++;
            TweenMax.to(section, 2, { backgroundColor: 'blue' });
        }
        TweenMax.fromTo('.change-button', 0.3 , {width: '410px', height: '50px', boxShadow: '2px 7px rgba(0, 0, 0, 0.0)', ease: Power3.easeOut}, 
                        {width: '400px', height: '60px', boxShadow: '2px 7px rgba(0, 0, 0, 0.1)', ease: Power3.easeIn}, 1)
       
        console.log(imageSet)
        TweenMax.fromTo('.image-container', 3 , { opacity: 0 },{ opacity: 1 });
        image.setAttribute('src', `${images[imageSet][0]}`)
    }
})
// create tween
let tween = TweenMax.to(obj, 0.5,
    {
        curImg: images[imageSet].length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 2,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            image.setAttribute('src', `${images[imageSet][obj.curImg]}`)
            // set the image source
            console.log(imageSet);
        }

    }

);

// init controller
let controller = new ScrollMagic.Controller();

// build scene
let scene = new ScrollMagic.Scene({

    triggerElement: ".container",
    duration: '500%',
    triggerHook: 0
})
    .setTween(tween)
    .setPin('.section')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


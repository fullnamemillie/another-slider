// var btnPrev = document.querySelector('#btn-prev');
// var btnNext = document.querySelector('#btn-next');
// var slideImage = document.querySelector('#image-slide');

// var imageUrls = [];
// imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png');
// imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/navy-blue-color-solid-background-1920x1080.png');
// imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png');
// imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/purple-color-solid-background-1920x1080.png');


// var currentImageIndex = 0
// slideImage.src = imageUrls[currentImageIndex];
// btnPrev.disabled = true;


// function onShowBtnPrev() {
//     currentImageIndex--;
//     slideImage.src = imageUrls[currentImageIndex];
//     btnNext.disabled = false;
//     if (currentImageIndex === 0) {
//         btnPrev.disabled = true;
//     }
// }

// function onShowBtnNext() {
//     currentImageIndex++;
//     slideImage.src = imageUrls[currentImageIndex];
//     btnPrev.disabled = false;
//     if (currentImageIndex === (imageUrls.length - 1)) {
//         btnNext.disabled = true;
//     }

// }

// btnPrev.addEventListener('click', onShowBtnPrev);
// btnNext.addEventListener('click', onShowBtnNext);

// var slider1 = {
//     imageUrls: [],
//     btnPrev: document.querySelector('#btn-prev'),
//     btnNext: document.querySelector('#btn-next'),
//     slideImage: document.querySelector('#image-slide'),
//     currentImageIndex: 0,

//     start: function() {
//         var that = this;


//         this.btnPrev.addEventListener('click', function(e) {
//             that.onShowBtnPrev(e);
//         });
//         this.btnNext.addEventListener('click', function(e) {
//             that.onShowBtnNext(e);
//         });

//         this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png');
//         this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/navy-blue-color-solid-background-1920x1080.png');
//         this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png');
//         this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/purple-color-solid-background-1920x1080.png');

//         this.slideImage.src = this.imageUrls[this.currentImageIndex];
//         this.btnPrev.disabled = true;

//     },

//     onShowBtnPrev: function(e) {
//         this.currentImageIndex--;
//         this.slideImage.src = this.imageUrls[this.currentImageIndex];
//         this.btnNext.disabled = false;
//         if (this.currentImageIndex === 0) {
//             this.btnPrev.disabled = true;
//         }
//     },

//     onShowBtnNext: function(e) {
//         this.currentImageIndex++;
//         this.slideImage.src = this.imageUrls[this.currentImageIndex];
//         this.btnPrev.disabled = false;
//         if (this.currentImageIndex === (this.imageUrls.length - 1)) {
//             this.btnNext.disabled = true;
//         }
//     }
// };


var slider1 = new Slider();
var slider2 = new Slider();

slider1.start('id-slider-one');
slider2.start('id-slider-two');
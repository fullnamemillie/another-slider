function Slider() {
    this.imageUrls = [];
    this.currentImageIndex = 0;
    this.btnPrev = null;
    this.btnNext = null;
    this.slideImage = null;

    this.start = function(elemId) {
        var that = this;

        var elemSel = '#' + elemId;
        var elem = document.querySelector(elemSel);

        this.btnPrev = elem.querySelector('.button-prev');
        this.btnNext = elem.querySelector('.button-next');
        this.slideImage = elem.querySelector('.image');

        this.btnPrev.addEventListener('click', function(e) {
            that.onShowBtnPrev(e);
        });
        this.btnNext.addEventListener('click', function(e) {
            that.onShowBtnNext(e);
        });

        this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png');
        this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/navy-blue-color-solid-background-1920x1080.png');
        this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png');
        this.imageUrls.push('https://htmlcolorcodes.com/assets/images/colors/purple-color-solid-background-1920x1080.png');

        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.btnPrev.disabled = true;

    };

    this.onShowBtnPrev = function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.btnNext.disabled = false;
        if (this.currentImageIndex === 0) {
            this.btnPrev.disabled = true;
        }
    };

    this.onShowBtnNext = function(e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.btnPrev.disabled = false;
        if (this.currentImageIndex === (this.imageUrls.length - 1)) {
            this.btnNext.disabled = true;
        }

    };
};
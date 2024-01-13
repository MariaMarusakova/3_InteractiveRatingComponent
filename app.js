const rating = document.getElementsByClassName('rating-item');

for (i=0; i<rating.length; i++) {
        rating[i].addEventListener('click', function () {
          this.classList.toggle('active')
        })

}


function switchPage() {

  var thankYouPage = document.getElementsByClassName('thank-you');
  thankYouPage[0].classList.toggle('active');  

  var ratingBox = document.getElementsByClassName('rating-box');
  ratingBox[0].classList.toggle('inactive');  

  }
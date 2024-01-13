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
  showSelectedRating();
  }

  function showSelectedRating() {

    const valueToShow = document.getElementsByClassName("rating-item active")[0].innerHTML;
    const elementToUpdate = document.getElementsByClassName("selected-value");
    elementToUpdate[0].textContent = valueToShow;

}
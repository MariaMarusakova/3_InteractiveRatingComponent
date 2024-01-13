const rating = document.getElementsByClassName('rating-item');

for (i=0; i<rating.length; i++) {
        rating[i].addEventListener('click', function () {
          this.classList.toggle('active')
        })

}
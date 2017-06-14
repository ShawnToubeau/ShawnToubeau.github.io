$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.haHsh = hash
        }
      )
    }
  })
})

$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide')
})

$(document).click(function (e) {
  if (!$(e.target).is('a') || $(e.target).is('.navbar-brand')) {
    $('.collapse').collapse('hide')
  }
})

// first java slider home
$(document).ready(function() {
    const $track = $('.slider-track');
    const $slides = $('.slide');
    const slideCount = $slides.length;
    let index = 0;

    function updateSlider() {
      const slideWidth = $slides.first().outerWidth(true);
      $track.css('transform', `translateX(-${index * slideWidth}px)`);
    }

    $('.next').on('click', function() {
      index = (index + 1) % slideCount;
      updateSlider();
    });

    $('.prev').on('click', function() {
      index = (index - 1 + slideCount) % slideCount;
      updateSlider();
    });

    $(window).on('resize', updateSlider);
  });



  // Image Pop up sa menu 2
$(document).ready(function () {
  const $modal = $("#itemModal");
  const $modalImg = $("#modalImg");
  const $modalTitle = $("#modalTitle");
  const $modalSize = $("#modalSize");

  $(".single-menu img").on("click", function () {
    const $item = $(this).closest(".single-menu");
    const imgSrc = $(this).attr("src");
    const title = $item.find("h5").text();
    const sizes = $item.find("p").map(function () {
      return $(this).text();
    }).get().join(" | ");

    $modalImg.attr("src", imgSrc);
    $modalTitle.text(title);
    $modalSize.text(sizes);

    $modal.fadeIn(300); // fade in over 300ms
  });

  $(".close").on("click", function () {
    $modal.fadeOut(300); // fade out over 300ms
  });

  $(window).on("click", function (e) {
    if ($(e.target).is($modal)) {
      $modal.fadeOut(300);
    }
  });
});





$(document).ready(function () {
  let currentTask = 0;
  let currentImageIndex = 0;

  let currentTask_imgnet = 0;
  let currentImageIndex_imgnet = 0;

  const tasks = {
    0: [
      {
        fixed: 'static/images/quality_ours/ffhq/gauss_deblur/gt/0.png',
        left: 'static/images/quality_ours/ffhq/gauss_deblur/recon/0.png',
        right: 'static/images/quality_ours/ffhq/gauss_deblur/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/gauss_deblur/gt/1.png',
        left: 'static/images/quality_ours/ffhq/gauss_deblur/recon/1.png',
        right: 'static/images/quality_ours/ffhq/gauss_deblur/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/gauss_deblur/gt/2.png',
        left: 'static/images/quality_ours/ffhq/gauss_deblur/recon/2.png',
        right: 'static/images/quality_ours/ffhq/gauss_deblur/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/gauss_deblur/gt/3.png',
        left: 'static/images/quality_ours/ffhq/gauss_deblur/recon/3.png',
        right: 'static/images/quality_ours/ffhq/gauss_deblur/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/gauss_deblur/gt/4.png',
        left: 'static/images/quality_ours/ffhq/gauss_deblur/recon/4.png',
        right: 'static/images/quality_ours/ffhq/gauss_deblur/y/4.png',
      },
    ],
    1: [
      {
        fixed: 'static/images/quality_ours/ffhq/sr4/gt/0.png',
        left: 'static/images/quality_ours/ffhq/sr4/recon/0.png',
        right: 'static/images/quality_ours/ffhq/sr4/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/sr4/gt/1.png',
        left: 'static/images/quality_ours/ffhq/sr4/recon/1.png',
        right: 'static/images/quality_ours/ffhq/sr4/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/sr4/gt/2.png',
        left: 'static/images/quality_ours/ffhq/sr4/recon/2.png',
        right: 'static/images/quality_ours/ffhq/sr4/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/sr4/gt/3.png',
        left: 'static/images/quality_ours/ffhq/sr4/recon/3.png',
        right: 'static/images/quality_ours/ffhq/sr4/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/sr4/gt/4.png',
        left: 'static/images/quality_ours/ffhq/sr4/recon/4.png',
        right: 'static/images/quality_ours/ffhq/sr4/y/4.png',
      },
    ],
    2: [
      {
        fixed: 'static/images/quality_ours/ffhq/boxinpaint/gt/0.png',
        left: 'static/images/quality_ours/ffhq/boxinpaint/recon/0.png',
        right: 'static/images/quality_ours/ffhq/boxinpaint/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/boxinpaint/gt/1.png',
        left: 'static/images/quality_ours/ffhq/boxinpaint/recon/1.png',
        right: 'static/images/quality_ours/ffhq/boxinpaint/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/boxinpaint/gt/2.png',
        left: 'static/images/quality_ours/ffhq/boxinpaint/recon/2.png',
        right: 'static/images/quality_ours/ffhq/boxinpaint/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/boxinpaint/gt/3.png',
        left: 'static/images/quality_ours/ffhq/boxinpaint/recon/3.png',
        right: 'static/images/quality_ours/ffhq/boxinpaint/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/boxinpaint/gt/4.png',
        left: 'static/images/quality_ours/ffhq/boxinpaint/recon/4.png',
        right: 'static/images/quality_ours/ffhq/boxinpaint/y/4.png',
      },
    ],
    3: [
      {
        fixed: 'static/images/quality_ours/ffhq/deno/gt/0.png',
        left: 'static/images/quality_ours/ffhq/deno/recon/0.png',
        right: 'static/images/quality_ours/ffhq/deno/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/deno/gt/1.png',
        left: 'static/images/quality_ours/ffhq/deno/recon/1.png',
        right: 'static/images/quality_ours/ffhq/deno/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/deno/gt/2.png',
        left: 'static/images/quality_ours/ffhq/deno/recon/2.png',
        right: 'static/images/quality_ours/ffhq/deno/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/deno/gt/3.png',
        left: 'static/images/quality_ours/ffhq/deno/recon/3.png',
        right: 'static/images/quality_ours/ffhq/deno/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/deno/gt/4.png',
        left: 'static/images/quality_ours/ffhq/deno/recon/4.png',
        right: 'static/images/quality_ours/ffhq/deno/y/4.png',
      },
    ],
    4: [
      {
        fixed: 'static/images/quality_ours/ffhq/color/gt/0.png',
        left: 'static/images/quality_ours/ffhq/color/recon/0.png',
        right: 'static/images/quality_ours/ffhq/color/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/color/gt/1.png',
        left: 'static/images/quality_ours/ffhq/color/recon/1.png',
        right: 'static/images/quality_ours/ffhq/color/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/color/gt/2.png',
        left: 'static/images/quality_ours/ffhq/color/recon/2.png',
        right: 'static/images/quality_ours/ffhq/color/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/color/gt/3.png',
        left: 'static/images/quality_ours/ffhq/color/recon/3.png',
        right: 'static/images/quality_ours/ffhq/color/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/ffhq/color/gt/4.png',
        left: 'static/images/quality_ours/ffhq/color/recon/4.png',
        right: 'static/images/quality_ours/ffhq/color/y/4.png',
      },
    ],
  };

  const tasks_imgnet = {
    0: [
      {
        fixed: 'static/images/quality_ours/imagenet/gauss_deblur/gt/0.png',
        left: 'static/images/quality_ours/imagenet/gauss_deblur/recon/0.png',
        right: 'static/images/quality_ours/imagenet/gauss_deblur/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/gauss_deblur/gt/1.png',
        left: 'static/images/quality_ours/imagenet/gauss_deblur/recon/1.png',
        right: 'static/images/quality_ours/imagenet/gauss_deblur/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/gauss_deblur/gt/2.png',
        left: 'static/images/quality_ours/imagenet/gauss_deblur/recon/2.png',
        right: 'static/images/quality_ours/imagenet/gauss_deblur/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/gauss_deblur/gt/3.png',
        left: 'static/images/quality_ours/imagenet/gauss_deblur/recon/3.png',
        right: 'static/images/quality_ours/imagenet/gauss_deblur/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/gauss_deblur/gt/4.png',
        left: 'static/images/quality_ours/imagenet/gauss_deblur/recon/4.png',
        right: 'static/images/quality_ours/imagenet/gauss_deblur/y/4.png',
      },
    ],
    1: [
      {
        fixed: 'static/images/quality_ours/imagenet/sr4/gt/0.png',
        left: 'static/images/quality_ours/imagenet/sr4/recon/0.png',
        right: 'static/images/quality_ours/imagenet/sr4/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/sr4/gt/1.png',
        left: 'static/images/quality_ours/imagenet/sr4/recon/1.png',
        right: 'static/images/quality_ours/imagenet/sr4/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/sr4/gt/2.png',
        left: 'static/images/quality_ours/imagenet/sr4/recon/2.png',
        right: 'static/images/quality_ours/imagenet/sr4/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/sr4/gt/3.png',
        left: 'static/images/quality_ours/imagenet/sr4/recon/3.png',
        right: 'static/images/quality_ours/imagenet/sr4/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/sr4/gt/4.png',
        left: 'static/images/quality_ours/imagenet/sr4/recon/4.png',
        right: 'static/images/quality_ours/imagenet/sr4/y/4.png',
      },
    ],
    2: [
      {
        fixed: 'static/images/quality_ours/imagenet/boxinpaint/gt/0.png',
        left: 'static/images/quality_ours/imagenet/boxinpaint/recon/0.png',
        right: 'static/images/quality_ours/imagenet/boxinpaint/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/boxinpaint/gt/1.png',
        left: 'static/images/quality_ours/imagenet/boxinpaint/recon/1.png',
        right: 'static/images/quality_ours/imagenet/boxinpaint/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/boxinpaint/gt/2.png',
        left: 'static/images/quality_ours/imagenet/boxinpaint/recon/2.png',
        right: 'static/images/quality_ours/imagenet/boxinpaint/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/boxinpaint/gt/3.png',
        left: 'static/images/quality_ours/imagenet/boxinpaint/recon/3.png',
        right: 'static/images/quality_ours/imagenet/boxinpaint/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/boxinpaint/gt/4.png',
        left: 'static/images/quality_ours/imagenet/boxinpaint/recon/4.png',
        right: 'static/images/quality_ours/imagenet/boxinpaint/y/4.png',
      },
    ],
    3: [
      {
        fixed: 'static/images/quality_ours/imagenet/deno/gt/0.png',
        left: 'static/images/quality_ours/imagenet/deno/recon/0.png',
        right: 'static/images/quality_ours/imagenet/deno/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/deno/gt/1.png',
        left: 'static/images/quality_ours/imagenet/deno/recon/1.png',
        right: 'static/images/quality_ours/imagenet/deno/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/deno/gt/2.png',
        left: 'static/images/quality_ours/imagenet/deno/recon/2.png',
        right: 'static/images/quality_ours/imagenet/deno/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/deno/gt/3.png',
        left: 'static/images/quality_ours/imagenet/deno/recon/3.png',
        right: 'static/images/quality_ours/imagenet/deno/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/deno/gt/4.png',
        left: 'static/images/quality_ours/imagenet/deno/recon/4.png',
        right: 'static/images/quality_ours/imagenet/deno/y/4.png',
      },
    ],
    4: [
      {
        fixed: 'static/images/quality_ours/imagenet/color/gt/0.png',
        left: 'static/images/quality_ours/imagenet/color/recon/0.png',
        right: 'static/images/quality_ours/imagenet/color/y/0.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/color/gt/1.png',
        left: 'static/images/quality_ours/imagenet/color/recon/1.png',
        right: 'static/images/quality_ours/imagenet/color/y/1.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/color/gt/2.png',
        left: 'static/images/quality_ours/imagenet/color/recon/2.png',
        right: 'static/images/quality_ours/imagenet/color/y/2.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/color/gt/3.png',
        left: 'static/images/quality_ours/imagenet/color/recon/3.png',
        right: 'static/images/quality_ours/imagenet/color/y/3.png',
      },
      {
        fixed: 'static/images/quality_ours/imagenet/color/gt/4.png',
        left: 'static/images/quality_ours/imagenet/color/recon/4.png',
        right: 'static/images/quality_ours/imagenet/color/y/4.png',
      },
    ],
  };

  function updateImages() {
    const fixedImage = $('#fixedImage');
    const slideImageLeft = $('#slideImageLeft');
    const slideImageRight = $('#slideImageRight');
    const slider = $('#slider');

    const currentImages = tasks[currentTask][currentImageIndex];

    fixedImage.css('background-image', `url(${currentImages.fixed})`);
    slideImageLeft.css('background-image', `url(${currentImages.left})`);
    slideImageRight.css('background-image', `url(${currentImages.right})`);

    slider.val(50); // Reset slider to center
    slideImageRight.css('clip-path', `inset(0 50% 0 0)`);

    // Move the slider handle to the center
    $('.slider-handle').css({ left: '50%' });

    // Update dot selection
    $('.dot').removeClass('active');
    $(`.dot:eq(${currentImageIndex})`).addClass('active');
  }

  function updateImages_imgnet() {
    const fixedImage = $('#fixedImage_imgnet');
    const slideImageLeft = $('#slideImageLeft_imgnet');
    const slideImageRight = $('#slideImageRight_imgnet');
    const slider = $('#slider_imgnet');

    const currentImages =
      tasks_imgnet[currentTask_imgnet][currentImageIndex_imgnet];

    fixedImage.css('background-image', `url(${currentImages.fixed})`);
    slideImageLeft.css('background-image', `url(${currentImages.left})`);
    slideImageRight.css('background-image', `url(${currentImages.right})`);

    slider.val(50); // Reset slider to center
    slideImageRight.css('clip-path', `inset(0 50% 0 0)`);

    // Move the slider handle to the center
    $('.slider-handle').css({ left: '50%' });

    // Update dot selection
    $('.dotimgnet').removeClass('active');
    $(`.dotimgnet:eq(${currentImageIndex_imgnet})`).addClass('active');
  }

  function selectTask(taskNumber) {
    currentTask = taskNumber;
    currentImageIndex = 0;
    updateImages();
  }

  function selectTask_imgnet(taskNumber) {
    currentTask_imgnet = taskNumber;
    currentImageIndex_imgnet = 0;
    updateImages_imgnet();
  }

  function selectImage(index) {
    currentImageIndex = index;
    updateImages();
  }

  function selectImage_imgnet(index) {
    currentImageIndex_imgnet = index;
    updateImages_imgnet();
  }

  function prevImage() {
    currentImageIndex =
      currentImageIndex === 0
        ? tasks[currentTask].length - 1
        : currentImageIndex - 1;
    updateImages();
  }

  function prevImage_imgnet() {
    currentImageIndex_imgnet =
      currentImageIndex_imgnet === 0
        ? tasks_imgnet[currentTask_imgnet].length - 1
        : currentImageIndex_imgnet - 1;
    updateImages_imgnet();
  }

  function nextImage() {
    currentImageIndex =
      currentImageIndex === tasks[currentTask].length - 1
        ? 0
        : currentImageIndex + 1;
    updateImages();
  }

  function nextImage_imgnet() {
    currentImageIndex_imgnet =
      currentImageIndex_imgnet === tasks_imgnet[currentTask_imgnet].length - 1
        ? 0
        : currentImageIndex_imgnet + 1;
    updateImages_imgnet();
  }

  $('input.slider').on('input change', function (event) {
    var element = $(this).parents('div.slide-container');
    var pos = event.target.value;

    element
      .find('div.overlay')
      .css({ 'clip-path': 'inset(0 ' + (100 - pos) + '% 0 0)' });
    element
      .find('div.slider-handle')
      .css({ left: 'calc(' + pos + '%)' }); /* Move the handle left-right */
  });

  $('.slider-handle').on('mousedown touchstart', function (e) {
    var $slider = $(this).siblings('input.slider');

    function moveSlider(e) {
      var containerOffset = $slider.offset().left;
      var containerWidth = $slider.width();
      var pageX =
        e.type === 'touchmove' ? e.originalEvent.touches[0].pageX : e.pageX;
      var newValue = ((pageX - containerOffset) / containerWidth) * 100;

      if (newValue >= 0 && newValue <= 100) {
        $slider.val(newValue).trigger('input');
      }
    }

    $(document).on('mousemove touchmove', moveSlider);

    $(document).on('mouseup touchend', function () {
      $(document).off('mousemove touchmove', moveSlider);
    });
  });

  // Initialize with the first task's images
  updateImages();
  updateImages_imgnet();

  // Slider control with jQuery
  $('input.slider').on('input change', function (event) {
    var element = $(this).parents('div.slide-container');
    var pos = event.target.value;

    element
      .find('div.overlay')
      .css({ 'clip-path': 'inset(0 ' + (100 - pos) + '% 0 0)' });
    element.find('div.slider-handle').css({ left: 'calc(' + pos + '%)' });
  });

  window.selectTask = selectTask;
  window.prevImage = prevImage;
  window.nextImage = nextImage;
  window.selectImage = selectImage;

  window.selectTask_imgnet = selectTask_imgnet;
  window.prevImage_imgnet = prevImage_imgnet;
  window.nextImage_imgnet = nextImage_imgnet;
  window.selectImage_imgnet = selectImage_imgnet;
});

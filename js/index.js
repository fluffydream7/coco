// 슬릭슬라이더 플러그인 연결하기
// css CDN과 js CDN을 html 문서 head 구역에 붙여넣기
// 화살표와 번호버튼은 css에서 스타일 잡기
$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>'
})
$('.palpa i').on('click', function(){
    if ( $(this).hasClass('fa-pause') ) {
        $('.slide-group').slick('slickPause')
        $(this).removeClass('fa-pause')
        .addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $(this).removeClass('fa-play')
        .addClass('fa-pause')
    }


    
})


var $contentsChildren = $('.contents > div')

$('.article5 .tabmenu li').on('click', function(){
    let lino = $(this).index()
    // console.log(lino)
    $(this).addClass('active')
    .siblings().removeClass('active')
    $contentsChildren.eq(lino).addClass('active')
    .siblings().removeClass('active')
})


$('.article4 li > p').each(function(){
    var alltext = $(this).text()
    var tentext = alltext.substr(0, 27)
    if (alltext.length>=27) {
        $(this).text(tentext+'...')
    } else {
        $(this).text(tentext)
    }
})

// var article2Near = $('.article2').offset().top - $(window).height()/2
var article4Near = $('.article4').offset().top - $(window).height()/2

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct > 10) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }

    if (sct >= article4Near) {
        $('.article4').addClass('on')
    } else {
        $('.article4').removeClass('on')
    }

})
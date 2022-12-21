$(document).ready(function(){
    // scrollTo 플러그인 사용
    $('.gnb a').click(function(e){
        e.preventDefault();
        // scrollTo(링크될 # || Y축픽셀값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0,2500);
        console.log(this);
        console.log(this.hash);
    });
    var sa = 100;
    $(window).on('scroll',function(){
        var num = $(this).scrollTop();
        // console.log(num);
        if(num>sa){
            $('aside>div').stop().fadeIn();
        } else {
            $('aside>div').hide();
        }
    })
    // animate 부드러운 스크롤탑 이동

    $('.top').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},3000,'swing');
    })
});
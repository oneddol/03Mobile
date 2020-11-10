(function($){

    $('body').on('click','.logo a', function(){
        var url = this.href
        $('#container > #content').remove()
        $('#container').load(url + " #content")
        return false;
    })

    $('#header').on('click','.openMenu', function(){
        $(this).css({opacity:0})
        $(this).next().css({display:'block'})
        $(this).next().next().css({display:'block'})
        $('#navWrap #lnb').animate({left:'0px'},300)
    })
    $('#header').on('click','.closeMenu', function(){
        $('#navWrap #lnb').animate({left:'-200px'},300, function(){
            $('#navWrap').css({display:'none'})
        })
        $(this).css({display:"none"})
        $(this).prev().prev().css({opacity:1})
        return false;
    })
    // 검색창 띄우기
    $('.search').on('click', function(){
        $(this).css({display:"none"})
        $(this).next().css({display:"block"})
        return false;
    })
    // 검색 버튼
    // var input = form.querySelector('input')
    // $('#wrap').on('click', '.searchBox .sOpen', function(){
    //     var sch = input.value
    //     console.log(sch)
    // })
    // 검색창 닫기버튼
    $('#wrap').on('click', '.searchBox .sClose', function(){
        $(this).parents('.searchBox').css({display:"none"})
        $(this).parents('.searchBox').prev().css({display:"block"})
        return false;
    })
    // 좋아요 버튼
    $('#wrap').on('click', '.mainContent .info .like', function(){
        if($(this).children().hasClass("far fa-heart")){
            $(this).children().removeClass().addClass("fas fa-heart")
            $(this).parents('li').css({background:'rgb(2,118,249)'})
        } else {
            $(this).children().removeClass().addClass("far fa-heart")
            $(this).parents('li').css({background:'#fff'})
        }
        return false;
    })
    // 지도버튼 클릭 이벤트
    $('#wrap').on('click', '.mainContent .mapBox i', function(){
        $(this).parents(".info").toggleClass('on')
        if($(".info").hasClass('on')){
            $(this).parents().siblings().children('.info').removeClass('on')
        }
        return false
    })
    


    // json 연동하기
    var usedata;
    $.ajax({
        type:"GET",
        url:'data/restaurant.json',
        timeout:1000,
        beforeSend:function(xhr){
            if(xhr.overrideMimeType){xhr.overrideMimeType("application/json")}
        },
        success:function(data){
            usedata=data
        },
        error:function(edata){
            alert(edata.status + 'data error')
        }
    })
    var tit;
    // 연동된 데이터 적용하기
    $('#wrap').on('click', '.content li a, .menuBox li a', function(e){
        e.preventDefault()
        var url = this.href;
        var part = $(this).attr('class');
        $('#container > #content').remove()
        $('#container').load(url + ' #content', function(){
            var newContent = ''
            for (var i in usedata[part]){
                newContent += `<li><div class="name">${usedata[part][i].name}</div>`
                newContent += `<div class="info"><p>${usedata[part][i].menu1}</p>`
                newContent += `<p> /</p>${usedata[part][i].menu2}<br><a href="#" class="like"><i class="far fa-heart"></i></a>`
                newContent += `<a href="tel:${usedata[part][i].tel}"><i class="fas fa-phone"></i></a>`
                newContent += `<a href="#" class="mapBox"><i class="fas fa-map-marked-alt"></i><div class="mapInfo"><div class="tri"></div>${usedata[part][i].address}</div></a><a href="#" class="share"><i class="fas fa-share-alt"></i></a></div></li>`
            }
            $('#content .korContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#content .westContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#content .chinaContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#content .buffetContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#content .etcContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#content .japContent').html(`<ul class="mainContent">${newContent}</ul>`)
            $('#navWrap').css({display:'none'})
        })
        if($('.closeMenu').attr({display:"block"})){
            $('.openMenu').css({opacity:1})
            $('.closeMenu').css({display:"none"})
        }
        return false;
    })
    //스크롤 따라 헤더 변경
    $(window).on('scroll',function(){
        var sct = $(this).scrollTop();
        if(sct>=$('#header').height()){
            $('#header').css({
                height:"50px",
                background:'#F0F0F0'
            })
            $('#header .row').css({
                height:"50px"
            })
            $('#header .openMenu').css({
                lineHeight:"50px"
            })
            $('#header .search').css({
                lineHeight:"50px"
            })
            $('#header .logoBox').css({
                display:"none"
            })
            $('#header .logo span').css({
                display:"block"
            })
            $('#content h3').css({
                position:"fixed",
                top:0,
                right:"20%",
                zIndex:99999
            })
        }   else {
            $('#header').css({
                background:'transparent'
            })
            $('#header .row').css({
                height:"150px"
            })
            $('#header .openMenu').css({
                lineHeight:"150px",
                color:"black"
            })
            $('#header .search').css({
                lineHeight:"150px",
                color:"black"
            })
            $('#header .logoBox').css({
                display:"block"
            })
            $('#header .logo span').css({
                display:"none"
            })
            $('#content h3').css({
                position:"static",
                zIndex:""
            })
    }
})
    
})(jQuery)
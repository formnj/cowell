jQuery(document).ready(function($) {

    $('body').click(function(){
        $('.select_form dl').removeClass('active');
        $('.select_form ul').slideUp();
    });

    $('.move_top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });

    /* resize check */
    var init_width = $(window).width(),
    i=0,
    j=0,
    _this,
    change_size,
    slide_tab_navi_pos;
    var resize_chk = setTimeout(function(){
        change_size = $(window).width();
        if(init_width != change_size){
            $('.tab_wrap.type_slide > ul').unbind('touchstart');
            $('.tab_wrap.type_slide > ul').unbind('touchmove');
            $('.tab_wrap.type_slide > ul').unbind('touchend');
        } else {

            $('.tab_wrap.type_slide > ul').each(function(){
                _this = $(this);

                /* slide tab */
                var slide_tab_target = _this;
                var slide_tab_limit = _this.parent().width() - _this.width();

                if(_this.width() > _this.parent().width()){
                    if(slide_tab_target.children('.current').index() == 0){
                        slide_tab_target.css('transform','translate(0, 0)');
                    } else {
                        if(-slide_tab_target.children('.current').offset().left <= slide_tab_limit){
                            slide_tab_target.css('transform','translate('+slide_tab_limit+'px, 0)');
                        }
                    }
                }

                _this.find('> li > a').click(function(){
                    $(this).closest('ul').children().removeClass('current');
                    $(this).parent().addClass('current');

                    if($(this).closest('ul').width() > $(this).closest('.tab_wrap').width()){
                        /* 선택된 탭 중앙 배치 */
                        var ul_pos = slide_tab_target.css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
                        var move_pos = Math.abs((($(this).closest('.tab_wrap').width() * 0.2) - $(this).parent().offset().left));

                        j = i - ul_pos;
                        if($(this).parent().offset().left > ($(this).closest('.tab_wrap').width()*0.2)){
                            //i -= move_pos + j;
                            i -= ((move_pos + j) - (slide_tab_target.parent().width() * 0.1));
                        } else {
                            // i += move_pos - j;
                            i += ((move_pos - j) + (slide_tab_target.parent().width() * 0.1));
                        }

                        slide_tab_target.css('transform','translate('+i+'px, 0)');

                        if(i >= 0){
                            slide_tab_target.css('transform','translate(0, 0)');
                        }
                        if(i <= slide_tab_limit){
                            slide_tab_target.css('transform','translate('+slide_tab_limit+'px, 0)');
                        }
                    } else {
                        slide_tab_target.css('transform','translate(0, 0)');
                    }
                });

                /** touch
                터치 발생 시점 : touchstart, mousedown
                움직임 발생 시점 : touchmove, mousemove
                터치 해제 시점 : touchend, mouseup
                **/
                var tab_slide = _this;
                var x = 0;
                var tabX = 0;
                var xx = 0;
                var limit = tab_slide.width() - tab_slide.parent().width();
                tab_slide.bind('touchstart', function(e) {
                    var event = e.originalEvent;
                    x = event.touches[0].screenX;
                    tabX = tab_slide.css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
                });
                tab_slide.bind('touchmove', function(e) {
                    var event = e.originalEvent;
                    xx = parseInt(tabX) + parseInt(event.touches[0].screenX - x);
                    tab_slide.css("transform", "translate(" + xx + "px, 0px)");
                    event.preventDefault();
                });
                tab_slide.bind('touchend', function(e) {
                    // if ((xx > 0) || (tabX < 0)) {
                    if (xx > 0) {
                        tab_slide.css("transform", "translate(0px, 0px)");
                    }
                    if (Math.abs(xx) > limit) {
                        tab_slide.css("transform", "translate(" + -limit + "px, 0px)");
                    }

                    slide_tab_navi_pos = xx;
                });
            });
        }
    }, 300);
});

/* 비밀페이지 일경우 */
function ajax_exception(_url) {
    $('.content').html("<input type=\"text\" id=\"password\" onKeyDown=\"if(event.keyCode == 13){ ajax_load('"+_url+"'); } else {console.log();}\" /><a href=\"javascript:void(0);\" onclick=\"ajax_load('"+_url+"');\" class=\"btn_min btn_confirm\">확인</a>");

    setTimeout(function(){
        $('#password').focus();
    },200);
}

/* input focus */
function placeholder(_target){
    _target = $(_target);
    _target.find('i').click(function(){
        $(this).hide();
        $(this).siblings('input').focus();
    });
    _target.find('input').focus(function(){
        $(this).siblings('i').hide();
    });
    _target.find('input').blur(function(){
        if($(this).val().length < 1){
            $(this).siblings('i').show();
        }
    });
}

function el_crop(_target) {
    var _target = $(_target);
    var wrap_ratio = _target.closest(".thumb")[0].offsetHeight / _target.closest(".thumb")[0].offsetWidth;
    var wrap_ratio_2 = _target.closest(".thumb")[0].offsetWidth / _target.closest(".thumb")[0].offsetHeight;
    var el_ratio,
        el_ratio_2;
    if(_target[0].nodeName == 'VIDEO'){
        el_ratio = _target[0].videoHeight / _target[0].videoWidth;
        el_ratio_2 = _target[0].videoWidth / _target[0].videoHeight;
    } else {
        el_ratio = _target[0].naturalHeight / _target[0].naturalWidth;
        el_ratio_2 = _target[0].naturalWidth / _target[0].naturalHeight;
    }

    if (el_ratio <= wrap_ratio) {
        var imgWidthActual = _target.closest(".thumb")[0].offsetHeight / el_ratio;
        var imgWidthTobe = _target.closest(".thumb")[0].offsetHeight / wrap_ratio;
        var marginLeft = -Math.round((imgWidthActual - imgWidthTobe) / 2);
        _target.css({ width: "auto", height: "100%" });
    } else {
        var imgHeightActual = _target.closest(".thumb")[0].offsetWidth / el_ratio_2;
        var imgHeightTobe = _target.closest(".thumb")[0].offsetWidth / wrap_ratio_2;
        var marginTop = -Math.round((imgHeightActual - imgHeightTobe) / 2);
        _target.css({ width: "100%", height: "auto" });
    }
}

function input_makeBtn(_target){
    _target = $(_target);
    _target.wrap('<div class="label_wrap" />');
    if(!_target.parent().hasClass('date_form')){
        // _target.wrap('<div class="label_wrap" />');
        _target = _target.closest('.label_wrap');
    }
    _target.find('input').attr('onkeyup','input_btn_chk(this);');
    _type_chk = _target.find('input').attr('type');
    
    if(_target.find('button[class*="icon_"]').length < 1){
        switch (_type_chk) {
            case 'text':
                _target.prepend('<button class="icon_del" type="button" onclick="input_btn_fn(this);">delete</button>');
                if(_target.find('div').length > 0){
                    _target.find('.icon_del').css('right', _target.find('[class*="btn_"]').outerWidth() + 28);
                }
                break;
            case 'number':
                _target.prepend('<button class="icon_del" type="button" onclick="input_btn_fn(this);">delete</button>');
                if(_target.find('div').length > 0){
                    _target.find('.icon_del').css('right', _target.find('[class*="btn_"]').outerWidth() + 28);
                }
                break;
            case 'password':
                _target.prepend('<button onclick="input_btn_fn(this);" type="button" class="icon_pss">text</button>');
                // _target.prepend('<button onclick="input_btn_fn(this);">delete</button>');//비밀번호 영역 텍스트 전체 삭제버튼 필요 시 활성화
                break;
            default:
                break;
        }
    }
}

function input_btn_chk(_target){
    var _target = $(_target);
    if(!_target.closest('label').parent().hasClass('date_form')){
        _target = $(_target).closest('.label_wrap');
    } else {
        _target = $(_target).closest('.input');
    }

    if (_target.find('input').length > 0) {
        if(_target.find('input').val().length > 0){
            _target.find('[class*="icon_"]').show();
        } else {
            _target.find('[class*="icon_"]').hide();
        }        
    }
}

function input_btn_fn(_target){
    _target = $(_target),
    btn_chk = _target.attr('class');
    var _target = $(_target);
    if(!_target.closest('label').parent().hasClass('date_form')){
        _target = $(_target).closest('.label_wrap');
    } else {
        _target = $(_target).closest('.input');
    }
    switch (btn_chk) {
        case 'icon_del':
            _target.find('input').val('');
            _target.find('i').show();
            _target.find('[class*="icon_"]').hide();
            break;
        case 'icon_pss':
            _target.find('input').attr('type','text');
            _target.find('.icon_pss').attr('class','icon_txt');
            break;
        case 'icon_txt':
            _target.find('input').attr('type','password');
            _target.find('.icon_txt').attr('class','icon_pss');
            break;
        default:
            break;
    }
}

var sticky_gallery = {
    deployment:function(e, count, hori_mg, verti_mg){
        var li = document.querySelectorAll(e);
        var imgStack = new Array();
        
        var count;
        var hori_mg;
        var verti_mg;
        var eleWidth = $(e).width(($(e).parent().width() / Number(count)) - Number(hori_mg) + (Number(hori_mg) / Number(count)));
        setTimeout(function(){
            var colWidth = $(e).width() + Number(hori_mg);

            for(var i = 0; i < Number(count); i++){
                imgStack[i] = 0;
            }

            for(var i = 0; i < li.length; i++){

                var minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));

                var x = colWidth * minIndex;
                var y = imgStack[minIndex];
                imgStack[minIndex] += (li[i].offsetHeight + Number(verti_mg));
                li[i].style.transform = "translateX("+x+"px) translateY("+y+"px)";
                if(i === li.length - 1){
                    $(e).parent().css({
                        height : (Math.max.apply(0, imgStack) - verti_mg)+"px"
                    });
                }
            }
        },500);
    }
};

/* slide delete */
function swip_delete(_target){
    var del_pos = _target.width()*0.7;
    var sY=0
        eY=0,
        sX=0,
        eX=0,
        lY=0,
        lX=0;
    $(_target).on("touchstart", function (e) {
        sY = e.originalEvent.touches[0].clientY;
        sX = e.originalEvent.touches[0].clientX;
        // $('.draggable li').draggable( "disable" );
    })

    $(_target).on("touchmove", function (e) {
        eY = e.originalEvent.changedTouches[0].clientY,
        eX = e.originalEvent.changedTouches[0].clientX;

        lY = Math.abs(sY - eY);
        lX = Math.abs(sX - eX);
        if(lY < lX){
            if((eX-sX) > 0){
                $(this).css({
                    transform:'translateX('+(eX-sX)+'px)'
                });
                if((eX-sX) > del_pos){
                    $(this).animate({
                        height:0,
                        paddingTop:0,
                        opacity:0
                    },{
                        complete: function(){
                            _target.parent().find('.delete').remove(); // remove
                        }
                    },250);
                } else {
                    $('this').stop().animate({
                        opacity:1
                    },100);
                }
            }
        }
    })

    $(_target).on("touchend", function (e) {
        if((eX-sX) < del_pos){
            $(this).css({
                transform:'translateX(0)'
            });
        }
    })
}
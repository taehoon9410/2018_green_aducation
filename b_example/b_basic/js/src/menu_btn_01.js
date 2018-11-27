// menu_btn_01.js

// {// {
//   // 함수 표현식 (익명함수(이름이없는 함수)를 변수에 대입처리)

//   var Fn = function(e){return e+5;};
//   var a = Fn(10)//console.log(a)

//   function Fn2(e){return e*2;}
//   var b = Fn2(5); //console.Log(b);
//   //테스트
//   var tt = ("sana" + "momo")+ 'jiyoun';
//   console.log(tt);

//   //즉시실행합수(IIFE)

//   (function(e){return e * 2 +3; })(3);


//   (function(e){
//   var j = e *2 +3;
//   console.log(j);
//   return j;
//   })(3);

//   //}}


//jQuery 선택자
 /*step1:
   -css 의 선택자형태와 똑같다.
   - 단, css형태 그대로 표현할 수 없기에, $()를 감싸야한다.
   -문자일 경우에는  ()안에 ''로 감싸주어야 한다*/
   


/*step2 
     -형태인지, 자식인지, 부모인지, 자손인지를 파악하여 , 메소드 형태로  나눠서 처리 
    -순서를 나타날때에는 내부에서 처리하는 방법과 , 외부에서 순서값을 작성하는 방법*/

// var go = function(a){return a+2; };
// var myObj = { cofee:'americano', 
//                  come: Go
//                };
( function($){

var btn = $('.menu_btn_01');
btn.css({padding:'1rem',borderTop:'1rem solid #fa0'});


var dt = btn.children('dt');
dt.css({backgroundColor:'#faa', color:'#177', fontStyle:'italic'});
var dtChild=dt.children('button');

dtChild.on('mouseenter',function(){$(this).css({backgroundColor: '#555' , color:'#fff' 
});

dtChild.on('mouseleave',function(){$(this).removeAttr('style');
})
})



//---------------

var show = $('.show');
var hide = $('.hide');
var btnDb= btn.find('dd');

// sho를 클릭시 dd를 나타나게 만들기

show.on('click',function(e){
  e.preventDefault();
  btnDb.slideDown();
});


// hide를 클릭시 dd를 나타나게 만들기
 
hide.on('click', function(evt){
  btnDb.slideUp();
});
// /---------------

var dual =$('.dual');
dual.on('click',function(e) {
    e.preventDefault();

    var status = btnDb.css('display');
    console.log(status);
   if(status !=='none'){
    btnDb.slideUp(500);
   }else{
    btnDb.slideDown(500);
   }

    // btnDb.slideUp(2000);
    // btnDb.slideToggle(500); 
    // 이거하나만 써줘도 되지만 에러가 많이남
})



})(jQuery);


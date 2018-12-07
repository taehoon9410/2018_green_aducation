(function($) {
  // console.log('start!!');
  /*====================
01. text()       : 작성한 내용을 확인/작성 하는 메소드
02. html()       : html태그를 확인/제작 하는 메소드
03. wrap()       : 선택한 요소의 부모요소를 확인/제작 하는 메소드
04. before()     : 선택요소의 이전에 요소를 제작하는 메소드
05. after()      : 선택요소의 이후에 요소를 제작하는 메소드
06. prepend()    : 선택요소의 자식의 앞에 요소를 제작/삽입하는 메소드
06-1. prependTO()
07. append()     : 선택요소의 이후(형제)에 요소를 제작/삽입하는 메소드
08. clone()      : 내용/태그 ...복제하는 메소드
09. remove()     : 선택요소의 내부를 비우는 메소드
10. empty()      : 선택요소의 속성을 비우는 메소드
11. removeAttr() : 선택요소의 속성을 삭제하는 메소드 
12. attr()       : 선택요소의 속성을 파악/수정/삽입 하는 메소드
13. val()        : form요소의 값을 파악/삽입 하는 메소드
  =======================*/
var h1 = $('h1');
 var h1T = h1.text();
 console.log(h1T);



 //console.log(h1Wrap);


vieBox.before('<div class= "view view-before"></div>');
viewBox.after('div class="view view-after"></div>');
$('.view').css({width:'100%',height:'1rem',backgroundColor:'#f0a'});


})(jQuery)
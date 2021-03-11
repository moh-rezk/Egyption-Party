
 let divWidth= $('.list').outerWidth(true);
$('.item').click(function(){


 $('.list').animate({left:'0px'},1000)
 $('.item').animate({left:`${divWidth}`},1000)
 
    
})

$('.closebtn').click(function(){
    $('.list').animate({left:`-${divWidth}`},1000);
    $('.item').animate({left:'0px'},1000)
})

$('.singer').click(function(){
    let next=$(this).next();
         
     if(next.css('display')=='none'){
     next.slideDown(1000);
     }else{
        next.slideUp(1000);
     }
         
        
    // console.log($(this).next().css('display'))
})

$("a[href^='#']").click(function(event){

    let aHref=$(this).attr("href");
    let scrollOffSet=$(aHref).offset().top;
    $("html,body").animate({scrollTop:scrollOffSet},2000);

});

$('textarea').keyup(function(){


    let max =100;
    let len=$('textarea').val().length
    if(max>=len){

        let remaining=max-len;
        $('#char').text(remaining);
    }else{
      
        $('#char').text('your available character finished');

    }


});




setInterval(function(){
    let eventime = new Date(2033,12,17);
let now=new Date();

let curentDate=now.getTime();
let eventDate=eventime.getTime();
let timer=eventDate-curentDate;
let s = Math.floor(timer / 1000);
let m = Math.floor(s / 60);
let h = Math.floor(m / 60);
let d = Math.floor(h / 24);
h %= 24;
m %= 60;
s %= 60;

$('#second').text(`${s}s`);
$('#min').text(`${m}min`);
$('#hour').text(`${h}hours`)
$('#day').text(`${d}days`)
},1000)



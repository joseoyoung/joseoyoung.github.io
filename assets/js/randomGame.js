
for(var i=0; i<9; i++){
    var r = Math.floor(Math.random() * 5) + 2;
    $(".grid-container").append("<div class='grid-item'"+"name='grid_"+i+ "'>"+"<img src='/assets/images/randomGame/random0"+(r)+ ".png'>"+" </div>");
}

var a1 = [1,2,3,4,5,6,7,8,9];
var a2 = [];
while(a2.length < 9){
    var rr = Math.floor(Math.random() * (a1.length-1));
    a2.push(a1[rr]);
    var idx = a1.indexOf(a1[rr]); // findIndex = find + indexOf 
    a1.splice(idx, 1);
}

var a3 = [0,1,2,3,4,5,6,7,8];
var flag, testInterval;
var d;

$('.fun-btn').on('click', function(event) {
    $(this).toggleClass('start-fun');
    var $page = $('.page');
    $page.toggleClass('color-bg-start')
        .toggleClass('bg-animate-color');

    $(this).hasClass('start-fun') ? $(this).text('S T O P') : $(this).text('S T A R T');

    flag = $(this).hasClass('start-fun');

    if(a2.length == 0){
        $('.fun-btn').text("E N D");
        $('.fun-btn').attr('disabled', true);   
    }
    
    if(flag == true){
        if(a2.length > 0){
            testInterval = setInterval(function() {
                var rr = Math.floor(Math.random() * (a3.length)); //0-8
                $(".grid-item").removeClass("focus-item");
                $("[name='grid_"+(a3[rr])+"']").addClass("focus-item");
                d = rr;
            },50);
        }
    }
    else{
        console.log("end");
        clearInterval(testInterval);
        // console.log( d );
        // console.log(" A2: "+a2[d]);
        // console.log(" A3: "+a3[d]);
        $("[name='grid_"+(a3[d])+"'] > img").attr("src", "/assets/images/randomGame/random"+(((a2[d]+6) < 10) ? "0"+(a2[d]+6) : (a2[d]+6))+".png");
        a3.splice(d,1);
        a2.splice(d,1);
    }
});

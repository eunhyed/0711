$(document).ready(function(){
    //상단 햄버거 클릭

    $("header button").click(function(){
        $("nav").stop().slideToggle("slow" , function(){
            if( $("nav").css("display")=="block"){
                $("header button").text("X");
            }

            if( $("nav").css("display")=="none"){
                $("header button").html("&#x2630;");
            }
        });
    });

    //내비게이션 각 항목 클릭시

    $("nav a").click(function(){
        $("nav").stop().slideUp();
        $("header button").html("&#x2630;");
    });

});////////전체 끝
$(document).ready(function(){
    window.addEventListener('keydown', function (e) {
        key = e.keyCode;
        if(key==37){
            e.preventDefault();
            moveLeft();
        }
        if(key==38){
            e.preventDefault();
            moveUp();
        }
        if(key==39){
            e.preventDefault();
            moveRight();
        }
        if(key==40){
            e.preventDefault();
            moveDown();
        }
        if(key==83){
            e.preventDefault();
            start();
        }
        

    });
    window.addEventListener('keyup', function(e){
        key = e.keyCode;
        if(key==37){
            e.preventDefault();
            if(checkWin()=== true){
                alert("YOU HAVE WON!");
            };
        }
        if(key==38){
            e.preventDefault();
            if(checkWin()=== true){
                alert("YOU HAVE WON!");
            };
        }
        if(key==39){
            e.preventDefault();
            if(checkWin()=== true){
                alert("YOU HAVE WON!");
            };
        }
        if(key==40){
            e.preventDefault();
            if(checkWin()=== true){
                alert("YOU HAVE WON!");
            };
        }
        if(key==83){
            e.preventDefault();
            if(checkWin()=== true){
                alert("YOU HAVE WON!");
            };
        }
        
    });
    function moveLeft()
    {   
        var tile = checkEmpty();
        if(tile !== 3 && tile !== 6 && tile !== 9){
            var toMoveTile = eval(eval(tile) + eval(1));     
            var movedTxt = $("#"+toMoveTile).html();
            $("#"+tile).html(movedTxt);
            $("#"+toMoveTile).html('<img alt="" id="nine" src="null"></img>');
            noMoves++;
            $("#moves").text(noMoves);
        }
    }
    function moveRight()
    {   
        var tile = checkEmpty();
        if(tile !== 1 && tile !== 4 && tile !== 7){
            var toMoveTile = eval(eval(tile) - eval(1));         
            var movedTxt = $("#"+toMoveTile).html();
            $("#"+tile).html(movedTxt);
            $("#"+toMoveTile).html('<img alt="" id="nine" src="null"></img>');
            noMoves++;
            $("#moves").text(noMoves);
        }
    }
    function moveUp()
    {   
        var tile = checkEmpty();
        if(tile !== 7 && tile !== 8 && tile !== 9){
            var toMoveTile = eval(eval(tile) + eval(3)) ;        
            var movedTxt = $("#"+toMoveTile).html();
            $("#"+tile).html(movedTxt);
            $("#"+toMoveTile).html('<img alt="" id="nine" src="null"></img>');
            noMoves++;
            $("#moves").text(noMoves);
        }
    }
    function moveDown()
    {   
        var tile = checkEmpty();
        if(tile !== 1 && tile !== 2 && tile !== 3){
            var toMoveTile = eval(eval(tile) - eval(3));      
            var movedTxt = $("#"+toMoveTile).html();
            $("#"+tile).html(movedTxt);
            $("#"+toMoveTile).html('<img alt="" id="nine" src="null"></img>');
            noMoves++;
            $("#moves").text(noMoves);
        }
    }


    function checkEmpty(){
        
        for(var i = 1; i<10; i++){
            if($("#"+i).html() == '<img alt="" id="nine" src="null">')
            {
                return i;
            }
        }
    }
    function checkWin()
    {
        var num = ["one","two","three","four","five","six","seven","eight"]
        for(var i = 1; i < 9; i++)
        {
            console.log(i);
            if ($("#"+i+" img").attr("id") !== num[i-1])
                return false;
        }
        
        return true;
    }
});

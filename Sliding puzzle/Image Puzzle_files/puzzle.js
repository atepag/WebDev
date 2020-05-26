

$(document).ready(function(){
    $('#loading-image').fadeOut();  
    $("#start").click(function(){
        generateBoard();
        drawBoard();
        noMoves = 0;
        $("#moves").text(noMoves);
        $("#start").text("RESTART");
    });
    $(".tiles").click(function(){
        var txt = $(this).html() + "</img>";
        console.log(txt);
        var bVal = $(this).attr("id");
        console.log(bVal);  
        if(txt != '<img alt="" id="nine" src="null"></img>'){
            if((bVal != 1) && (bVal != 2) &&(bVal != 3)){
                var upval = eval(eval(bVal)-eval(3));           
                var upTxt = $("#"+upval).html() + "</img>";  
                console.log(upTxt);         
                if(upTxt == '<img alt="" id="nine" src="null"></img>'){            
                    $("#"+upval).html(txt);
                    $(this).html('<img alt="" id="nine" src="null"></img>');
                    noMoves++;
                    $("#moves").text(noMoves);
                }
            }
            if((bVal != 7) && (bVal != 8) &&(bVal != 9)){
                var downval = eval(eval(bVal)+ eval(3));            
                var downTxt = $("#"+downval).html() + "</img>";
                if(downTxt == '<img alt="" id="nine" src="null"></img>'){          
                    $("#"+downval).html(txt);
                    $(this).html('<img alt="" id="nine" src="null"></img>');
                    noMoves++;
                    $("#moves").text(noMoves);
                }
            }
            if((bVal != 1) && (bVal != 4) &&(bVal != 7)){
                var leftval = eval(eval(bVal)-eval(1));         
                var leftTxt = $("#"+leftval).html() + "</img>";
                if(leftTxt == '<img alt="" id="nine" src="null"></img>'){          
                    $("#"+leftval).html(txt);
                    $(this).html('<img alt="" id="nine" src="null"></img>');
                    noMoves++;
                    $("#moves").text(noMoves);
                }
            }
            if((bVal != 3) && (bVal != 6) &&(bVal != 9)){
                var rightval = eval(eval(bVal)+ eval(1));           
                var rightTxt = $("#"+rightval).html() + "</img>";          
                if(rightTxt == '<img alt="" id="nine" src="null"></img>'){                 
                    $("#"+rightval).html(txt);
                    $(this).html('<img alt="" id="nine" src="null"></img>');
                    noMoves++;
                    $("#moves").text(noMoves);
                }
            }
        }
        if(checkWin()=== true){
            alert("YOU HAVE WON!");
        };
    });
    $("#preview").mouseover(function(){
        peek();
    })
    $("#preview").mouseout(function(){

        unpeek();
        
    })
    $("#shuffle").click(function(){
            
        $.ajax({
            beforeSend: function(){
                $('#loading-image').css("visibility","visible");
                $('#loading-image').fadeIn("slower");
            },
            complete: function(){
                $('#loading-image').fadeIn("slower");
            },
            success: function(){
                $('#loading-image').fadeOut("slower");
            },
            
        })
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            $(".secondary-container").load(location.href + " .secondary-container >*");
            reload_js('puzzle.js');
            }
        };
        xhttp.open("GET", "https://picsum.photos/600/600", true);
        origin: "https://picsum.photos/600/600";
        xhttp.send(); 
        

    })
    function reload_js(src) {
        src = $('script[src$="' + src + '"]').attr("src");
        $('script[src$="' + src + '"]').remove();
        $('<script/>').attr('src', src).appendTo('head');
    }
    
    var noCols = 3;
    var noRows = 3;
    
    var board = [];
    window.noMoves = 0;
    
    function generateBoard()
    {
        board = [];
        
        var n = noRows * noCols;
        for(var i = 0; i < n; i++)
        {
            board.push(i);
        }
        shuffleArray(board);
        console.log(board.toString());
    }
    
    
    function drawBoard()
    {
        var id = 0;
        for(var row = 0; row < noRows; row++)
        {
            for(var col = 0; col < noCols; col++)
            {   
                id++;
                var value = getTileValue(row, col);
                switch(value){
                    case 1:
                        $("#"+id).html('<img alt="" class="overlay" id="one" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 2:
                        $("#"+id).html('<img alt="" class="overlay" id="two" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 3:
                        $("#"+id).html('<img alt="" class="overlay" id="three" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 4:
                        $("#"+id).html('<img alt="" class="overlay" id="four" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 5:
                        $("#"+id).html('<img alt="" class="overlay" id="five" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 6:
                        $("#"+id).html('<img alt="" class="overlay" id="six" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 7:
                        $("#"+id).html('<img alt="" class="overlay" id="seven" src="https://picsum.photos/600/600"></img>');
                        break;
                    case 8:
                        $("#"+id).html('<img alt="" class="overlay" id="eight" src="https://picsum.photos/600/600"></img>');
                        break;
                    default:
                        $("#"+id).html('<img alt="" id="nine" src="null"></img>');
                        break;
                }
                
            }
        }
    }
    
    
    function getTileValue(row, col)
    {
        var index = row * noCols + col;
        return board[index];
    }
    
    
    function checkWin()
    {
        var num = ["one","two","three","four","five","six","seven","eight"]
        for(var i = 1; i < board.length; i++)
        {
            console.log(i);
            if ($("#"+i+" img").attr("id") !== num[i-1])
                return false;
        }
        
        return true;
    }
    
    function shuffleArray(ar)
    {
        var n = ar.length;
        for(var i = 0; i < n; i++)
        {
            var random = randomPositions(0, n - 1);
            var temp = ar[i];
            ar[i] = ar[random];
            ar[random] = temp;        
        }
    }
    
    function randomPositions(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 


    function peek(){
        $(".tiles").fadeOut();
    }  
    function unpeek(){
        $(".tiles").fadeTo("slow",1.0);
    } 
});
    

var total = "";

//////////////////////////
// Post Expression
/////////////////////////
function postExpression(expression) {
    $.ajax({
        type: "POST",
        url: "/server",
        datatype: "application/json",
        data: expression,
        success: function(response) {
            console.log("Got you the post done good ", response);
            getData();
        },
        error: function() {
            console.log("No POST for you!");
        },
        complete: function() {
            console.log("POST function done");
        }
    });
}

////////////////////////////
// Get Data
////////////////////////////
function getData() {
    $.ajax({
        type: "GET",
        url: "/server",
        success: function(response) {
            console.log("Got you the GET");
            displayData(response);
        },
        error: function() {
            console.log("No GET for you!");
        },
        complete: function() {
            console.log("GET function done");
        }
    });
}

///////////////////////////
// Display Data
//////////////////////////
function displayData(data) {
    console.log("Display DATA function");

    $(".displayData").empty();
    var allDisplay = "";
    for (var j = 0; j < data.length; j++){
        allDisplay += data[j].expression +
                      "<button class='expression btn-primary' data-id=" + data[j]._id + ">Evaluate</button>" +
                      "<button class='removeBtn btn-danger' data-id=" + data[j]._id + ">Remove</button>";
    }
    $(".displayData").append("<ul>" + allDisplay + "</ul>");
}


function buttonCreator() {
    var controlBtns = "<button class='num btn-lg' value='+'>+</button>" +
        "<button class='num btn-lg' value='-'>-</button>" +
        "<button class='num btn-lg' value='*'>*</button>" +
        "<button class='num btn-lg' value='/'>/</button>";
    $(".calcButtons").append("<div class='row'>" + controlBtns +"</div>");

    var count = 1;
    var buttons = "";
    for (var j = 1; j < 10; j++) {
        buttons += "<button class='num btn-lg' value=" + j + ">" + j + "</button>";
        if (count > 2) {
            if (j < 4){
                buttons += "<button class='num btn-lg' value='='>=</button>";
            } else if (j < 7 && j > 3) {
                buttons += "<button class='num btn-lg' value='c'>C</button>";
            } else if (j < 10 && j > 6) {
                buttons += "<button class='num btn-lg' value='0'>0</button>";
            }

            $(".calcButtons").append("<div class='row'>" + buttons + "</div>");
            buttons = "";
            count = 0;
        }
        count++;
    }
}

$(document).ready(function(){
    buttonCreator();
    getData();

    $(".num").on('click', function(){
        var val = $(this).val();
        var value = val.toString();

        if (value == "=") {
            console.log("Equals happens textVal: ", total);
            postExpression(total);
            total = eval(total);
            console.log(total);
            $(".calcTextbox").text(total);
            total = "";
        } else if (value =="c") {
            $(".calcTextbox").empty();
            total = "";
        } else {
            console.log(value);
            $(".calcTextbox").append(value);
            total += value;
        }
    });

});
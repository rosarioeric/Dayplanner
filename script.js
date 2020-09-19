// moment().format('MMMM Do YYYY, h:mm:ss a'); // September 16th 2020, 6:00:18 pm
// moment().format('dddd');                    // Wednesday
// moment().format("MMM Do YY");               // Sep 16th 20
// moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
// moment(h).format();                          // 2020-09-16T18:00:18-07:00

$("#currentDay").append(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment().format("h");
console.log(currentTime);
var block9 = $("#textarea9")
var block10 = $("#textarea10")
var block11 = $("#textarea11")
var block12 = $("#textarea12")
var block1 = $("#textarea1")
var block2 = $("#textarea2")
var block3 = $("#textarea3")
var block4 = $("#textarea4")
var block5 = $("#textarea5")

var timeBlocks = [block9, block10, block11, block12, block1, block2, block3, block4, block5];
console.log(timeBlocks);

for (var i = 0; i < timeBlocks.length; i++) {
    if (timeBlocks[i].attr("data-time") === currentTime) {
        timeBlocks[i].addClass("present");
    } else if (timeBlocks[i].attr("data-time") < currentTime) {
        timeBlocks[i].addClass("past");
    } else if (timeBlocks[i].attr("data-time") > currentTime)
        timeBlocks[i].addClass("future");
}

var saveButton = document.getElementById("saveButton");

function storeFunction () {
    localStorage.setItem(timeBlocks, "");
}
document.getElementById(saveButton)("click", storeFunction());
// =========Invokes localStorage
// add click event on to the save button

// localStorage.setItem("data-time", val);

// document.body.querySelector("userSave").addEventListener("click", function (){
//     var userText = $("col-md-8").val();
//     localStorage.setItem(userText);
// }

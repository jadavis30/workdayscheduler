//displaying time below time, formatted for aesthetics
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('dddd--MMMM Mo, h:mm A');

//local storage variables
var hourKey = document.getElementsByClassName("hour");
var taskData = document.getElementsByClassName("textarea");
var btnSave = document.getElementsByClassName("save-text");

btnSave.onclick = function() {
    var hour = hourKey.text;
    var task = taskData.text;
    //save to localstorage if text present
    if (hour & task) {
        localStorage.setItem(hour, task);
    }
};


//save to localstorage
function mySave() {
    var myTask = document.getElementsByClassName("textarea").value;
    localStorage.setItem("textarea", myTask);
};

//input text when user clicks in blank space
$(".hour").on("click", "textarea", function() {
    
    var text = $(this)
    .text()
    .trim();
    //var textInput = $("textarea")
    //.addClass("form-control")
    //.val(text);

    //$(this).replaceWith(textInput);
    //textInput.trigger("focus");
    mySave();
 });
$(".hour").on("click", ".save-text", function() {
    //snagging the current text
    var text = $(this)
    .text()
    .trim();
    //getting parent attr
    var status = $(this)
    .closest(".hour")
    .attr("id")
    .replace(".hour", "");

    //setting position
    var index = $(this)
        .closest(".hour")
        .index();

    tasks[status][index].text = text; 
});

//save changes through btn
mySave();

//set span color
var checkTime = function() {
    var currentTime = moment().format('H');
    var timeBlockElements = $(".textarea");
    
    //loop through the classes
    for (var i =  0; i <timeBlockElements.length; i++) {
        //return i as a string
        var elementId = timeBlockElements[i].id;
        var manipId = document.getElementById(timeBlockElements[i].id)
        $(timeBlockElements[i].id).removeClass(".past .present .future");

        //new class based on time
        if(elementId < currentTime) {
            $(manipId).addClass(".past");
        } else if (elementId > currentTime) {
            $(manipId).addClass(".future");
        } else {
            $(manipId).addClass(".present");
        }
    }
}

//checking time if user stays on page
setInterval(checkTime(), (1000 * 60) * 1);


//when user clicks save button, save <span>



//get data from localStorage on refresh

//Bonus: have data wipe on a new day

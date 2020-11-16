//displaying time below time, formatted for aesthetics
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('dddd--MMMM Mo, h:m A');

//load data from localStorage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

//load previous tasks if present
function renderHourlyTasks(tasks) {
    
}

// if nothing is in localstorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
            "08": [],
            "09": [],
            "10": [],
            "11": [],
            "12": [],
            "01": [],
            "02":[],
            "03": [],
            "04": [],
            "05": []
        };
    }
}

//save to localstorage


//input text when user clicks in blank space
$(".hour").on("click", "span", function() {
    console.log (this);
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");

    console.log(text);
    console.log(this);

});
$(".hour").on("click", "btn", function() {
    //snagging the current text
    var text = $(this)
    .val()
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
    saveTasks();

    
    
});
$(".hour").append("<span>No outstanding tasks</span>");





//save changes through btn


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

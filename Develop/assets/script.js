$(document).ready(function() {
 
    //Show current day and time
    var nowMoment = moment().add(1, "day");
    var hour = nowMoment.hour();
    var currentDay = nowMoment.dayOfYear();
    var eDisplayMoment = document.getElementById('currentDay');
    eDisplayMoment.innerHTML = nowMoment.format('dddd--MMMM Mo, h:mm A');
    
    //get localstorage and span color 
    $(".time-block").each(function(){
        var textArea = $(this).find(".textarea");
        var key = textArea.data("key");
        var timeArrayString = localStorage.getItem(textArea.data("key"));
        var timeArray = [];
        if (timeArrayString) {
            timeArray = JSON.parse(timeArrayString);
        }
        var currentTimeObject = timeArray.find((timeObject)=> {return timeObject["day"] === currentDay});
        if (currentTimeObject) {
            textArea.val(currentTimeObject.text);
        }
        
        var blockHour = parseInt(key);
        if (blockHour < hour) {
            textArea.addClass("past");
        }
        else if (blockHour === hour) {
            textArea.addClass("present");
        }
        else {
            textArea.addClass("future");
        }
        
    });
    
    //
    var btnSave = $(".saveBtn");
   
    
    btnSave.click(function() {
        var textArea = $(this).siblings(".textarea");
        var timeArrayString = localStorage.getItem(textArea.data("key"));
        var timeArray = [];
        var timeObject = null;
        if (timeArrayString) {
            timeArray = JSON.parse(timeArrayString);
            timeObject = timeArray.find((x)=> {return x["day"] === currentDay});
        }
        if (timeObject) {
            
        }

        var timeObject = {
            text: textArea.val(),
            day: currentDay
        };
        timeArray.push(timeObject);

        localStorage.setItem(textArea.data("key"), JSON.stringify(timeArray));
       
    });

    
    //Bonus: have data wipe on a new day
    
})


$(document).ready(function() {
 
    //Show current day and time
    var nowMoment = moment();
    var eDisplayMoment = document.getElementById('currentDay');
    eDisplayMoment.innerHTML = nowMoment.format("LLLL");
    var hour = nowMoment.hour();
    var currentDay = nowMoment.dayOfYear();
    
    
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
        var timeObjectIndex = -1;
        if (timeArrayString) {
            timeArray = JSON.parse(timeArrayString);
            timeObjectIndex = timeArray.findIndex(x=> x.day === currentDay); 
        }
        
        if (timeObjectIndex !== -1) {
            var timeObject = timeArray[timeObjectIndex];
            timeObject.text = textArea.val();
        }
        else {
            var timeObject = {
                text: textArea.val(),
                day: currentDay
            };
            timeArray.push(timeObject);
        }    

        localStorage.setItem(textArea.data("key"), JSON.stringify(timeArray));
       
    });

    
    //Bonus: have data wipe on a new day
    
})


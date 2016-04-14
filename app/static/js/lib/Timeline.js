// Timeline Class

function Timeline() {

    // Array of different arrays of events
    this.eventsGroupArray = [];

    // Array of exploded 
    this.timelineArray = [];

    this.firstEventInt = 0; 

    this.currentEventInt = this.firstEventInt;

    this.addEventsGroup = function(EventsObject) {
        this.eventsGroupArray.push(EventsObject);
        return EventsObject; 
    }

    this.numOfEvents = function() {
        return this.timelineArray.length; 
    }

    this.firstEvent = function() {
        this.currentEventInt = this.firstEventInt;
        return this.timelineArray[this.currentEventInt]; 
    }

    this.lastEvent = function() {
        this.currentEventInt = this.timelineArray.length-1;
        return this.timelineArray[this.currentEventInt]; 
    }

    this.currentEvent = function() {
        return this.timelineArray[this.currentEventInt]; 
    }

    this.nextEvent = function() {
        this.currentEventInt++;
        if (this.currentEventInt >= this.numOfEvents())
            this.currentEventInt = this.firstEventInt; 
        return this.timelineArray[this.currentEventInt]; 
    }

    this.prevEvent = function() {
        this.currentEventInt--;
        if (this.currentEventInt <= 0)
            this.currentEventInt = this.firstEventInt; 
        return this.timelineArray[this.currentEventInt]; 
    }   

    this.copyOfArray = function() {
        // return this.eventsGroupArray;
    }

    this.sortIntoTimeline = function(EventsObject) {
        
    }

}
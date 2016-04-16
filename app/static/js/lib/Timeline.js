// Timeline Class

function Timeline() {

    // Array of different arrays of events
    this.eventsGroupArray = [];

    this.addEventsGroup = function(EventsObject) {
        this.eventsGroupArray.push(EventsObject);
        return EventsObject; 
    }

    this.sortIntoTimeline = function(EventsObject) {
        
    }

}

Timeline.prototype = new EventArray();
Timeline.prototype.constructor = Timeline; 
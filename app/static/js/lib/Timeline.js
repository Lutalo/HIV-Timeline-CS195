// Timeline Class

function Timeline() {

    EventArray.call(this); 
    // Array of different arrays of events
    this.eventsGroupArray = [];

    this.addEventsGroup = function(EventsObject) {
        this.eventsGroupArray.push(EventsObject);
        return EventsObject; 
    }

    this.sortIntoTimeline = function(EventsObject) {
        
    }

}

Timeline.prototype = Object.create(EventArray.prototype);
Timeline.prototype.constructor = Timeline; 
// Timeline Class

function Timeline() {

    EventArray.call(this); 
    // Array of different arrays of events
    this.eventsGroupArray = [];

    this.addEventsGroup = function(EventsObject) {
        this.eventsGroupArray.push(EventsObject);
        this.addAllFromGroup(EventsObject); 
        return EventsObject; 
    }

    this.addAllFromGroup = function(EventsObject) {
    	for (var i = 0; i < EventsObject.numOfEvents(); i++) {
    		event = EventsObject.nextEvent(); 
    		this.addEvent(event.getDate(), event.getType(), event.getText());
    	}
    }

	this.sortEvents = function(items, left, right) {

        var index;

        if (items.length > 1) {
            index = partition(items, left, right);
            if (left < index - 1)
                this.sortEvents(items, left, index - 1);
            if (index < right)
                this.sortEvents(items, index, right);
        }

        return items;

        function swap(items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        }

        function partition(items, left, right) {

            var pivot   = items[Math.floor((right + left) / 2)].getDate(),
                i       = left,
                j       = right;


            while (i <= j) {
                while (items[i].getDate() < pivot)
                    i++;
                while (items[j].getDate() > pivot) 
                    j--;
                if (i <= j) {
                    swap(items, i, j);
                    i++;
                    j--;
                }
            }

            return i;
        }
    }
}

Timeline.prototype = Object.create(EventArray.prototype);
Timeline.prototype.constructor = Timeline; 
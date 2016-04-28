function EventArray() {

	this.eventsArray = [];

	this.firstEventInt = 0; 

	this.currentEventInt = -1;

	this.getName = function() {
		return this.name; 
	}

	this.numOfEvents = function() {
		return this.eventsArray.length; 
	}

	this.addEvent = function(id, date, category, string) {
		var newEvent = new Event(id, date, category, string);
		this.eventsArray.push(newEvent);
		this.currentEventInt++; 
		return newEvent;  
	}

	this.firstEvent = function() {
		this.currentEventInt = this.firstEventInt;
		return this.eventsArray[this.currentEventInt]; 
	}

	this.lastEvent = function() {
        this.currentEventInt = this.eventsArray.length-1;
        return this.eventsArray[this.currentEventInt]; 
    }

	this.currentEvent = function() {
		return this.eventsArray[this.currentEventInt]; 
	}

	this.nextEvent = function() {
		this.currentEventInt++;
		if (this.currentEventInt >= this.numOfEvents())
			this.currentEventInt = this.firstEventInt; 
		return this.eventsArray[this.currentEventInt]; 
	}

	this.prevEvent = function() {
		this.currentEventInt--;
		return this.eventsArray[this.currentEventInt]; 
	}	

	this.getArray = function() {
		return this.eventsArray; 
	}

	this.getId = function(id) {
		id = parseInt(id); 
		return this.eventsArray[id]; 
	}
	
}
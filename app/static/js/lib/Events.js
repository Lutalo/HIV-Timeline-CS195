// Events class containing event.

function Events(name) {

	EventArray.call(this); 
	this.name = name;
}

Events.prototype = Object.create(EventArray.prototype);
Events.prototype.constructor = Events;
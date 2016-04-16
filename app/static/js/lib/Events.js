// Events class containing event.

function Events(name) {
	this.name = name;
}

Events.prototype = new EventArray();
Events.prototype.constructor = Events; 
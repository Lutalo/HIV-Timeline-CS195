// Event Class

function Event(id, dateString, category, string) {

	this.category = category;

	this.id = id;

	this.date = new Date(dateString);

	this.eventText = string;

	this.imgURI = '';

	this.getId = function() {
		return this.id; 
	}

	this.getDate = function() {
		return this.date;
	}

	this.getType = function() {
		return this.category; 
	}

	this.getText = function() {
		return this.eventText;
	}

}
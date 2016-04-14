// Event Class

function Event(date, category, string) {

	this.typeOf = category; 

	this.date = new Date(date);

	this.eventText = string;

	this.getType = function() {
		return this.typeOf; 
	}

	this.getDate = function() {
		return this.date;
	}

	this.getText = function() {
		return this.eventText;
	}

}
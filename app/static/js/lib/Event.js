// Event Class

function Event(date, category, string) {

	this.typeOf = category; 

	this.date = date;

	this.eventText = string;

	this.getDate = function() {
		return this.date;
	}

	this.getText = function() {
		return this.eventText;
	}

}
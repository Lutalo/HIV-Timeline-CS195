// Event Class

function Event(dateString, category, string) {

	this.typeOf = category; 

	this.date = new Date(dateString);

	this.eventText = string;

	this.imgURI = ''; 

	this.getDate = function() {
		return this.date;
	}

	this.getType = function() {
		return this.typeOf; 
	}

	this.getText = function() {
		return this.eventText;
	}

}
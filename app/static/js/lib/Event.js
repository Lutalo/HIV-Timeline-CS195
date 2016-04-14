// Event Class

function Event(dateString, category, string) {

	this.typeOf = category; 

	this.date = new Date(dateString);

	this.eventText = string;

	this.imgURI = ''; 

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
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

	// this.mergeSort = function(data) {
	//     if(data == 1) 
	//     	return data;
	  
	//     var mid = data.length / 2;
	//     var left = data.slice(0, mid);
	//     var right = data.slice(mid);
	  
	//     left = this.merge(left);
	//     right = this.mergeSort(right);
	      
	//     return this.merge(left, right);
	// }
  
	// this.merge = function(left, right) {
	//     var result=[];
	//     var leftIndex=0;
	//     var rightIndex=0;
	  
	//     while(leftIndex < left.length && rightIndex < right.length) {
	//         if(left[leftIndex] > right[rightIndex]) {
	//             result.push(right[rightIndex]);
	//             rightIndex++;
	//         } else {
	//             result.push(left[leftIndex]);
	//             leftIndex++;
	//         }
	//     }

	//     while(leftIndex < left.length) {
	//         result.push(left[leftIndex]);
	//         leftIndex++;
	//     }

	//     while(rightIndex < right.length) {
	//         result.push(right[rightIndex]);
	//         rightIndex++;
	//     }

	//     return result;

	// }
}

Timeline.prototype = Object.create(EventArray.prototype);
Timeline.prototype.constructor = Timeline; 
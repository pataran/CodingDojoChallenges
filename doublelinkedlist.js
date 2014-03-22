//Creates a double linked list with methods to add, subtract,insert or combine lists together
var Path = function(list)
{
	this.id = list;
	this.pathLength = Math.round(Math.random() * (100 - 1) + 1);
	this.prev = null;
	this.next = null;
}
var create_Paths = function(start)
{ 
	var self = this;
	self.head = new Path(start);
	self.tail = self.head;

	this.addPath = function(value)
	{
		var currentPath = new Path(value);
		currentPath.prev = self.tail;
		self.tail.next = currentPath;
		self.tail = currentPath;
	}
	this.deletePath = function(position){
		var path = this.head;
		var counter = 1;
		//Deletes last position if no position specified!!
		if(position == undefined){
			self.tail.prev.next = null;
			self.tail.prev = null;
		}
		else{
			while(path instanceof Path && counter <= position){
				if(counter == position){
					path.prev.next = path.next;
					path.next.prev = path.prev
				}
				path = path.next;
				counter++;
			}
		}
	}
	this.insertPath = function(position,value){
		var path = this.head;
		var counter = 1;
		while(path instanceof Path && counter <= position){
			if(counter == position){
				var newPath = new Path(value);
				newPath.prev = path;
				newPath.next = path.next;
				path.next = newPath;
				newPath.next.prev = newPath;
			}
			path = path.next;
			counter++;
		}
	}
	this.append = function(value){
			var newPath = new Path(value);
			self.tail.next = newPath;
			newPath.prev = self.tail;
			newPath.next = null;

	}
	this.prepend = function(value){
		var path = this.head;
		var newPath = new Path(value);
		// console.log(path, " this is the head");
		path.prev = newPath;
		newPath.next = path;
		newPath.prev = null;
		this.head = newPath;
	}
	this.mergePath = function(position,pathToMerge){
		// console.log(pathToMerge.head, "this is merges head!");
		var path = this.head;
		var counter = 1;
		while(path instanceof Path && counter <= position){
			if(counter == position){
				path.branch = pathToMerge.head;
			}
		path = path.next;
		counter++;
		}
	}
	this.displayPath = function(){
		var path = this.head;
		while(path instanceof Path){
			console.log(path);
			path = path.next;
		}
	}
}

var a = new create_Paths(1);
a.addPath(2);
a.addPath(3);
a.addPath(4);             
a.addPath(5);
a.addPath(6);
a.addPath(7);
a.addPath(8);
a.insertPath(7,"herro!");
a.deletePath(6);
a.prepend(12);
a.displayPath();

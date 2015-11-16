

// construct employeeInfo object

	function Drone(fName, lName, empNum, empTitle, revScore, salary){

		this.fName = fName;
		this.lName = lName;
		this.empNum = empNum;
		this.empTitle = empTitle;
		this.revScore = revScore;
		this.salary = salary;

}


	$(function(){

		$('form').on('submit', function(event){
			event.preventDefault();
			var employee = $(this).serializeArray();
			var newDrone = new Drone(employee[0].value,
								  	 employee[1].value,
								     employee[2].value,
								     employee[3].value,
								     employee[4].value,
								     employee[5].value);
			droneList(newDrone);
			console.log(newDrone);
		});
	});

	function droneList(employee){

		var $ul = $('<ul>');

		$ul.append($('<li>').text('First Name: ' + employee.fName));
		$ul.append($('<li>').text('Last Name: ' + employee.lName));
		$ul.append($('<li>').text('Employee Number: ' + employee.empNum));
		$ul.append($('<li>').text('Designation: ' + employee.empTitle));
		$ul.append($('<li>').text('Performance: ' + employee.revScore));
		$ul.append($('<li>').text('Salary: ' + employee.salary));
		$('h2').append($ul);
	};






$(document).ready(function () {

	// Load today's date
	var d = new Date();
	var n = d.toLocaleDateString();
	document.getElementById('date').innerHTML = "Today: " + n;
	
	//University Choice
	/*let uniChoice = $('#university').val();
	let unis = document.getElementsByClassName('uni-choice');
	for (let i=0; i<unis.length; i++){
		unis[i].innerHTML = uniChoice;
	}*/


	// CALCULATE COMPENSATION
	var totalDaysFT = 60;
	var totalDaysPT = 72;
	
	$('#calculate').on('click', function () {
		console.log($('#desiredSalary').val());
		if (document.getElementById('full').checked) {
			var temp = $('#desiredSalary').val() / totalDaysFT;
			var result = temp.toFixed(2) * $('#remainingClasses').val();
			console.log(result);
			console.log('Full Time');
			$('#totalDiv').html(result);
		} else if (document.getElementById('part').checked) {
			var temp = $('#desiredSalary').val() / totalDaysPT;
			var result = temp.toFixed(2) * $('#remainingClasses').val();
			console.log(result);
			console.log('Part Time');
			$('#totalDiv').html(result);
		}
		
		//
		//$('#baseDiv').html() + temp;
	});
});


/*$('#btnHouse').on('click', '#calculateByDaysRemaining', function () {
	console.log($('#remainingClasses').val());
	var temp = $('#remainingClasses').val() * totalDays;
	$('#bonusDiv').html() + temp;
});*/


// Calculate by classes missed
/*$('#collapseNine').on("click", "#calculateByDaysMissed", function(){

	$("#baseDiv").empty();
	$("#bonusDiv").empty();
	$("#totalDiv").empty();
	$('#remainingClasses').val('');

	var classesMissed = $("#missedClasses").val();
	var remainingClasses = (72 - classesMissed);
	var totalComp = Math.round(remainingClasses * 90.28);
	var berkeleyTotalComp = Math.round(remainingClasses * 98.8888889);
	var basePay = Math.round(remainingClasses * 69.44);
	var berkeleyBasePay = Math.round(remainingClasses * 78.055555);
	var bonus =  (totalComp - basePay);
	var berkeleyBonus = (berkeleyTotalComp - berkeleyBasePay);

	//console.log(basePay, bonus, totalComp, berkeleyBasePay, berkeleyTotalComp);

	$("#baseDiv")
		.append("<p class='compHeading'>Base Pay</p>")
		.append(basePay + '<br>' + `(Berkeley: ${berkeleyBasePay})`);
		
	$("#bonusDiv")
		.append("<p class='compHeading'>Bonus</p>")
		.append(bonus + '<br>' + `(Berkeley: ${berkeleyBonus})`);
		
	$("#totalDiv")
		.append("<p class='compHeading'>Total Comp</p>")
		.append(totalComp + '<br>' + `(Berkeley: ${berkeleyTotalComp})`);

});*/

// Calculate by classes remaining
/*$('#collapseNine').on("click", "#calculateByDaysRemaining", function(){

	$("#baseDiv").empty();
	$("#bonusDiv").empty();
	$("#totalDiv").empty();
	$('#missedClasses').val('');

	var remainingClasses = $("#remainingClasses").val();
	
	console.log(remainingClasses);

	var totalComp = Math.round(remainingClasses * 90.28);
	var berkeleyTotalComp = Math.round(remainingClasses * 98.8888889);
	var basePay = Math.round(remainingClasses * 69.44);
	var berkeleyBasePay = Math.round(remainingClasses * 78.055555);
	var bonus = (totalComp - basePay);
	var berkeleyBonus = (berkeleyTotalComp - berkeleyBasePay);

	$("#baseDiv")
		.append("<p class='compHeading'>Base Pay</p>")
		.append(basePay + '<br>' + `(Berkeley: ${berkeleyBasePay})`);
		
	$("#bonusDiv")
		.append("<p class='compHeading'>Bonus</p>")
		.append(bonus + '<br>' + `(Berkeley: ${berkeleyBonus})`);
		
	$("#totalDiv")
		.append("<p class='compHeading'>Total Comp</p>")
		.append(totalComp + '<br>' + `(Berkeley: ${berkeleyTotalComp})`);

});*/
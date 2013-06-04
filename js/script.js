$(document).ready(function(){
	$("#check_withdraw").on("click", check_withdraw);

	function check_withdraw(event){

		event.preventDefault();
		var check_amount = $("#check_amount").val();
		var check_balance = $("#check_balance").text();
		var check_total = parseInt(check_balance) - parseInt(check_amount);

		new_check_balance = $("#check_balance").text(check_total);

		if (check_amount == ""){
			$("#check_balance").text(check_balance);
			alert ("Please enter a number.");	
		}

		if (check_total < 0){
			alert("Overdraft Protection");
			var save_balance = $("#save_balance").text();
			var save_total = parseInt(save_balance) + parseInt(check_total);
			$("#save_balance").text(save_total);
			check_total = 0
			$("#check_balance").text(check_total);
			if (save_total < 0){
				alert("You do not have enough money in your savings account. Please try again.");
				$("#save_balance").text(save_balance);
				$("#check_balance").text(check_balance);
			}
		}

		if (check_total == 0){
			$("#checking").css("background-color", "red");
			alert ("You have 0 dollars in your checking account.");
		}

	}

	$("#save_withdraw").on("click", save_withdraw);

	function save_withdraw(event){

		event.preventDefault();
		var save_amount = $("#save_amount").val();
		var save_balance = $("#save_balance").text(); 
		var save_total = parseInt(save_balance) - parseInt(save_amount);


		$("#save_balance").text(save_total);

		if (save_amount == ""){
			$("#save_balance").text(save_balance);
			alert ("Please enter a number.");	
		}

		if (save_total < 0){
			alert("You do not have enough money in your savings account.");
			$("#save_balance").text(save_balance);
		}

		if (save_total == 0){
			$("#savings").css("background-color", "red")
			alert ("You have 0 dollars in your savings account.")
		}
		
	}

		$("#check_deposit").on("click", check_deposit);

	function check_deposit(event){

		event.preventDefault();
		var check_amount = $("#check_amount").val();
		var check_balance = $("#check_balance").text(); 
		var check_total = parseInt(check_balance) + parseInt(check_amount);

		$("#check_balance").text(check_total);

		if (check_amount == ""){
			$("#check_balance").text(check_balance);
			alert ("Please enter a number.");	
		}

		if (check_total > 0){
			$("#checking").css("background-color", "white")
		}
	}

	$("#save_deposit").on("click", save_deposit);

	function save_deposit(event){

		event.preventDefault();
		var save_amount = $("#save_amount").val();
		var save_balance = $("#save_balance").text(); 
		var save_total = parseInt(save_balance) + parseInt(save_amount);

		$("#save_balance").text(save_total);

		if (save_amount == ""){
			$("#save_balance").text(save_balance);
			alert ("Please enter a number.");	
		}

		if (save_total > 0){
			$("#savings").css("background-color", "white")
		}

	}

});

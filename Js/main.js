$(document).ready(function(){

	$("form").submit(function(event){
		return ValidateDate();
	});
		
	$("#dataFinal").change(function(){
		ValidateDate();
	});

    function ConvertForDate(date){
    	var dateArray = date.split('-');
    	var newDate = new Date(dateArray[2], dateArray[1], dateArray[0]);
    	return newDate;
    }

    //Validate Date
    function ValidateDate(){
    	var dateInit = $("#dataInicial").val();
    	var dateEnd = $("#dataFinal").val();

    	var dateInicial = ConvertForDate(dateInit);
    	var dataFinal = ConvertForDate(dateEnd);

    	if(dateInicial > dataFinal){
    		console.log("data inválida");
    		var error = '<span id="dataFinal-error" class="">A Data de fim deve ser maior que a data de inicio.</span>'
    		$('[data-valmsg-for="dataFinal"]').removeClass("field-validation-valid").addClass("field-validation-error").html(error);
    		$("#dataFinal").parent("div").addClass(".has-error");
    		return false;
    	}
    	else{
    		console.log("data válida");
    		$('[data-valmsg-for="dataFinal"]').removeClass("field-validation-valid").addClass("field-validation-error").html("");
    		return true;
    	}
    }
});
'use strict'

let ok = () => {
	function ask(questions, yes, no){
		if(confirm(questions)){
			return yes();
		}
		else{
			return no();
		}
	}
	ask(
			"Do you agree?",
			function(){
				alert("You agreed.");
			},
			function(){
				alert("You canceled the execution.");
			}
		)
}
ok();

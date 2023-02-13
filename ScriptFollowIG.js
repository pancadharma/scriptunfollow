function start(){
var els = document.getElementsByClassName("_acan _acap _acas _aj1-");
	for(var i = 0; i < els.length; i++){
	  if(els[i].innerHTML.indexOf('Follow') > -1){
		els[i].closest('button').click();
		
	  }
	}	
}
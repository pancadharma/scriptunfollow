function start1(){
	console.log('1');
	var els = document.getElementsByClassName("_aacl _aaco _aacw _aad6 _aade");
	for(var i = 0; i < els.length; i++){
	  if(els[i].innerHTML.indexOf('Following') > -1){
		els[i].closest('button').click();
		
	  }
	}	
	setTimeout(start2, 3000);
}

function start2(){
	console.log('2');
	var els = document.getElementsByClassName("_a9-- _a9-_");
	for(var i = 0; i < els.length; i++){
	  if(els[i].innerHTML.indexOf('Unfollow') > -1){
		els[i].closest('button').click();
	  }
	}
	
	setTimeout(start3, 3000);
}

function start3(){
	console.log('3');
	var scroll_stuff = document.getElementsByClassName("_aano")[0];
	scroll_stuff.scrollTop = scroll_stuff.scrollHeight; 
	setTimeout(start1, 3000);
}
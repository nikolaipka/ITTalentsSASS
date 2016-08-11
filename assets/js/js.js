
document.addEventListener('DOMContentLoaded', function() {
	var ch = [];
	var chg = document.querySelectorAll('#preview li img');

		for (var i = 0; i < chg.length; i++) {
			ch.push(chg[i].getAttribute('src'))
			//console.log(chg[i].getAttribute('src'));
		}
		
		var button = document.getElementById('preview');
		button.addEventListener("click" , function(e){
		    var change = e.target;
		    document.getElementById('container').src = ch[i];
		})
	
}, false)

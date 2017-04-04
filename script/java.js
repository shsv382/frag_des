$(document).ready(function() {
		$('#start').click(function(){
			$('table').empty();
			var size = prompt('Size?', 10);
			var lgt = 700/size;
	for (var i = 1; i <= size; i++) {
		$('table').append('<tr/* height="' + lgt + '"width="' + lgt + '"*/></tr>');
	}
	for (var j = 1; j <= size; j++) {
		$('tr').append('<td height="' + lgt + '" width="' + lgt + '"></td>');
	}
	$('td').append('<div class="grey"></div>');
	$('.grey').hover(function(){
		$(this).animate({opacity:'-=0.1'}, 0.1);
		/*var rnd = Math.floor(Math.random * 10);
		var colors = ["#112233", "#445566", "#778899", "#998877", "#665544", "#332211", "#113322", "#335544","#775533", "#442211"];
		console.log(colors[rnd]);
		$(this).css("background-color", colors[rnd]);*/
	});
		$('.grey').fadeTo(100, 1);	
	});
})

// JavaScript Document
var warII_number = 0
function truth_word() {
	console.log("他确实挺欠削");
	document.getElementById("open_truth_word").innerHTML = "PS:他确实挺欠削";
	document.getElementById("hide_button1").style.display="none"
}
function warII() {
	console.log(warII_number);
	if(warII_number == 0){
		window.alert("警告，您即将涉及国家机密！");
		window.alert("如果你想不顾后果地查看的话，你可以继续点击此按钮。");	
		warII_number ++
	}
	else {
		if(warII_number == 1){
			window.alert("警告，您即将涉及国家机密！");
			window.alert("至此，网络警察已经提醒你两次。如果你还想继续的话，请点击此按钮。");	
			warII_number ++
		}
		else {
			if(warII_number >= 2){
				window.alert("警告，您即将涉及国家机密！");	
				window.alert("因为你的执意查看，我们将不得不放出真实信息，但此行为所造成的一切后果都将会由你承担！");	
				document.getElementById('open_warII').style.display='block';
				document.getElementById('hide_button2').style.display="none";
			}
		}
	}	
}
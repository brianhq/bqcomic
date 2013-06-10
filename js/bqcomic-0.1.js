
//initialize content arrays and variables
var lines = new Array();
var speakers = new Array();
var portraits = new Array();
var panels = new Array();

/** 
*	addLine() adds lines to the content arrays
*	@param {int} num the line number
*	@param {string} speaker name of the speaker
*	@param {string} portrait filename for speaker's portrait
*	@param {string} line the line of dialog to be presented in #line
*	@param {string} panel filename for the panel image
*/
function addline(num, speaker, portrait, line, panel){
	lines[num] = line;
	speakers[num] = speaker;
	portraits[num] = portrait;
	panels[num] = panel;
}

function update(num){
	$("#lines").html("<p>"+lines[num]+"<\/p>");
	$("#speaker").html(speakers[num]);
	$("#portrait").html("<img src=\"images/"+portraits[num]+"\" />");
	$("#panel").animate({"opacity": "0"}, "fast", function(){
		$(this).animate({"opacity": "1"}, "fast").html("<img src=\"images/"+panels[num]+"\" />");
	});
}

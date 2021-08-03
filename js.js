function runcopy(idName)
	{
	var captions = document.getElementById("judul").value; 						//Get captions
	var sauce = document.getElementById("sumber").value;						//Get the source
	if (sauce.includes ("u/") == true)											//Check if source have the Reddit "u/" user tag
	{
		var completesauce = sauce;												//If there's any, then write with no change
	}
	else
	{
		var completesauce = "u/" + sauce;										//If there's none, add "u/" user tag
	}
	var datenow = new Date();													//Get today's date
	var daynow = Math.round((datenow.getTime() / (1000 * 60 * 60 * 24)));		//Count the nearest rounding of the today's milliseconds
	var datepast = new Date(2021, 1, 14);										//Get 1st post date
	var daypast = Math.round((datepast.getTime() / (1000 * 60 * 60 * 24)));		//Count the nearest rounding of the 1st post's milliseconds
	var dayspan = daynow - daypast;												//Get the timespan in days
	var tags = ["#jojo", "#jojosbizarreadventure", "#anime", "#jjba", "#jojomemes", "#manga", "#memes", "#jotarokujo", "#jojokes", "#jojobizarreadventure", "#meme", "#giornogiovanna", "#stardustcrusaders", "#josephjoestar", "#ventoaureo", "#diamondisunbreakable", "#animememes", "#diobrando", "#josukehigashikata", "#goldenwind", "#jotaro", "#dankmemes", "#funny", "#battletendency", "#stoneocean", "#josuke", "#jojoedit", "#jojonokimyounabouken", "#jonathanjoestar", "#kakyoin", "#jjbamemes", "#jojos", "#joestar", "#giorno", "#jojolion", "#mistaguido", "#jonathan", "#jjbagoldenwind", "#jojostoneocean", "#steelballrun", "#johnnyjoestar", "#jojomeme", "#jojoke", "#jjbameme", "#animememe"]
	function shuffle(array) {													//The clusterfuck up here is the tags i use
	var m = array.length, t, i;
	while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];																//Fisher-Yates algorithm to shuffle the tags order
    array[m] = array[i];
    array[i] = t;
	}
	}
	shuffle(tags)
	var write_tags = tags[0] + " "
	for (var i = 1; i <= 29; i++) {												//Shuffle the array of tags with the given algorith and write the first 30
	write_tags += tags[i] + " "
	}
	var writeCaption
	var copyCaption
	var selector = idName
	
	if (captions.length == 0 && sauce.length == 0) {
        writeCaption = "Bruh u didn't write anything."
    }
																				//Check if the textbox is empty or not
    
	if (captions.length == 0 || sauce.length == 0) {
        writeCaption = "Bruh check again. Something is missing."
    }
	
	else {
		if (selector == "writeNori") {
			writeCaption = captions + "<br/><br/>" + "Day " + dayspan + " of posting everyday</br><br/>" + "If you like it, please consider to like the post and follow @noriakithecherryboi<br/><br/>" + "Sauce: " + completesauce + "<br/><br/>" + write_tags
			copyCaption = captions + "\n\n" + "Day " + dayspan + " of posting everyday\n\n" + "If you like it, please consider to like the post and follow @noriakithecherryboi\n\n" + "Sauce: " + completesauce + "\n\n" + write_tags
    }																			//Write the caption based on ID parameter
		if (selector == "writeSecond"){
			writeCaption = captions + "<br/><br/>" + "If you like it, please consider to check out my main account, @noriakithecherryboi<br/><br/>" + "Sauce: " + completesauce + "<br/><br/>" + write_tags
			copyCaption = captions + "\n\n" + "If you like it, please consider to check out my main account, @noriakithecherryboi\n\n" + "Sauce: " + completesauce + "\n\n" + write_tags
    }
	}
	
	document.getElementById("writeResult").innerHTML = writeCaption				//Write the caption made
	
	var selecting = document.createElement('textarea');
	selecting = copyCaption														
	document.body.appendChild(selecting);												
	selecting.select();																//Command to copy the written caption
	document.execCommand('copy');												
	document.body.removeChild(selecting);}
function jalankan()
	{
	var captions = document.getElementById("judul").value; 					//Get captions
	//var days = document.getElementById("hari").value; 					Unused, I'm using automation now
	var sauce = document.getElementById("sumber").value;					//Get the source
	if (sauce.includes ("u/") == true)							//Check if source have the reddit "u/" user tag
	{
		var completesauce = sauce							//If there's any, then write with no change
	}
	else
	{
		var completesauce = "u/" + sauce						//If there's none, add "u/" user tag
	}
	var datenow = new Date();								//Get today's date
	var daynow = Math.round((datenow.getTime() / (1000 * 60 * 60 * 24)));			//Count the nearest rounding of the today's milliseconds
	var datepast = new Date(2021, 1, 14);							//Get 1st post date
	var daypast = Math.round((datepast.getTime() / (1000 * 60 * 60 * 24)));			//Count the nearest rounding of the 1st post's milliseconds
	var dayspan = daynow - daypast;								//Get the timespan in days
	var thecaptions
	if ( captions.length == 0 && sauce.length == 0 ) 
	{
		thecaptions = "Bruh u didn't write anything."
	}
	else if ( captions.length == 0 || sauce.length == 0) 
	{
		thecaptions = "Bruh check again."
	}

	else
	{
		thecaptions = captions + "<br/><br/>" + "Day " + dayspan + " of posting everyday</br><br/>" + "If you like it, please consider to like the post and follow @noriakithecherryboi<br/><br/>" + "Sauce:" + completesauce + "<br/><br/>#jojo #jojosbizarreadventure #anime #jjba #jojomemes #manga #memes #jotarokujo #jojokes #jojobizarreadventure #meme #giornogiovanna #stardustcrusaders #josephjoestar #ventoaureo #diamondisunbreakable #animememes #diobrando #josukehigashikata #goldenwind #jotaro #dankmemes #funny #battletendency #stoneocean #josuke #jojoedit #jojonokimyounabouken #jonathanjoestar #kakyoin"
	}
	document.getElementById("hasil").innerHTML = thecaptions;
	}
//#jjba #jojosbizarreadventure #jojo #jojomemes #jotarokujo #anime #manga #giornogiovanna #jojobizarreadventure #stardustcrusaders #jojokes #josephjoestar #diobrando #goldenwind #stoneocean #jojonokimyounabouken #josukehigashikata #diamondisunbreakable #ventoaureo #jjbamemes #jojos #joestar #giorno #jojolion #jolynecujohfanart #otakusemmutivo #mistaguido #jonathan #jjbagoldenwind #jojostoneocean

/* cat type */

var cat = new Homo();

addRace("cat", "Cat", cat, false);

	cat.RATE_remarry_barren = 15; //15;
	cat.RATE_remarry_singleChild = 10; //5;
	cat.RATE_remarry_multipleHeirs = 5; //3;
	cat.RATE_bachelor_ette = 20;  //chance of refusal to marry, both sexes; otherwise married at available spouse rate
	
	cat.RATE_male = 50; // Male/female ratio at birth.  Should be 51% for humans.
	cat.RATE_multi_birth = 100; // Rate of multiple births

	cat.MIN_fmage = 12; // Minimum age of marriage; cut off below this.
	cat.MEAN_fmage = 30; // Average age of marriage on a normal curve. % should be 13-21 for medieval human women
	cat.STD_fmage = 5; // Standard deviation in age of marriage.
	cat.MIN_mmage = 12; // Minimum age of marriage; cut off below this.
	cat.MEAN_mmage = 30; // Average age of marriage on a normal curve.
	cat.STD_mmage = 5; // Standard deviation in age of marriage.

	cat.RATE_dchildbirth = 0.5; //Chance of death in childbirth
	cat.RATE_dchildhood = 50; //Chance of death in infancy or childhood
	cat.RATE_daccident = 0.5; //Chance of accidental death per year
	
	cat.MEAN_dage = 120; // Average age of death on a normal curve.
	cat.STD_dage = 30; // Standard deviation in age of death.

	cat.MEAN_childDelay = 10;
	cat.STD_childDelay = 2;
	
	cat.MEAN_litterSize = 4;
	cat.STD_litterSize = 2;
	

cat.fnames = ["Dís", "Dís", "Dís", "Dís", "Dís", "Dís", "Dís", "Dís", "Dís", "Dís"];

cat.mnames = ["Azaghâl", "Balin", "Bifur", "Bofur", "Bombur", "Borin", "Dáin ", "Dori", "Durin", "Dwalin", "Farin", "Fíli", "Flói", "Frár", "Frerin", "Frór", "Fundin", "Gamil", "Gimli", "Glóin", "Glóin", "Gróin", "Grór", "Ibûn", "Khîm", "Kíli", "Lóni", "Mîm", "Náin", "Náli", "Nár", "Narvi", "Nori", "Óin", "Ori", "Telchar", "Thorin", "Thráin ", "Thrór"];

cat.fchain = construct_chain(cat.fnames);
cat.mchain = construct_chain(cat.mnames);


cat.clanList = ["RiverClan", "ThunderClan", "ShadowClan", "SkyClan", "WindClan"];

	// clan generation
cat.generateClan = function() { // random clan
	return rollD(cat.clanList.length) - 1;
};

cat.getClan = function(person) {
	//get clan name from clan ID
	return cat.clanList[person.clan];
};

	cat.generateFertility = function(fertyear, girl) { // return fertility based on age
		var chance = 0;
		/* dwarves */
		if (fertyear > 16 && fertyear <= 20) chance = 10;
		if (fertyear > 20 && fertyear <= 24) chance = 20;
		if (fertyear > 24 && fertyear <= 28) chance = 30;
		if (fertyear > 28 && fertyear <= 30) chance = 60;
		if (fertyear > 30 && fertyear <= 32) chance = 80;
		if (fertyear > 32 && fertyear <= 48) chance = 98;
		if (fertyear > 48 && fertyear <= 64) chance = 80;
		if (fertyear > 64 && fertyear <= 96) chance = 60;
		if (fertyear > 96 && fertyear <= 110) chance = 40;
		if (fertyear > 110 && fertyear <= 128) chance = 30;
		if (fertyear > 128 && fertyear <= 146) chance = 20;
		if (fertyear > 146 && fertyear <= 164) chance = 10;
		if (fertyear > 164 && fertyear <= 200) chance = 5;
		if (fertyear > 200 && fertyear <= 236) chance = 3;
		if (fertyear > 236) chance = 1;
		
		return chance;
	};

	cat.generateGrief = function() {
		return rollD(2)+rollD(2)+rollD(2)-2;
	};

cat.initializeClans = function() {
	$("div#seedUi span.clanForm").show();
	$("div#seedUi span.generationForm").hide();
	$("select#clan1SELECT").html("<option value=''>Random Clan</option>");
	$("select#clan2SELECT").html("<option value=''>Random Clan</option>");
	var appendage = "";
	for  (var i = 0; i < cat.clanList.length; i++) {
		appendage = "<option value='" + i + "'>" + cat.clanList[i] + "</option>";
		$("select#clan1SELECT").append(appendage);
		$("select#clan2SELECT").append(appendage);
	}
};
	
// Functions for showing the name inventory.

cat.generateNameTable = function() {
	//Always refresh.
	$("div#nameTables").html("");
	sampleGeneratedNames();
};

var bio={
	"name":"Itachi Uchiha",
	"role": "Front end Developer",
	"contacts": {
		"mobile": "800-232-9956",
		"email": "itachi@hotmail.com",
		"github": "itachi",
		"twitter": "@itachi",
		"location": "Chicago"
	},
	//"biopic": "https://s-media-cache-ak0.pinimg.com/236x/52/74/0f/52740f7a75720a4576d1bd0613e3a3a1.jpg",
	"biopic": "http://quotes2read.com/wp-content/uploads/2015/07/Uchiha.Itachi.full_.716851.jpg",
	"welcomeMessage": "An apple a day keeps the doctor away!",
	"skills":["C++","JavaScript","SQL", "Python"]
};

var education={
	"schools":[
		{
			"name":"University One",
			"location":"Chicago",
			"degree": "Master",
			"majors": ["CS"],
			"dates": "2013 - 2015",
			"url": "http://example1.com"
		},
		{
			"name":"University Two",
			"location":"New York",
			"degree": "BA",
			"majors": ["EE"],
			"dates": "2008 - 2011",
			"url": "http://example2.com"
		}
	],
	"onlineCourses":[
		{
			"title": "JavaScript",
			"school": "Udacity",
			"date": "2014 - 2015",
			"url": "http://wwww.udacity.com"
		}
	]
}

var work={
	"jobs":[
		{
			"employer":"Google",
			"title": "Deliver Boy",
			"dates": "January 2000 - Future",
			"location": "New York",
			"description": "A number of variants of the rhyme were in" +
			" circulation around the turn of the 20th century."+
			" In 1913, Elizabeth Wright recorded a Devonian dialect version"+
			" and also the first known mention of the version we use now, in"+
			" Rustic Speech and Folk-lore. Apples have a good claim to "+
			"promote health. They contain Vitamin C, which aids the immune "+
			"system, and phenols, which reduce cholesterol."
		},
		{
			"employer":"Facebook",
			"title": "Deliver girl",
			"dates": "April 56 - Future",
			"location": "Columbus",
			"description": "Apples may be good for us but it wasn't their precise medicinal properties that were being exalted when this phrase was coined. In Old English the word apple was used to describe any round fruit that grew on a tree. Adam and Eve's forbidden fruit, which they ate in the Garden of Eden, is often described as an apple but, in the 1611 King James Version of the Bible, it is just called 'a fruit'."
		}
	]
}

var projects={
	"projects":[
		{
			"title": "Sample Project 1",
			"dates": "2014 - December 31, 2099",
			"description": "Itachi Uchiha was a prodigy of Konohagakure's Uchiha clan. He became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke — who sought to avenge their clan.",
			"images":[
				"https://qph.is.quoracdn.net/main-qimg-991d80770a4ba11d699689c5158f5bfc?convert_to_webp=true",
				"https://qph.is.quoracdn.net/main-qimg-449264aeb5c06a65c0a04cf3fd7b2311?convert_to_webp=true"
			]
		}
	]
}

// display  name, role, pic, and skills in the header, display contact information in header and footer
bio.display=function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);

		for(var i=0;i<bio.skills.length;++i){
			var forskill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(forskill);
		}
	}
}

// display the work information
work.display=function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var foremop = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var fortit = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var foret = foremop+fortit;
		$(".work-entry:last").append(foret);
		var fordate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(fordate);
		var fordes = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(fordes);
	}
}

//display the projects information
projects.display=function(){

	for(i in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var pt = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		var pdates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		var pdes = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(pt);
		$(".project-entry:last").append(pdates);
		$(".project-entry:last").append(pdes);
		if(projects.projects[i].images.length>0){
			for(j in projects.projects[i].images){
				var pimg=HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
				$(".project-entry:last").append(pimg);
			}
		}
	}
}

//display education information
education.display=function(){
	for(var i in education.schools){
		$('#education').append(HTMLschoolStart);
		var sname = HTMLschoolName.replace('%data%',education.schools[i].name);
		var sdegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
		var sND = sname+sdegree;
		var sdate = HTMLschoolDates.replace('%data%',education.schools[i].dates);
		var slocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
		$(".education-entry:last").append(sND);
		$(".education-entry:last").append(sdate);
		$(".education-entry:last").append(slocation);
		if(education.schools[i].majors.length>0){
			for(j in education.schools[i].majors){
				var smajor= HTMLschoolMajor.replace('%data%',education.schools[i].majors[j]);
				$(".education-entry:last").append(smajor);
			}
		}
	}

	$('#education').append(HTMLonlineClasses);
	for(var a in education.onlineCourses){
		$('#education').append(HTMLschoolStart);
		var otitle=HTMLonlineTitle.replace('%data%',education.onlineCourses[a].title);
		var oschool = HTMLonlineSchool.replace('%data%',education.onlineCourses[a].school);
		var otisc = otitle+oschool;
		var odate = HTMLonlineDates.replace('%data%',education.onlineCourses[a].date);
		var ourl = HTMLonlineURL.replace('%data%',education.onlineCourses[a].url);
		$(".education-entry:last").append(otisc);
		$(".education-entry:last").append(odate);
		$(".education-entry:last").append(ourl);
	}
}

bio.display();
projects.display();
work.display();
education.display();

//change the name into international mode - capitalize last name
function inName(){
	var name = bio.name;
	name=name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}


$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});





$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);




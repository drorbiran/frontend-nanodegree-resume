//creating vars
var name = "Dror Biran";
var role = "Front End Developer";

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"pic" : "https://avatars0.githubusercontent.com/u/15089927?v=3&s=460" ,
	"welcome" : "Hi this is my cv" ,
	"skiils" : ["photoshop", "illustrator" , "HTML" , "CSS"],
	"contacts" : {
		"mobile" : "054-5434916",
		"email" : "biran.dror@gmail.com",
		"github" : "birandror",
		"twitter" : "@birandror",
		"Location" : "Tel Aviv"
	}
}

var work = {
	"job" : "student",
	"employer" : "IDC",
	"years" : "2013-1016",
	"city" : "Herzelia"
}

var education = {
	"school" : "Haifa University",
	"years" : "2007-2009",
    "city" : "haifa"
}

//changing the vars in the helper
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
//var formattedContact = HTMLcontactGeneric.replace("%data%" , bio.contacts);
var formattedWelcome = HTMLwelcomeMsg .replace("%data%" , bio.welcome);
var formattedPic = HTMLbioPic.replace("%data%" , bio.pic);
//var formattedSkills = HTMLskills.replace("%data%" , bio.skills);


//appending to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#header").append(formattedContact);
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);
//$("#header").append(formattedSkills);
$("#header").append(work["job"]);
$("#header").append(education.school);
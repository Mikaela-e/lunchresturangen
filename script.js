const body = document.body
const h1 = document.createElement("h1");
h1.textContent = "Lunchresturangen!";
body.append(h1);
let p = document.createElement("p");
    body.append(p);

var dagensdatum = new Date('November 27, 2021');
var weekday = dagensdatum.getDay();
console.log(weekday + " " + dagensdatum);
//switch för att ta visa vilken dag och lunch som serveras just idag.
var day;
var textmenu;
switch (new Date().getDay()) {
  case 0:
    day = "Söndagen";
    textmenu = "serveras ej, Stängt";
    break;
  case 1:
    day = "Måndagen";
    textmenu = "är köttfärssås med spaghetti";
    break;
  case 2:
    day = "Tisdagen";
    textmenu = "är Purjolökssoppa med baguette";
    break;
  case 3:
    day = "Onsdagen";
    textmenu = "är Pasta Carbonara";
    break;
  case 4:
    day = "Torsdagen";
    textmenu = "är ärtsoppa med pannkakor";
    break;
  case 5:
    day = "Fredagen";
    textmenu = "Tacos";
    break;
  case 6:
    day = "lördagen";
    textmenu = "serveras ej, Stängt";
    break;
};
console.log(day + " " +textmenu);
// Dagens veckonummer, vad som serveras och vilken dag det är....
p.innerHTML = "Dag"+" "+[weekday]+ "." + " " + "Menyn för "+ [day]+" "+  " " + [textmenu];

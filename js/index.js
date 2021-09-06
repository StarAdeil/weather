$("#wrapper").append( $("<div></div>").addClass("titleBlock") );
$(".titleBlock").append( $("<div></div>").text("Время Суток").addClass("elemTitle") );
$(".titleBlock").append( $("<div></div>").text("Температура").addClass("elemTitle") );
$(".titleBlock").append( $("<div></div>").text("Давление, мм").addClass("elemTitle") );
$(".titleBlock").append( $("<div></div>").text("Влажность, %").addClass("elemTitle") );
$(".titleBlock").append( $("<div></div>").text("Ветер, м/сек").addClass("elemTitle") );

class Weather{
	constructor(timeOfDay,temperature,pressure,humidity,wind){
		this["Время Дня"] = timeOfDay;
		this["Все"] = [timeOfDay,temperature,pressure,humidity,wind];
	}
	createInfo(id){
		let arrInfo = this["Все"];
		id.append( $("<div></div>").addClass(`${this["Время Дня"]}`) );
			$(`.${this["Время Дня"]}`).html(function(index,value){
				let str = "";
				arrInfo.forEach(function(elem){
					str += `<div class="elemInfo">${elem}</div>`;
				});
				return str;
			}).addClass("elemBlock");
	};
};

let weather = new Weather("Ночь",20,752,86,5);
let weather2 = new Weather("Утро",17,756,65,2);
let weather3 = new Weather("День",30,754,44,6);
let weather4 = new Weather("Вечер",24,752,77,2);
weather.createInfo( $("#wrapper") );
weather2.createInfo( $("#wrapper") );
weather3.createInfo( $("#wrapper") );
weather4.createInfo( $("#wrapper") );

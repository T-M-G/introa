var imageArray = [
		'https://images.unsplash.com/photo-1461010083959-8a5727311252?dpr=1&auto=format&fit=crop&w=1080&h=760&q=80&cs=tinysrgb&crop=',
		'https://images.unsplash.com/photo-1448006678469-d32ba7880e18?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=',
		'https://images.unsplash.com/photo-1448062920312-78ec18ff7e3c?dpr=1&auto=compress,format&fit=crop&w=376&h=376&q=80&cs=tinysrgb&crop='
];
var currentIndex = 0;
var data;
function createDataTable() {
	data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	data.addColumn('number', 'Cheerfulness');
	data.addRows([
			['Thomas',5]
        ]);


	drawChart();

}

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length-1;
	} else if (currentIndex >= imageArray.length) {
	currentIndex = 0;
	}
	$('#photo').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	currentIndex++;
	renderImage();
});

$('#backwardBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$("h1").html(outputString);

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(createDataTable);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it. 
      function drawChart() {

        var graphWidth = $('#chart_div').width();
        // Set chart options
        var options = {'title':'Cheerfulness of My Family',
                       'width':graphWidth,
                       'height':300,
                       'backgroundColor':'white',
                       'colors': ['red']
               		};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);


$('#cheerFactor').on('click', function(){
	var nominus = prompt("Type in the name.");
	var holidayCheer = parseInt(prompt("From 1-10, type in a number showing the cheerfulness of the person."));
	var happiness = parseInt(console.log(prompt("If you want to start the graph new again, type 2. If you clicked this by mistake and don't want anything changed, press 3.")));
	if (happiness == 2) {
			data.removeRow(5)
		var repetition2 = console.log(prompt("To continue, press 2."))
    		data.addRows([
    			[nominus, holidayCheer]
    		])
    chart.update(data, options)
	drawChart();
	}
	else {
	}
});

      }

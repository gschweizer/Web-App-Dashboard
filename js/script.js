window.onload = function() {


var mtc = document.getElementById("MainTrafficChart");
var wtc = document.getElementById("WebTrafficChart");
var muc = document.getElementById("MobileUsersChart");

// Global Changes
Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";
Chart.defaults.global.defaultFontColor = "#888";


// When #close button is clicked, remove alert
$('#close').on('click', function(){
	$(this).parent().remove();
});


// Main Traffic Chart
var MainTrafficChart = new Chart(mtc, {
    type: 'line',
     data: {
        labels: [
        	"16-22", 
        	"23-29", 
        	"30-5", 
        	"6-12", 
        	"13-19", 
        	"20-26", 
        	"27-3", 
        	"4-10", 
        	"11-17", 
        	"18-24", 
        	"25-31"
        ],

        datasets: [{
            data: [500, 775, 1025, 1400, 900, 1600, 2000, 2000, 2100, 800, 500, 750],
            backgroundColor: 'rgba(46,69,133,.2)',
            borderColor: '#6445a3',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            lineTension: 0
        }]
    },
    options: {
    	legend: {
    		display: false
    	},
         scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500
                }
            }]
        }
    }
});


// Web Traffic Chart
var WebTrafficChart = new Chart(wtc, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],

        datasets: [{
            data: [65, 135, 220, 200, 100, 175, 90],
            backgroundColor: '#6445a3',
            borderColor: '#6445a3',
            borderWidth: 1,

        }]
    },
    options: {
    	legend: {
    		display: false
    	},
        scales: {
        	xAxes: [{
    			barPercentage: .6,
    			categoryPercentage: 1
    		}],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


// Mobile Users Chart
var MobileUsersChart = new Chart(muc, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],

        datasets: [{
            data: [300, 175, 100],
            backgroundColor: [
            	'#6445a3',
            	'#2eb685',
            	'#ca4b82'
            ]
        }]
    },
 	options: {
    	legend: {
            position: 'right',  
    		labels: {
    			boxWidth: 13,
                fontSize: 14
    		}
    	}
    }
});


// If message form is blank ask user to include a message
    $('#msgForm').submit(function() {
        if($('#message').val() == ''){
            alert('Please include a message.');
            return false;

        // If user form is blank ask user to include one
        } else if ($('#name-search').val() == '') {
            alert('Please include a user.');
            return false;
            }

        // If message and user has text show 'message sent' alert    
        else {
            alert('Message sent.')
        }
    });





};






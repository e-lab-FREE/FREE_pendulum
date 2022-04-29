/* Javascript used to start an experiment and showns graphics in real time

Developed by José Veiga and Pedro Rosa

Last updated out 9 11:12 , 2021*/


var output_data = [];
var receive_error_velocity = [];
var receive_error_period = [];


function getCookie(name) 
{
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) 
  {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else
  {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) 
    {
      end = dc.length;
    }
  }
  
  // because unescape has been deprecated, replaced with decodeURI
  // return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

$(".menu .item").click(function() {
  var tab_description = $(this).attr("data-tab");
  // console.log('Description : ', tab_description);
  if (tab_description === 'results')
  {
    Show_data()
  }
  });

function Show_data(){
  result_data = JSON.parse(document.getElementById('final-result').textContent);
  buildPlot1(0);
  buildPlot2(0);
  buildPlot3(0);
  receive_error_velocity = 0.1;
  receive_error_period = 0.0005;//response.data.value.e_period;
  Plotly.extendTraces('myplot', {x: [result_data.value.map(data => data.Sample_number)],y: [result_data.value.map(data => data.Val3)],'error_y.array': [Array(result_data.value.length).fill(receive_error_velocity)]}, [0]);
  Plotly.extendTraces('myplot1', {x:  [result_data.value.map(data => data.Val1)]}, [0]);
  Plotly.extendTraces('myplot2', {x: [result_data.value.map(data => data.Sample_number)],y: [result_data.value.map(data => data.Val1)],'error_y.array': [Array(result_data.value.length).fill(receive_error_period)]}, [0]);


}


function cleanPlots(){
  console.log("Clean all plots ");
  Plotly.purge('myplot');
  Plotly.purge('myplot1');
  Plotly.purge('myplot2');
}

function buildGraph(response){
  console.log('ola', response.data[0].value);
  res = Object.keys(response.data[0].value);
  buildPlot1(res);
  buildPlot2(res);  // grafico de temperatura não 
  buildPlot3(res);

  last_result_id = response.data[0].id+1
  return 1;
}

function plotRunTime(response){
  console.log('plotly_results', response.data.value);
  
  receive_error_velocity = 0.1;
  receive_error_period = 0.0005;//response.data.value.e_period;
  
  Plotly.extendTraces('myplot', {x: [[response.data[0].value.Sample_number]],y: [[response.data[0].value.Val3]],
    'error_y.array': [[ receive_error_velocity ]]}, [0]);
  last_result_id = response.data[0].id+1
  Plotly.extendTraces('myplot1', {x: [[response.data[0].value.Val1]]}, [0]);
  Plotly.extendTraces('myplot2', {x: [[response.data[0].value.Sample_number]],y: [[response.data[0].value.Val1]],
  'error_y.array': [[receive_error_period]]}, [0]);
}

 





// //// nao usado
// function tablebind(response) {  
//           if (obj.length > 0) {  

//               var table = $("<table />");  
//               table[0].border = "1";  

//               var row$;  

//               var columns = addAllColumnHeaders(["S"]);  
//               for (var i = 0; i < data.length; i++)
//                {  
//                   row$ = $('<tr/>');  
           
//                   for (var colIndex = 0; colIndex < columns.length; colIndex++) 
//                   {  
//                       var cellValue = data[i][columns[colIndex]];  

//                       if (cellValue == null) { cellValue = ""; }  

//                       row$.append($('<td/>').html(cellValue));  
//                   }  
//                   $("#jsonTable").append(row$);  
//               }      
//           }  

// }  




/////////////////////////////////////////////////////////////////////////////////
//////////// Build graphic                    
/////////////////////////////////////////////////////////////////////////////////


// To improve
var selectorOptions = {
  buttons: [{
      step: '1',
      stepmode: 'backward',
      count: 1,
      label: '10N'
  },{

      step: 'all',

  }],

};


function buildPlot1(res) {

  console.log(res);
  var trace1 = {
		x: [],
		y: [],
    error_y: {
      type: 'data',
      color: '#85144B',
      array: [],
      thickness: 1.5,
      width:3,
      visible: true
    },
    mode: 'lines+markers',
    line: {
      color: "#1f77b4", 
      width: 1
    },marker: {
      color: "rgb(0, 255, 255)", 
      size: 6, 
      line: {
        color: "black", 
        width: 0.5
      }
    },
    type:"scatter",
		/*line: {
		  color: '#80CAF6',
		  shape: 'linear'
		},*/
		
		name: res[1]
	  };

    var output_data = [trace1];

    var layout = {
      title: gettext('Linear velocity vs sample number'),
      height: 500, // os valores são todos em pixels
      font: {
      family: 'Lato',
      size: 16,
      color: 'black'
      },

      xaxis: {
            title: gettext('# Samples'),
            titlefont:{
                  color: 'black',
                  size: 14
                  },
                 howticklabels: false
                 // rangemode: 'tozero'
                
                 //rangeslider: {}
            },
      yaxis: {
            title: gettext('Linear velocity [cm/s]'),
            fixedrange: true,
            titlefont:{
                  color: 'black',
                  size: 14
                  }
                 // rangemode: 'tozero'
            }
     };

     Plotly.newPlot('myplot', output_data, layout);
   
}







///////////////////

function buildPlot2(res) {
  console.log(res);
  var trace2 = {
    // no histograma so é x ou é y.
		x: [],
		//y: [],
    name: gettext('Histogram of the pendulum periods'),
    visible: true,
   // mode: 'lines+markers',
    type: 'histogram',
    nbins: 50,
    // xbins: {

    //   end: 1000, 
  
    //   size: 0.06, 
  
    //   start: .5
  
    // },
		line: {
		  color: '#80CAF6',
		  shape: 'linear'
		},
    opacity:0.5,
		
		name: res[2]
	  };

    var output_data = [trace2];

    var layout = {
      title: gettext('Histogram of the pendulum periods'),
      height: 500, // os valores são todos em pixels
      bargap: 0.05, 
      bargroupgap: 0.2,
     
      font: {
      family: 'Lato',
      size: 16,
      color: 'black'
      },

      xaxis: {
            
            title: gettext('Period [s]'),
            titlefont:{
                  color: 'black',
                  size: 14
                  }
                //  rangemode: 'tozero'
            },
      yaxis: {
        //range:[0.19,0.21],
            title: gettext('# Samples'),
            titlefont:{
                  color: 'black',
                  size: 14
                  }
                 // rangemode: 'tozero'
            }
     };

     Plotly.newPlot('myplot1', output_data, layout);
   
}


function buildPlot3(res) {
  console.log(res);
  var trace3 = {
		x: [],
		y: [],
    error_y: {
      type: 'data',
      color: '#85144B',
      array: [],
      thickness: 1.5,
      width:3,
      visible: true
    },
    mode: 'lines+markers',
    line: {
      color: "#1f77b4", 
      width: 1
    },marker: {
      color: "rgb(0, 255, 255)", 
      size: 6, 
      line: {
        color: "black", 
        width: 0.5
      }
    },
    type:"scatter",
		
		name: res[3]
	  };

    var output_data = [trace3];

    var layout = {
      title: gettext('Period vs. number of samples'),
      height: 500, // os valores são todos em pixels
      font: {
      family: 'Lato',
      size: 16,
      color: 'black'
      },

      xaxis: {
            
            title: gettext('# Samples'),
            titlefont:{
                  color: 'black',
                  size: 14
                  }
                //  rangemode: 'tozero'
            },
      yaxis: {
        //range:[0.19,0.21],
            title: gettext('Period [s]'),
            titlefont:{
                  color: 'black',
                  size: 14
                  }
                  //rangemode: 'tozero'
            }
     };

     Plotly.newPlot('myplot2', output_data, layout);
   
    }
    




function set_reset() {
  var resetBtn = document.getElementById('delete_conf');
  var location = window.location.href.split('?')[0];
  
    resetBtn.addEventListener('click', function(event) {
    console.log('Reseting values of R or iteration...');
    window.location.href = location;
    });
    }







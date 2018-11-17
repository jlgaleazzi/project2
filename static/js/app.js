// app.js
var piedata = [{
    values: [635260, 598038, 161374, 154596, 142142, 116103, 80058, 51537,
            50046, 44965, 40613, 40545, 33246, 29697, 19715, 19362, 526951],
     text: ["Heart Disease", "Malignant Neoplasms (Cancer)", "Unintentional Injury", "Chronic Low. Respiratory Disease",
              "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia",
              "Nephritis", "Suicide", "Septicemia", "Liver Disease",
              "Hypertension", "Parkinson's Disease", "Pneumonitis", "Homicide", "All Others"],
    type: 'pie',
    rotate: 90,
  }];
 //TODO setYearData
 function setYearData(year) {
     console.log('set data for '+year);
 }


function setMainText(year) {
var legend = '<h1>Leading Causes of Death in ' + year + ' in the U.S.A.</h1>'
legend += '<h2>In ' + year +', 2,744,248 people died of all causes out of a total US population of 323,405,935.</h2>'
    
    var sel = d3.select('#mainText');
    sel.html(legend);
}

  var layout = {showlegend: false,
    title: "Here is a breakdown of the top 16 causes, which accounts for almost 81% of total.",
    height: 800,
    width: 1200,
    };
  
  Plotly.newPlot('plot', piedata, layout);

  var x = [58335, 38748, 34673, 6610, 6507, 3786, 2803, 1678, 1385, 1292,
    1292, 982, 902, 801, 610, 495, 311, 152, 12];
var y = ["Poisoning", "MV Traffic", "Fall", "Suffocation",
   "Unspecified", "Drowning", "Fire/burn", "Natural / Environment",
   "Other Spec., classifiable", "Other Land Transport", "Other Spec., NEC", "Pedestrian, Other",
   "Other Transport", "Struck by or Against", "Machinery", "Firearm",
   "Pedal cyclist, Other", "Cut/pierce", "Overexertion"];
var text = ["36.1%", "24%", "21.5%", "4.1%",
    "4%", "2.3%", "1.7%", "1%",
    "0.9%", "0.8%", "0.8%", "0.6%",
    "0.6%", "0.5%", "0.4%", "0.3%",
    "0.2%", "0.1%", "0.0%"];

var data = [{
x:      x.reverse(),
y:      y.reverse(),
text:    text.reverse(),
textposition: 'auto',
type: "bar",
orientation: "h"}];

// TODO: add #s on right (see screenshot)
// : format #s on click w commas?

var layout2 = {showlegend: false,
title: "Unintentional Injury Details, for 161,374 people who died in the US in 2016",
xaxis: { title: "Number of people in the 1000s (k) dying from Unintentional Injuries",
hoverformat: 'd',
},
yaxis: { title: "19 Leading Causes"},
// yaxis2: {
//   title: "Number of deaths"
// },
margin: {
l: 200,
r: 100,
t: 100,
b: 100},
height: 800,
// width: 1200
};

Plotly.newPlot('plot2', data, layout);

function init(){
    setMainText('2016');
}

function optionChanged(year) {
    setMainText(year)
}

init();
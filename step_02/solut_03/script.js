/**
 * json elaborato tutto in due chiamate ajax
 * */
function printSales(sales) {
    var ctx = $('#chartSales').get(0);
    var months = moment.months()
    var myChart = new Chart(ctx, {
        type: sales.type,
        data: {
            labels: months,
            datasets: [{
                label: 'Vendite',
                data: sales.data,
                backgroundColor: ['rgb(10, 120, 10, .4)'],
                borderColor: ['rgb(10, 120, 10)'],
                borderWidth:2,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: false,
                        maxRotation: 60,
                        minRotation: 60
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'blue'
                }
            },
            elements:{
                point:{
                    radius:8,
                    pointStyle: 'rectRot',
                    backgroundColor : 'blue',
                },
            }
        },
    });
}
function printAgent(agent,agentGetData,agentGetName) {
    
    var ctx = $('#chartAgent').get(0);
    var myPie = new Chart(ctx, {
        type: agent.type,
        data: {
            labels:agentGetName,
            datasets: [{
                data: agentGetData,
            }],
        },
        options:{
            elements:{
                arc:{
                    borderColor:'black',
                    backgroundColor: [
                        'rgba(10, 180, 10, .4)',
                        'rgba(10, 120, 200, .4)',
                        'rgba(200, 10, 120, .4)',
                        'rgba(255, 255, 10, .4)',
                    ],
                    borderColor: [
                        'rgb(10, 180, 10)',
                        'rgb(10, 120, 200)',
                        'rgb(200, 10, 120)',
                        'rgb(255, 120, 10)',
                    ],
                }
            }
        }
        
    });
}


function getAgent(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "getAgent.php",
        success: function (agent) {
            var agentGetData = agentData (agent);
            var agentGetName = agentName (agent);
            printAgent(agent,agentGetData,agentGetName)

        }
    });
}
function getSales(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "getSales.php",
        success: function (sales) {
            printSales(sales)
        }
    });
}

/*PLUS DATA FOR AGENT */
//build array with agent Value for data of pieChart
function agentData (agent){
    var agentNum =[];
    for(key in agent.data){
        agentNum.push(agent.data[key])
    }
    return agentNum
}
//build array with agent Value for data of pieChart
function agentName (agent){
    var agentName =[];
    for(key in agent.data){
        agentName.push(key)
    }
    return agentName
}

/* RUN SCRIPT */
$(function () {
    getSales();
    getAgent();
})
/**
 * json elaborato tutto in unica chiamata ajax
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
function printAgent(agent) {
    
    var ctx = $('#chartAgent').get(0);
    var myPie = new Chart(ctx, {
        type: agent.type,
        data: {
            labels:agentName(agent),
            datasets: [{
                data: agentData(agent),

/*                 
                borderColor: ['rgb(10, 120, 10)'],
                borderWidth:2, */
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


function getData(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "getGraphs.php",
        success: function (dataResp) {
            sales = dataResp.fatturato;
            agent = dataResp.fatturato_by_agent;
            printSales(sales)
            printAgent(agent)
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
    getData();
})
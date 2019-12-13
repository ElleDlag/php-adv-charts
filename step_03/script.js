/**
 * json elaborato tutto in unica chiamata ajax
 * *
 */
var getLvl = "guest";
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
function printTeam(team) {
    var ctx = $('#chartTeam').get(0);
    var months = moment.months()
    var myChart = new Chart(ctx, {
        type: team.type,
        data: {
            labels: Object.keys(team.data),
            datasets: [
                {
                label: 'Team1',
                data:Object.values(team.data[(Object.keys(team.data))[0]]),
                backgroundColor: ['rgb(10, 100, 255, .4)'],
                borderColor: ['rgb(10,10, 255)'],
                borderWidth:2,
                pointBackgroundColor: 'rgb(10,10, 255)',
                },
                {
                label: 'Team2',
                data:Object.values(team.data[(Object.keys(team.data))[1]]),
                backgroundColor: ['rgb(200, 10, 10, .4)'],
                borderColor: ['rgb(200, 10, 10)'],
                borderWidth:2,
                pointBackgroundColor: "rgb(200, 10, 10)",
                },
                {
                label: 'Team3',
                data:Object.values(team.data[(Object.keys(team.data))[2]]),
                backgroundColor: ['rgb(200, 200, 200, .4)'],
                borderColor: ['rgb(200, 200, 200)'],
                borderWidth:2,
                pointBackgroundColor: "black",
                }
            ],
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
                    pointStyle: 'circle',
                },
            }
        },
    });
}

function getData(){
    $.ajax({
        type: "GET",
        dataType: "json",
        data:{
            lvl:getLvl,
        },
        url: "getGraphs.php",
        success: function (dataResp) {
            sales = dataResp.fatturato;
            agent = dataResp.fatturato_by_agent;
            team = dataResp.team_efficiency;
            if(!agent){
                printSales(sales)
            } else if((!team)){
                printSales(sales)
                printAgent(agent)
            }else{
                printSales(sales)
                printAgent(agent)
                printTeam(team)
            }
        },
        error:function(dataResp) {
            console.log(dataResp);
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
    getLvl = (window.location.href).split("lvl=")[1]
    getData();
})
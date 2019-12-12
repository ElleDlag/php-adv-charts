function printChart(dataResp) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var months = moment.months()
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Vendite',
                data: dataResp,
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
function getData(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "getLineData.php",
        success: function (dataResp) {
            printChart(dataResp)
        }
    });
}

$(function () {
    getData();
})
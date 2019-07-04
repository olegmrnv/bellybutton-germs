// Creating a function to builed Guage

function buildGauge(level) {
    // var level = 1;

    level += 0.5;
    // Trig to calc meter point
    var degrees = 10 - level,
        radius = .6;
    var radians = degrees * Math.PI / 10;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path: may have to change to create a better triangle
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    var data = [{
            type: 'scatter',
            x: [0],
            y: [0],
            marker: { size: 28, color: '850000' },
            showlegend: false,
            name: 'Washing times',
            text: level - 0.5,
            hoverinfo: 'text+name'
        },
        {
            values: [50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50],
            rotation: 90,
            text: ['9', '8', '7', '6',
                '5', '4', '3', '2', '1', '0', ''
            ],
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: ['rgba(1,70,54, .5)', 'rgba(1,108,89, .5)',
                    'rgba(2,129,138, .5)', 'rgba(54,144,192, .5)',
                    'rgba(103,169,207, .5)', 'rgba(166,189,219, .5)',
                    'rgba(208,209,230, .5)', 'rgba(236,226,240, .5)',
                    'rgba(250,240,251, .5)', 'rgba(255,251,251, .5)',
                    'rgba(255, 255, 255, 0)'
                ]
            },
            labels: ['9 washings per week!', '8 washings per week', '7 washings per week', '6 washings per week', '5 washings per week', '4 washings per week', '3 washings per week', '2 washings per week', 'Just one', 'no washings :-(', ''],
            hoverinfo: 'label',
            hole: .5,
            type: 'pie',
            showlegend: false
        }
    ];

    var layout = {
        shapes: [{
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000'
            }
        }],
        title: '<b>Gauge</b> <br> Amount of washings per week',
        height: 600,
        width: 600,
        xaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        }
    };

    Plotly.newPlot('gauge', data, layout);
}
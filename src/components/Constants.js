const blankGraphData = {
    labels: [],
    datasets: []
}

const blankGraphOptions = {
    responsive: true,
    plugins: {
            legend: {
                display: true
            },
            title: {
                display: false
            }
        },
    scales: {
        x: {
            min: 0,
            title: {
                display: true,
                text: '% of Memristive devices stuck'
            }
        },
        y: {
            min: 0,
            max: 1.0,
            title: {
                display: true,
                text: 'Neural Network accuracy'
            }
        }
    }
}


const Constants = {
    defaultGraphData : {
        "conductance_drifting": {
                 title: "Cond. Drifting Accuracies",
                 graph: blankGraphData},
        "discretisation_pre": {
                 title: "Pre Discretisation Accuracies",
                 graph: blankGraphData},
        "discretisation_post": {
                 title: "Post Discretisation Accuracies",
                 graph: blankGraphData},
        "combined": {
                 title: "Combined Graphs",
                 graph: blankGraphData}
        },
    defaultGraphOptions : {
        "conductance_drifting": blankGraphOptions,
        "discretisation_pre": blankGraphOptions,
        "discretisation_post": blankGraphOptions,
        "combined": blankGraphOptions
        }

}

export default Constants
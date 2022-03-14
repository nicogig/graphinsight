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
        },
    defaultGraphOptions : {
        "conductance_drifting": blankGraphOptions,
        "discretisation_pre": blankGraphOptions,
        "discretisation_post": blankGraphOptions,
        }

}

export default Constants
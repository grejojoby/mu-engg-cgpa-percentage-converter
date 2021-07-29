$(function () {
    $("input").on("change keyup", calculate)
})

var theForm = document.forms["cgpaform"];

function calculate() {

    sem1Val = Number(document.getElementById("sem1").value);
    sem2Val = Number(document.getElementById("sem2").value);
    sem3Val = Number(document.getElementById("sem3").value);
    sem4Val = Number(document.getElementById("sem4").value);
    sem5Val = Number(document.getElementById("sem5").value);
    sem6Val = Number(document.getElementById("sem6").value);
    sem7Val = Number(document.getElementById("sem7").value);
    sem8Val = Number(document.getElementById("sem8").value);

    var total = sem1Val + sem2Val + sem3Val + sem4Val + sem5Val + sem6Val + sem7Val + sem8Val;
    var activeVals = 0;

    if (sem1Val) {
        activeVals += 1;
    }
    if (sem2Val) {
        activeVals += 1;
    }
    if (sem3Val) {
        activeVals += 1;
    }
    if (sem4Val) {
        activeVals += 1;
    }
    if (sem5Val) {
        activeVals += 1;
    }
    if (sem6Val) {
        activeVals += 1;
    }
    if (sem7Val) {
        activeVals += 1;
    }
    if (sem8Val) {
        activeVals += 1;
    }

    // console.log("Total: ", total);
    // console.log("Actve Vals: ", activeVals);

    var aggregate = total / activeVals;
    // console.log("Aggregate: ", aggregate);

    var percent = 0;
    document.getElementById('agg').value = aggregate;

    if (aggregate >= 7) {
        percent = (7.4 * aggregate) + 12;
    }
    else if (aggregate < 7 && aggregate > 0) {
        percent = (7.1 * aggregate) + 12;
    }
    // console.log("Perce: ", percent);
    document.getElementById('perc').value = percent;

}

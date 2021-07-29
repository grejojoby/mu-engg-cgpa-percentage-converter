// (function () {
//     'use strict'
//     const forms = document.querySelectorAll('.requires-validation')
//     Array.from(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })()

$(function()
 {
    $("input").on("change keyup",calculate)
})

var theForm = document.forms["cgpaform"];

function calculate() {
    var total = $("sem1").val() + $("sem2").val() +$("sem3").val() +$("sem4").val() +$("sem5").val() +$("sem6").val() +$("sem7").val() +$("sem8").val(); 
    var aggregate = total/8;
    var percent = 0;
    document.getElementById('agg').value = aggregate;
    // $('#agg').val() = aggregate;
    if(aggregate>=7){
        percent = (7.4*aggregate) + 12;
    }
    else if(aggregate<7 && aggregate>0){
        percent = (7.1*aggregate) + 12;
    }
    $('#perc').val() = percent;
    
}

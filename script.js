$("button").click(function() {
    var fired_button = $(this).val();
    alert(fired_button);
});

function myFunctionSmall(small) {
    return "Small";
}

document.getElementById("small").innerHTML = myFunctionSmall(small);

function myFunctionMedium(medium) {
    return "Medium";
}

document.getElementById("medium").innerHTML = myFunctionSmall(medium);

function myFunctionLarge(large) {
    return "Large";
}

document.getElementById("large").innerHTML = myFunctionSmall(large);

function myFunctionXLarge(xlarge) {
    return "X-Large";
}

document.getElementById("xlarge").innerHTML = myFunctionSmall(xlarge);
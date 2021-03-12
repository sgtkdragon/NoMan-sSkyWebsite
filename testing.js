var $ = function(id) {
    return document.getElementById(id);
};

var calculateTotal = function(carbon, condensedcarbon, autonomousunit, bromidesalt) {
    var total = ((12.0*carbon) + (24.0*condensedcarbon) + (30000.0*autonomousunit) + (15000.0*bromidesalt))
    total = total.toFixed(1);
    return total;
}

var processRawEntires = function() {
    var carbon = parseFloat($("carbon").value);
    var condensedcarbon = parseFloat($("condensedcarbon").value);
    if (isNaN(carbon) || isNaN(condesnsedcarbon)) {
        alert("All entries must be equal to or greater than zero.");
    } else if (carbon <= -1 || condensedcarbon <= -1) {
        alert("All entries must be equal to or greater than zero.");
    } else {
        $("total").value = calculateTotal(carbon, condensedcarbon)
    }
};

var processTradeEntries = function() {
    var autonomousunit = parseFloat($("autonomousunit").value);
    var bromidesalt = parseFloat($("bromidesalt").value);
    if (isNaN(autonomousunit) || isNaN(bromidesalt)) {
        alert("All entries must be equal to or greater than zero.");
    } else if (carbon <= -1 || condensedcarbon <= -1) {
        alert("All entries must be equal to or greater than zero.");
    } else {
        $("total").value = calculateTotal(autonomousunit, bromidesalt)
    }
}

processentries = processTradeEntries + processRawEntires


window.onload = function() {
    $("calculate").onclick = processentries;
}
var $ = function(id) {
    return document.getElementById(id);
};

var calculateTotal = function(carbon, condensedcarbon, oxygen, dihydrogen, deuterium, tritium, ferritedust, pureferrite, magnetisedferrite, silicatepowder, sodium, sodiumnitrate, cobalt, ionisedcobalt, salt, chlorine, cytophosphate, copper, cadmium, emeril, indium, chromaticmetal, paraffinium, pyrite, ammonia, uranium, dioxite, phosphorus, mordite, pugneum, silver, gold, platinum, sulphurine, radon, nitrogen, activatedcopper, activatedcadmium, activatedemeril, activatedindium, fungalmould, frostcrystal, gammaroot, cactusflesh, solanium, starbulb, marrowbulb, kelpsac, faecium, residualgoop, runawaymould, rustedmetal, livingslime, viscousfluids) {
    var total = ((12.0*carbon) + (24.0*condensedcarbon) + (34.0*oxygen) + (34.0*dihydrogen) + (34.0*deuterium) + (6.0*tritium) + (14.0*ferritedust) + (28.0*pureferrite) + (82.0*magnetisedferrite) + (2.0*silicatepowder) + (41.0*sodium) + (82.0*sodiumnitrate) + (198.0*cobalt) + (401.0*ionisedcobalt) + (299.0*salt) + (602.0*chlorine) + (201.0*cytophosphate) + (121.0*copper) + (234.0*cadmium) + (348.0*emeril) + (464.0*indium) + (245.0*chromaticmetal) + (62.0*paraffinium) + (62.0*pyrite) + (62.0*ammonia) + (62.0*uranium) + (62.0*dioxite) + (62.0*phosphorus) + (40.0*mordite) + (138.0*pugneum) + (186.0*silver) + (353.0*gold) + (505.0*platinum) + (20.0*sulphurine) + (20.0*radon) + (20.0*nitrogen) + (0.0*activatedcopper) + (0.0*activatedcadmium) + (696.0*activatedemeril) + (949.0*activatedindium) + (16.0*fungalmould) + (12.0*frostcrystal) + (16.0*gammaroot) + (28*cactusflesh) + (70.0*solanium) + (32.0*starbulb) + (41.0*marrowbulb) + (41.0*kelpsac) + (30.0*faecium) + (20.0*residualgoop) + (0.0*runawaymould) + (20.0*rustedmetal) + (20.0*livingslime) + (20.0*viscousfluids))
    total = total.toFixed(1);
    return total;
}

var processEntries = function() {
    var carbon = parseFloat($("carbon").value);
    var condensedcarbon = parseFloat($("condensedcarbon").value);
    var oxygen = parseFloat($("oxygen").value);
    var dihydrogen = parseFloat($("dihydrogen").value);
    var deuterium = parseFloat($("deuterium").value);
    var tritium = parseFloat($("tritium").value);
    var ferritedust = parseFloat($("ferritedust").value);
    var pureferrite = parseFloat($("pureferrite").value);
    var magnetisedferrite = parseFloat($("magnetisedferrite").value);
    var silicatepowder = parseFloat($("silicatepowder").value);
    var sodium = parseFloat($("sodium").value);
    var sodiumnitrate = parseFloat($("sodiumnitrate").value);
    var cobalt = parseFloat($("cobalt").value);
    var ionisedcobalt = parseFloat($("ionisedcobalt").value);
    var salt = parseFloat($("salt").value);
    var chlorine = parseFloat($("chlorine").value);
    var cytophosphate = parseFloat($("cytophosphate").value);
    var copper = parseFloat($("copper").value);
    var cadmium = parseFloat($("cadmium").value);
    var emeril = parseFloat($("emeril").value);
    var indium = parseFloat($("indium").value);
    var chromaticmetal = parseFloat($("chromaticmetal").value);
    var paraffinium = parseFloat($("paraffinium").value);
    var pyrite = parseFloat($("pyrite").value);
    var ammonia = parseFloat($("ammonia").value);
    var uranium = parseFloat($("uranium").value);
    var dioxite = parseFloat($("dioxite").value);
    var phosphorus = parseFloat($("phosphorus").value);
    var mordite = parseFloat($("mordite").value);
    var pugneum = parseFloat($("pugneum").value);
    var silver = parseFloat($("silver").value);
    var gold = parseFloat($("gold").value);
    var platinum = parseFloat($("platinum").value);
    var sulphurine = parseFloat($("sulphurine").value);
    var radon = parseFloat($("radon").value);
    var nitrogen = parseFloat($("nitrogen").value);
    var activatedcopper = parseFloat($("activatedcopper").value);
    var activatedcadmium = parseFloat($("activatedcadmium").value);
    var activatedemeril = parseFloat($("activatedemeril").value);
    var activatedindium = parseFloat($("activatedindium").value);
    var fungalmould = parseFloat($("fungalmould").value);
    var frostcrystal = parseFloat($("frostcrystal").value);
    var gammaroot = parseFloat($("gammaroot").value);
    var cactusflesh = parseFloat($("cactusflesh").value);
    var solanium = parseFloat($("solanium").value);
    var starbulb = parseFloat($("starbulb").value);
    var marrowbulb = parseFloat($("marrowbulb").value);
    var kelpsac = parseFloat($("kelpsac").value);
    var faecium = parseFloat($("faecium").value);
    var residualgoop = parseFloat($("residualgoop").value);
    var runawaymould = parseFloat($("runawaymould").value);
    var rustedmetal = parseFloat($("rustedmetal").value);
    var livingslime = parseFloat($("livingslime").value);
    var viscousfluids = parseFloat($("viscousfluids").value);
    if (isNaN(carbon) || isNaN(condensedcarbon) || isNaN(oxygen) || isNaN(dihydrogen) || isNaN(deuterium) || isNaN(tritium) || isNaN(ferritedust) || isNaN(pureferrite) || isNaN(magnetisedferrite) || isNaN(silicatepowder) || isNaN(sodium) || isNaN(sodiumnitrate) || isNaN(cobalt) || isNaN(ionisedcobalt) || isNaN(salt) || isNaN(chlorine) || isNaN(cytophosphate) || isNaN(copper) || isNaN(cadmium) || isNaN(emeril) || isNaN(indium) || isNaN(chromaticmetal) || isNaN(paraffinium) || isNaN(pyrite) || isNaN(ammonia) || isNaN(uranium) || isNaN(dioxite) || isNaN(phosphorus) || isNaN(mordite) || isNaN(pugneum) || isNaN(silver) || isNaN(gold) || isNaN(platinum) || isNaN(sulphurine) || isNaN(radon) || isNaN(nitrogen) || isNaN(activatedcopper) || isNaN(activatedcadmium) || isNaN(activatedemeril) || isNaN(activatedindium) || isNaN(fungalmould) || isNaN(frostcrystal) || isNaN(gammaroot) || isNaN(cactusflesh) || isNaN(solanium) || isNaN(starbulb) || isNaN(marrowbulb) || isNaN(kelpsac) || isNaN(faecium) || isNaN(residualgoop) || isNaN(runawaymould) || isNaN(rustedmetal) || isNaN(livingslime) || isNaN(viscousfluids)) {
        alert("All entries must be a number.");
    } else if (carbon <= -1 || condensedcarbon <= -1 || oxygen <= -1 || dihydrogen <= -1 || deuterium <= -1 || tritium <= -1 || ferritedust <= -1 || pureferrite <= -1 || magnetisedferrite <= -1 || silicatepowder <= -1 || sodium <= -1 || sodiumnitrate <= -1 || cobalt <= -1 || ionisedcobalt <= -1 || salt <= -1 || chlorine <= -1 || cytophosphate <= -1 || copper <= -1 || cadmium <= -1 || emeril <= -1 || indium <= -1 || chromaticmetal <= -1 || paraffinium <= -1 || pyrite <= -1 || ammonia <= -1 || uranium <= -1 || dioxite <= -1 || phosphorus <= -1 || mordite <= -1 || pugneum <= -1 || silver <= -1 || gold <= -1 || platinum <= -1 || sulphurine <= -1 || radon <= -1 || nitrogen <= -1 || activatedcopper <= -1 || activatedcadmium <= -1 || activatedemeril <= -1 || activatedindium <= -1 || fungalmould <= -1 || frostcrystal <= -1 || gammaroot <= -1 || cactusflesh <= -1 || solanium <= -1 || starbulb <= -1 || marrowbulb <= -1 || kelpsac <= -1 || faecium <= -1 || residualgoop <= -1 || runawaymould <= -1 || rustedmetal <= -1 || livingslime <= -1 || viscousfluids <= -1) {
        alert("All entries must be equal to or greater than zero.");
    } else {
        $("total").value = calculateTotal(carbon, condensedcarbon, oxygen, dihydrogen, deuterium, tritium, ferritedust, pureferrite, magnetisedferrite, silicatepowder, sodium, sodiumnitrate, cobalt, ionisedcobalt, salt, chlorine, cytophosphate, copper, cadmium, emeril, indium, chromaticmetal, paraffinium, pyrite, ammonia, uranium, dioxite, phosphorus, mordite, pugneum, silver, gold, platinum, sulphurine, radon, nitrogen, activatedcopper, activatedcadmium, activatedemeril, activatedindium, fungalmould, frostcrystal, gammaroot, cactusflesh, solanium, starbulb, marrowbulb, kelpsac, faecium, residualgoop, runawaymould, rustedmetal, livingslime, viscousfluids);
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("carbon").focus;
};
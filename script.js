$(document).ready(function() {
    $("#conversion").click(function() {
        $("#c_to_f").toggle("100");
        $("#f_to_c").toggle("100");
    })
})

$(document).ready(function() {
    $("#c_to_f").click(function() {
        let temp = $("#temp").val();
        let celsius = (temp * 9 / 5) + 32;
        $("#value").html(celsius);
        $("#inp").html(temp);
        $("#inititial_degree").html("&#8451; =");
        $("#final_degree").html("&#8457;");
    })
})

$(document).ready(function() {
    $("#f_to_c").click(function() {
        let temp = $("#temp").val();
        let fahrenheit = (temp - 32) * 5 / 9;
        $("#value").html(fahrenheit);
        $("#inp").html(temp);
        $("#inititial_degree").html("&#8457; =");
        $("#final_degree").html("&#8451;");
    })
})
$(document).ready(function () {

    // var red = false
    $('#btn1').click(function () {
        $('p:first').toggleClass('red');
        // if (red == false) {
        //     $('p:first').css("color", "red");
        //     red = true
        // } else {
        //     $('p:first').css("color", "blanchedalmond")
        //     red = false;
        // }
    })

    $('#btn2').click(function () {
        $('#morty').slideToggle("slow");
    })


    $('#btn3').click(function (){
        $('#append').append("There's a starman waiting in the sky. He'd like to come and meet us. But he thinks he'd blow our minds. There's a starman waiting in the sky. He's told us not to blow it. Cause he knows it's all worthwhile. - David Bowie");
    })

    $('#btn4').click(function (){
        $('#sw').show('slow');
    })

    $('#btn5').click(function (){
        $('#sw').hide('slow');
    })

    $('#btn6').click(function() {
        $('h2').slideUp('slow');
    })

    $('#btn7').click(function() {
        $('h2').slideDown('slow');
    })

    $('#btn8').click(function() {
        $('#st').fadeIn('slow');
    })

    $('#btn9').click(function() {
        $('#st').fadeOut('slow');
    })

    $('#btn10').click(function() {
        $('#b-a').before('The following text tells you what the buttons do:');
    })

    $('#btn11').click(function() {
        $('#b-a').after('Live long and Prosper.');
    })

    $('#btn12').click(function(){
        $('#para').html('<a href="example.html">Link</a><b>hello</b>');
    })

    $('#btn13').click(function (){
        $('#para').text('<a href="example.html">Link </a><b>hello</b>');
    })

    $('#btn14').click(function(){
        $('#SC').attr('width', 100)
    })

    $('#checkbox').click(function(){
        var answer = $(this).prop("checked"); //the html "checked" property
        // using .append()
        if (answer == true){
            $('#last').append('The box is checked!')
        }
        else ($('#last').append('The box is not checked.'))

        // using .text()
        // if (answer == true) {
        //     $('#output-checked').text("The box is checked.");
        // } else {
        //     $('#output-checked').text("The box is unchecked.")
        // }
        console.log(answer);
    })
    
    function menuVal(){
        var selected = $('#menu').val();
        console.log(selected);
        $('#LL').append('The value is ' + selected + '. ');
    }

    $("select").change(menuVal)

});
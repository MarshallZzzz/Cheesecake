//Marshall Zhang HW 2

$(document).ready(function() {
    // Add a click event handler to all buttons
    $(".orderbutton").click(function() {

        const noteboxValue = $('#notes').val();// data of notes
        const newSec = $('#result');// order completion section

        var dropDown = $('#numbers').val();
        var tops = $('.myRadio:checked').val();
 

        if(noteboxValue.toLowerCase().includes('vegan')){ //looks for the word vegan
            alert("Our cheesecake contains dairy!") //throws alert 
        }
        $('#result').show();        
        $('#form').html(newSec); //replaces form section with result
        
        $('#orderDeets').text('Quantity: ' + dropDown + '\n'+'\n' + 'Toppings: ' + tops);
        
    });

    //click event for handling items in dropdown menu
    $('.dropdown-item').click(function(event){
        var text = $(this).text(); //collects the text from chosen item

            $('.menu-button').text(text); //updates button
            event.preventDefault();//makes sure the page stays where it is

    });
});
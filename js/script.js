var fruits = ['APRICOT', 'AVOCADO', 'COCONUT', 'GUAVA', 'MANGO', 'ORANGE', 'PAPAYA', 'PEAR', 'PINEAPPLE'];
var animals = ['a', 'b', 'c', 'd', 'e'];
var wordClasses = ['coconut', 'papaya', 'avocado', 'orange', 'mango', 'pear', 'guava', 'apricot', 'pineapple'];
var clickedClasses = [];
var letters = [];
var myWord = [];


$(".fruits-grid td").click(function () {
    
    var myLetter = [];
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            // Identifier la classe de la case sur laquelle on clique
            for (var i = 0; i < wordClasses.length; i++) {
                if ($(this).hasClass(wordClasses[i])) {
                    var commonClass = wordClasses[i];
                    var myLetter = $(this).html();

                }
            }
            // Rechercher la classe identifiée, dans l'array "clickedClasses"
            var index = clickedClasses.indexOf(commonClass);
            var index = letters.indexOf(myLetter);
            // Retirer la classe identifée, en supprimant l'index où elle se trouve
            clickedClasses.splice(index, 1);
            letters.splice(index, 1);
        }
        
        else {
            $(this).addClass("selected");
            letters.push($(this).html())
            for (var i = 0; i < wordClasses.length; i++) {
                    if ( $(this).hasClass(wordClasses[i]) ) {
                        clickedClasses.push(wordClasses[i]);
                    }
            }
        }
            validerMot()  
});



function validerMot() {
    // ON VALIDATION
    myWord = letters.join('');
    console.log(myWord)
    if (fruits.includes(myWord) && (letters.length === clickedClasses.length)) {
        switch (myWord) {
            case "COCONUT":
            $(".coconut").removeClass("selected");
            $(".coconut").addClass("found");
            // $(".fruits-list li").html('Coconut').addClass('active')
            break;

            case "PAPAYA":
            $(".papaya").removeClass("selected");
            $(".papaya").addClass("found");
            break;

            case "AVOCADO":
            $(".avocado").removeClass("selected")
            $(".avocado").addClass("found")
            // $(".fruits-list li").html('Avocado').addClass('active')
            break;

            case "ORANGE":
            $(".orange").removeClass("selected")
            $(".orange").addClass("found")
            break;

            case "MANGO":
            $(".mango").removeClass("selected")
            $(".mango").addClass("found")
            break;

            case "PEAR":
            $(".pear").removeClass("selected")
            $(".pear").addClass("found")
            break;

            case "GUAVA":
            $(".guaya").removeClass("selected")
            $(".guaya").addClass("found")
            break;

            case "PINEAPPLE":
            $(".pineapple").removeClass("selected")
            $(".pineapple").addClass("found")
            break;
        }
        letters = [];
        clickedClasses = [];
    }
    
}

// trouver element de la liste qui a la meme valeur html et lui ajouter classe .active
// childNode pour cibler icone de chaque mot de la liste



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 870));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

var animals = ['CHICKEN', 'COW', 'CROCODILE', 'DONKEY', 'DUCK', 'FISH', 'FLAMINGO', 'GOAT', 'HORSE', 'MOUSE', 'SHEEP', 'ZEBRA'];
var wordClasses = ['chicken', 'cow', 'crocodile', 'donkey', 'duck', 'fish', 'flamingo', 'goat', 'horse', 'mouse', 'sheep', 'zebra'];
var clickedClasses = [];
var letters = [];
var myWord = [];
var foundWords = [];

//run Timer
timerCountdown();

$(".animals-grid td").click(function () {
    
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
    if (animals.includes(myWord) && (letters.length === clickedClasses.length)) {
        switch (myWord) {
            case "CHICKEN":
            $(".chicken").removeClass("selected");
            $(".chicken").addClass("found");
            var animalName = $(".animals-list li:contains('Chicken')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "COW":
            $(".cow").removeClass("selected");
            $(".cow").addClass("found");
            var animalName = $(".animals-list li:contains('Cow')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "CROCODILE":
            $(".crocodile").removeClass("selected")
            $(".crocodile").addClass("found")
            var animalName = $(".animals-list li:contains('Crocodile')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "DONKEY":
            $(".donkey").removeClass("selected")
            $(".donkey").addClass("found")
            var animalName = $(".animals-list li:contains('Donkey')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "DUCK":
            $(".duck").removeClass("selected")
            $(".duck").addClass("found")
            var animalName = $(".animals-list li:contains('Duck')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "FISH":
            $(".fish").removeClass("selected")
            $(".fish").addClass("found")
            var animalName = $(".animals-list li:contains('Fish')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "FLAMINGO":
            $(".flamingo").removeClass("selected")
            $(".flamingo").addClass("found")
            var animalName = $(".animals-list li:contains('Flamingo')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "GOAT":
            $(".goat").removeClass("selected")
            $(".goat").addClass("found")
            var animalName = $(".animals-list li:contains('Goat')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "HORSE":
            $(".horse").removeClass("selected")
            $(".horse").addClass("found")
            var animalName = $(".animals-list li:contains('Horse')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "MOUSE":
            $(".mouse").removeClass("selected")
            $(".mouse").addClass("found")
            var animalName = $(".animals-list li:contains('Mouse')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "SHEEP":
            $(".sheep").removeClass("selected")
            $(".sheep").addClass("found")
            var animalName = $(".animals-list li:contains('Sheep')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "ZEBRA":
            $(".zebra").removeClass("selected")
            $(".zebra").addClass("found")
            var animalName = $(".animals-list li:contains('Zebra')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;
        }
        foundWords.push(myWord)
        win();
        letters = [];
        clickedClasses = [];
    }
}

var timer = 61;
function timerCountdown() {
  var interval = setInterval(function() {
    timer--;
    lose();
    $("#timer span").text(timer + "s");
    if (timer <= 0){
      clearInterval(interval);
    }
  }, 1000);
}

function win () {
    if (foundWords.length === animals.length) {
        $(".overlay-win").show();
    }
};

function lose () {
    if (timer == 0) {
        $(".overlay-lose").show();
    }
};
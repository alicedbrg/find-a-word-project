var fruits = ['APRICOT', 'AVOCADO', 'COCONUT', 'GUAVA', 'MANGO', 'ORANGE', 'PAPAYA', 'PEAR', 'PINEAPPLE'];
var wordClasses = ['coconut', 'papaya', 'avocado', 'orange', 'mango', 'pear', 'guava', 'apricot', 'pineapple'];
var clickedClasses = [];
var letters = [];
var myWord = [];
var foundWords = [];

//run Timer
timerCountdown();

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
            var fruitName = $(".fruits-list li:contains('Coconut')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "PAPAYA":
            $(".papaya").removeClass("selected");
            $(".papaya").addClass("found");
            var fruitName = $(".fruits-list li:contains('Papaya')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "AVOCADO":
            $(".avocado").removeClass("selected")
            $(".avocado").addClass("found")
            var fruitName = $(".fruits-list li:contains('Avocado')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "ORANGE":
            $(".orange").removeClass("selected")
            $(".orange").addClass("found")
            var fruitName = $(".fruits-list li:contains('Orange')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "MANGO":
            $(".mango").removeClass("selected")
            $(".mango").addClass("found")
            var fruitName = $(".fruits-list li:contains('Mango')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "PEAR":
            $(".pear").removeClass("selected")
            $(".pear").addClass("found")
            var fruitName = $(".fruits-list li:contains('Pear')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "GUAVA":
            $(".guava").removeClass("selected")
            $(".guava").addClass("found")
            var fruitName = $(".fruits-list li:contains('Guava')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "APRICOT":
            $(".apricot").removeClass("selected")
            $(".apricot").addClass("found")
            var fruitName = $(".fruits-list li:contains('Apricot')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
            break;

            case "PINEAPPLE":
            $(".pineapple").removeClass("selected")
            $(".pineapple").addClass("found")
            var fruitName = $(".fruits-list li:contains('Pineapple')")
            fruitName.addClass('active')
            var fruitIcon = fruitName.children();
            fruitIcon.addClass('active')
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
    if (foundWords.length === fruits.length) {
        $(".overlay-win").show();
    }
};

function lose () {
    if (timer == 0) {
        $(".overlay-lose").show();
    }
};
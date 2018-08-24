var beach = ['SUNBATH', 'CRABS', 'OCEAN', 'SAND', 'SWIMMING', 'VOLLEYBALL', 'TOWELL', 'FLIPFLOP', 'PALMTREE', 'JELLYFISH', 'SUNBURN', 'SCUBA'];
var wordClasses = ['sunbath', 'crabs', 'ocean', 'sand', 'swimming', 'volleyball', 'towell', 'flipflop', 'palmtree', 'jellyfish', 'sunburn', 'scuba'];
var clickedClasses = [];
var letters = [];
var myWord = [];
var foundWords = [];

//run Timer
timerCountdown();

$(".beach-grid td").click(function () {
    playSound()
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
    if (beach.includes(myWord) && (letters.length === clickedClasses.length)) {
        switch (myWord) {
            case "SUNBATH":
            $(".sunbath").removeClass("selected");
            $(".sunbath").addClass("found");
            var animalName = $(".beach-list li:contains('Sunbath')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "CRABS":
            $(".crabs").removeClass("selected");
            $(".crabs").addClass("found");
            var animalName = $(".beach-list li:contains('Crabs')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "OCEAN":
            $(".ocean").removeClass("selected")
            $(".ocean").addClass("found")
            var animalName = $(".beach-list li:contains('Ocean')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "SAND":
            $(".sand").removeClass("selected")
            $(".sand").addClass("found")
            var animalName = $(".beach-list li:contains('Sand')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "SWIMMING":
            $(".swimming").removeClass("selected")
            $(".swimming").addClass("found")
            var animalName = $(".beach-list li:contains('Swimming')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "VOLLEYBALL":
            $(".volleyball").removeClass("selected")
            $(".volleyball").addClass("found")
            var animalName = $(".beach-list li:contains('Volleyball')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "TOWELL":
            $(".towell").removeClass("selected")
            $(".towell").addClass("found")
            var animalName = $(".beach-list li:contains('Towell')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "FLIPFLOP":
            $(".flipflop").removeClass("selected")
            $(".flipflop").addClass("found")
            var animalName = $(".beach-list li:contains('Flipflop')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "PALMTREE":
            $(".palmtree").removeClass("selected")
            $(".palmtree").addClass("found")
            var animalName = $(".beach-list li:contains('Palmtree')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "JELLYFISH":
            $(".jellyfish").removeClass("selected")
            $(".jellyfish").addClass("found")
            var animalName = $(".beach-list li:contains('Jellyfish')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "SUNBURN":
            $(".sunburn").removeClass("selected")
            $(".sunburn").addClass("found")
            var animalName = $(".beach-list li:contains('Sunburn')")
            animalName.addClass('active')
            var animalIcon = animalName.children();
            animalIcon.addClass('active')
            break;

            case "SCUBA":
            $(".scuba").removeClass("selected")
            $(".scuba").addClass("found")
            var animalName = $(".beach-list li:contains('Scuba')")
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

var timer = 2;
function timerCountdown() {
  var interval = setInterval(function() {
    timer--;
    lose();
    $("#timer span").text(timer + "s");
    if (timer <= 0 || foundWords.length === beach.length){
      clearInterval(interval);
    }
  }, 1000);
}

function win () {
    if (foundWords.length === beach.length) {
        $(".overlay-win").show();
    }
};

function lose () {
    if (timer == 0) {
        $(".overlay-lose").show();
    }
};


function playSound() {
    var sound = document.querySelector(".sound");
    sound.play();
};
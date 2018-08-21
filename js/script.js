var fruits = ['Apricot', 'Avocado', 'Coconut', 'Guava', 'Mango', 'Orange', 'Papaya', 'Pear', 'Pineapple'];
var animals = ['a', 'b', 'c', 'd', 'e'];
var wordClasses = ['one', 'two', 'three', 'four', 'five'];
var clickedClasses = [];

// function checkArray (myArray, myString) {
//     if (myArray.includes(myString)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };





$(".fruits-grid td").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        // Identifier la classe de la case sur laquelle on clique
        // Rechercher la classe identifiée, dans l'array "clickedClasses"
        // Retirer la classe identifée, en supprimant l'index où elle se trouve
    }
    else {
        $(this).addClass("selected");

        // ONCLICK
        // récupérer la classe de chaque lettre cliquée
        for (var i = 0; i < wordClasses.length; i++) {
            if ( $(this).hasClass(wordClasses[i]) ) {
                clickedClasses.push(wordClasses[i]);
                break;
            }
            else {
                clickedClasses.push( 'pas de classe' );
                break;
            }
        }

        // Récupérer la lettre de la case qu'on a cliquée
        // $(this).innerHTML;
        // L'ajouter au mot en construction
console.log(clickedClasses);
    }
});


function validerMot() {
    // ON VALIDATION
    // Checker si un des mots de notre array de fruits commence par cette lettre.
    // checker si toutes les lettres ont la même classe
}




// ONCLICK FUNCTION


// RESET SI PAS LE BON MOT
/////////////////////////////
// if( mot n'existe pas, ou toutes les lettres n'ont pas la même classe ) {
//     $(".cell").removeClass("selected");
//     currentWord = '';
//     currentClass ='';
// }


// ($(this).prev().hasClass("one")) || $(this).next().hasClass("one")
// $("td.one").next();



// currentWord = 'COC';
// currentWord.length = 3;

// // ONCLICK FUNCTION
// possibleWords.forEach( function (word) {
//     if (clickedLetter === word [currentWord.length]) {
//         currentWord += maLettreClickée;
//     }
// })
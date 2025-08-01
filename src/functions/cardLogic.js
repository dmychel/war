import { playerOne, playerTwo } from "./players";
import { deck } from "./deck";

let dupArray = [...deck];

function dealCards(arr1, arr2) {
    return (playerOne.cards.push(...arr1), playerTwo.cards.push(...arr2))
};

// function shuffle(array) {
//     let newArr = [];
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         newArr.push([array[i], array[j] = [array[j]], array[i]])
//     }

//     return newArr;
// };

function splitDeck(array) {
    const middle = Math.floor(array.length / 2)
    const deckOne = array.slice(0, middle);
    const deckTwo = array.slice(middle);

    return dealCards(deckOne, deckTwo);
};

function initiateCardLogic() {
    // shuffle(dupArray);
    return splitDeck(dupArray);
};

initiateCardLogic()

export { initiateCardLogic }
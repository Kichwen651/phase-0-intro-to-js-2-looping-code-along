// Code your solutions in this file
// const cards=['spades','loves','diamond']

// function WhiteCards(cards){
//     for (let i = 0; i < cards.length; i++) {
//     console.log(`thank you ${cards[i]} message`);
//     debugger;
//   }

//   return cards;
// }

// WhiteCards(cards);

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage
  const names = ['Alice', 'Bob', 'Charlie'];
  const event = 'birthday';
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);


  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage
  countDown(5);
  
  
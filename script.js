const emojiMappings = {
  stop: '🚫',
  gwiazda: '⭐️',
  samochód: '🏎',
  buduję: '🧱',
  budzik: '⏰',
};

const useEmoji = (input) => {
  switch (true) {
    case /stop/gi.test(input):
      console.log(input.replaceAll(/stop/gi, '🚫'));
      break;
    case /gwiazda/gi.test(input):
      console.log(input.replaceAll(/gwiazda/gi, '⭐️'));
      break;
    case /samochód/gi.test(input):
      console.log(input.replaceAll(/samochód/gi, '🏎'));
      break;
    case /buduję/gi.test(input):
      console.log(input.replaceAll(/buduję/gi , '🧱'));
      break;
    case /budzik/gi.test(input):
      console.log(input.replaceAll(/budzik/gi, '⏰'));
      break;
    default:
      console.log(input);
  }
};

useEmoji('Takiemu zachowaniu mówię stop i to mocny estop');
useEmoji('GwIazda');
useEmoji('Jadę po nowy samochódy :D');
useEmoji('Właśnie buduję swoje skille w JS');
useEmoji('BuDuję SaMocHód.');

// Ao chamar a função doingThings:
const wakeUp = () => "Acordando!";
const coffee = () => "Bora tomar café";
const sleep = () => "To com sono!";

const doingThings = (func) => {
    console.log(func);
};

doingThings(wakeUp())


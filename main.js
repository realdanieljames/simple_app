let color = getInput(0);
const message = ColorCompliment(color);


function ColorCompliment(color) {
    if (color === 'orange') {
    return "Orange is my favorite color! 💕😁 📙🔶🔸";
    }
    else if (color === 'purple') {
    return("Wow!, Purple is my favorite color 💕😁 💜")
    }
    else if (color === 'green') {
    return( 'Green is my favorite color 💕😁 📗💚🍏🌲')
    }
    else if (color !== 'orange' || color !== 'purple' || color !=='green' )
    return "Sorry, your color compliment is not available yet"
}

console.log(message);




module.exports = ColorCompliment

function getInput(i) {
    return process.argv[i + 2];
}
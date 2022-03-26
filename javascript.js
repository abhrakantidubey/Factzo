var quotes = [
    "Glaciers and ice sheets hold about 69 percent of the world's freshwater.",
    "The best place in the world to see rainbows is in Hawaii.",
    "Dentistry is the oldest profession in the world.",
    "North Korea and Cuba are the only places you can't buy Coca-Cola.",
    "The entire world's population could fit inside Los Angeles.",
    "Japan is the world's most earthquake-prone country.",
    "The Earth's ozone layer will make a full recovery in 50 years.",
    "Venus is the only planet to spin clockwise. ",
    "A chef's hat has 100 pleats.",
    "Walt Disney currently holds the most Academy Awards.",
    "Queen Elizabeth II is a trained mechanic.",
    "The actors who voiced Mickey and Minnie mouse got married in real life",
    "You can hear a blue whale's heartbeat from over 2 miles away.",
    "Human teeth are the only part of the body that cannot heal themselves."
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}
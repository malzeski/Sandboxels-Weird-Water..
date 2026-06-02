
elements.astnaie = {
    color: ["#a1d6af","#1a3822"],
    behavior: behaviors.GAS,
    tempHigh: 500,
    stateHigh: "explosion",
    tempLow: -14,
    temp: 450,
  stateLow: "proton",
    properties: {timeAlive: 0},
tick: function(pixel){
  pixel.timeAlive ++
  if (pixel.timeAlive > (56*30)){
    deletePixel(pixel.x, pixel.y)
  }
},

category: "gases",
    reactions: {
        "water": { elem1: "explosion" },
},
    state: "gas",
    density: 1.98,
    conduct: 1,
    extinguish: true,
}
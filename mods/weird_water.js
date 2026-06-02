
elements.weird_water = {
    color: "#2167ff",
    behavior: behaviors.LIQUID,
    tempHigh: 100,
    stateHigh: "magma",
    tempLow: 0,
    stateLow: "steel",
    category: "liquids",
    heatCapacity: 4.184,
    reactions: {
        "salt": { elem1: "milk", elem2: null, temp1:-20 },
        "sugar": { elem1: "steel", elem2: null },
        "honey": { elem1: "steel" },
        "caramel": { elem1: "steam", elem2: null }, // theres like a billion more reactions here i cut out so i can actually send this
        "bread": { elem1: "mud" },
},
    state: "liquid",
    density: 997,
    conduct: 0.04,
    stain: -0.5,
    extinguish: false,
}
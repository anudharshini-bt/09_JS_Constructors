var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

console.log(planet1.name);
console.log(planet1.position);
console.log(planet1.type);

var buildPlanet = function (name, position, type) {
  
var planet = {};

planet.name = name;
planet.position = position;
planet.type = type;

return planet;
};

var planet2 = buildPlanet(
    "Uranus",
    7,
    "Ice Giant planet"
);

console.log(planet2.name);
console.log(planet2.position);
console.log(planet2.type);
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
};

var planet1 = new Planet( "Jupiter", 5, "Gas Giant" );

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet();

var planet2 =  new Planet("Saturn", 6, "Gas Giant" );

planet2.addMoon("Titan");
planet2.addMoon("Encledus");
planet2.addMoon("Mimas");

planet2.showPlanet();


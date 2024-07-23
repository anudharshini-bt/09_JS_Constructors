var spacer = {
    blank: function () {
      return "";
    },
  
    newLine: function () {
      return "\n";
    },
  
    line: function (length, character) {
      var longString = "****************************************";
      longString += "----------------------------------------";
      longString += "========================================";
      longString += "++++++++++++++++++++++++++++++++++++++++";
      longString += "                                        ";
  
      length = Math.max(0, length);
      length = Math.min(40, length);
      return longString.substr(longString.indexOf(character), length);
    },
  
    wrap : function (text, length, character) {
      var padLength = length - text.length - 3;
      var wrapText = character + " " + text;
      wrapText += spacer.line(padLength, " ");
      wrapText += character;
      return wrapText;
    },
  
    box: function (text, length, character) {
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
    }
  };
  
  
  // The Place constructor
  
  var Place = function (title, description) {
      var newLine = spacer.newLine();
  
      this.title = title;
      this.description = description;
      this.items = [];
      this.exits = [];
  
      this.getItemsInfo = function () {
          var itemsString = "Items: " + newLine;
          this.items.forEach(function (item) {
              itemsString += "   - " + item;
              itemsString += newLine;
          });
          return itemsString;
      };
  
      this.getExitsInfo = function () {
          var exitsString = "Exits from " + this.title;
          exitsString += ":" + newLine;
  
          this.exits.forEach(function (exit) {
              exitsString += "   - " + exit.title;
              exitsString += newLine;
          });
  
          return exitsString;
      };
  
      this.getTitleInfo = function () {
          return spacer.box(
              this.title,
              this.title.length + 4,
              "="
          );
      };
  
      this.getInfo = function () {
          var infoString = this.getTitleInfo();
          infoString += this.description;
          infoString += newLine + newLine;
          infoString += this.getItemsInfo() + newLine;
          infoString += this.getExitsInfo();
          infoString += spacer.line(40, "=") + newLine;
          return infoString;
      };
  
  
      this.showInfo = function () {
          console.log(this.getInfo());
      };
  
      this.addItem = function (item) {
          this.items.push(item);
      };
  
      this.addExit = function (exit) {
          this.exits.push(exit);
      };
  };
  
  
  // The Player constructor
  
  var Player = function (name, health) {
    var newLine = spacer.newLine();
  
    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;
  
    this.addItem = function (item) {
      this.items.push(item);
    };
  
    this.getNameInfo = function () {
      return this.name;
    };
  
    this.getHealthInfo = function () {
      return this.name + " has health " + this.health;
    };
  
    this.getPlaceInfo = function () {
      return this.name + " is in " + this.place.title;
    };
  
    this.getItemsInfo = function () {
      var itemsString = "Items:" + newLine;
  
      this.items.forEach(function (item, i) {
        itemsString += "   - " + item + newLine;
      });
  
      return itemsString;
    };
  
    this.getInfo = function (character) {
      var place = this.getPlaceInfo();
      var health = this.getHealthInfo();
      var longest = Math.max(place.length, health.length) + 4;
  
      var info = spacer.box(this.getNameInfo(), longest, character);
      info += spacer.wrap(place, longest, character);
      info += spacer.newLine() + spacer.wrap(health, longest, character);
      info += newLine + spacer.line(longest, character);
  
      info += newLine;
      info += "  " + this.getItemsInfo();
      info += newLine;
      info += spacer.line(longest, character);
      info += newLine;
  
      return info;
    };
  
    this.showInfo = function (character) {
      console.log(this.getInfo(character));
    };
  };
  this.dropLastItem = function () {
    if (this.items.length > 0) {
      return this.items.pop();
    } else {
      return "No items to drop";
    }
  };
  
  // Testing Player
  
  var library = new Place(
      "The Old Library",
      "You are in a library. Dusty books line the walls."
  );
  library.addItem("a dusty old tome");
  library.addItem("a magical scroll");

  var kitchen = new Place(
      "The Kitchen",
      "You are in a large kitchen with pots and pans hanging everywhere."
  );

  
  var player1 = new Player("Kandra", 50);
  player1.place = library;
  player1.addItem("a rusty key");
  player1.addItem("The Sword of Doom");
  
  player1.showInfo("=");
  
  var player2 = new Player("Galen", 60);
  player2.place = kitchen;
  player2.addItem("a loaf of bread");
  player2.addItem("a potion of healing");

  player2.showInfo("=");

  var player3 = new Player("Elena", 45);
  player3.place = kitchen;
  player3.addItem("a silver key");
  player3.addItem("a magical wand");

  player3.showInfo("=");
  
  player1.showInfo("=");
  player2.showInfo("=");
  player3.showInfo("=");

  console.log(player1.dropLastItem()); 
  console.log(player2.dropLastItem()); 
  console.log(player3.dropLastItem());


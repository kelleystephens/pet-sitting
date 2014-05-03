var Pet = function Pet(species, speciesImg, gender) {
  "use strict";
  var name = arguments[3] !== (void 0) ? arguments[3] : 'Max';
  var age = arguments[4] !== (void 0) ? arguments[4] : 0;
  this.species = species;
  this.speciesImg = ("../media/" + speciesImg);
  this.gender = gender;
  this.name = name;
  this.age = age * 1;
  this.energy = _.random(10, 100);
  this.full = _.random(5, 50);
  this.mood = _.random(1, 10);
};
($traceurRuntime.createClass)(Pet, {
  play: function() {
    "use strict";
    this.mood += _.random(0, 1);
    this.full -= _.random(1, 3);
    this.energy -= _.random(1, 3);
    if (this.mood >= 10) {
      this.mood = 10;
    }
    if (this.energy <= 0) {
      this.energy = 0;
    }
    if (this.full <= 0) {
      this.full = 0;
    }
    if (this.full === 0 || this.energy === 0) {
      $(("div[data-name=" + this.name + "]")).find('.img').css('background-image', 'url(../../media/rip.png)');
      $(("div[data-name=" + this.name + "]")).find('.img').text(this.name);
    }
  },
  sleep: function() {
    "use strict";
    this.energy += _.random(1, 5);
    this.mood -= _.random(0, 1);
    if (this.energy >= 100) {
      this.energy = 100;
    }
    if (this.mood <= 0) {
      this.mood = 0;
    }
  },
  eat: function() {
    "use strict";
    this.full += _.random(1, 3);
    this.energy -= _.random(1, 3);
    if (this.full >= 50) {
      this.full = 50;
    }
    if (this.energy === 0) {
      $(("div[data-name=" + this.name + "]")).find('.img').css('background-image', 'url(../../media/rip.png)');
      $(("div[data-name=" + this.name + "]")).find('.img').text(this.name);
    }
  },
  update: function() {
    "use strict";
    $($(("div[data-name=" + this.name + "]")).find('.holder > .bar').get(0)).css('width', (this.energy + "%"));
    $($(("div[data-name=" + this.name + "]")).find('.holder > .bar').get(1)).css('width', (this.full * 2 + "%"));
    $($(("div[data-name=" + this.name + "]")).find('.holder > .bar').get(2)).css('width', (this.mood * 10 + "%"));
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div data-name=" + this.name + " class=pet>\n                        <div class=img style='background-image:url(\"" + this.speciesImg + "\")'></div>\n                        <div class=info>\n                        <div class=name><strong>Name:</strong> " + this.name + "</div>\n                        <div class=gender><strong>Gender:</strong> " + this.gender + "</div>\n                        <div class=age><strong>Age:</strong> " + this.age + "</div>\n                        <div>\n                        <div class=methods>\n                        <div class=energy>Energy:</div>\n                        <div class=holder><div class=bar style='width:" + this.energy + "%'></div></div>\n                        <div class=full>Fullness:</div>\n                        <div class=holder><div class=bar style='width:" + this.full * 2 + "%'></div></div>\n                        <div class=mood>Mood:</div>\n                        <div class=holder><div class=bar style='width:" + this.mood * 10 + "%'></div></div>\n                        </div>\n                        <div>\n                        <div class=sleep><button class='button, button-primary'>Sleep</button></div>\n                        <div class=eat><button class='button, button-primary'>Eat</button></div>\n                        <div class=play><button class='button, button-primary'>Play</button></div>\n                        </div>\n                        </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map

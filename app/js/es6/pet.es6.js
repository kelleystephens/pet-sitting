/* exported Pet */
/* global _, pets */
/* jshint unused:false */

class Pet{
  constructor(species, speciesImg, gender, name='Max', age=0){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.name = name;
    this.age = age * 1;

    this.energy = _.random(10, 100);
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }

  play(){
    this.mood += _.random(0, 1);
    this.full -= _.random(1, 3);
    this.energy -= _.random(1, 3);
    if(this.mood >= 10){this.mood = 10;}
    if(this.energy <= 0){this.energy = 0;}
    if(this.full <= 0){this.full = 0;}
    if(this.full === 0 || this.energy === 0){
      $(`div[data-name=${this.name}]`).find('.img').css('background-image', 'url(../../media/rip.png)');
    }
  }

  sleep(){
    this.energy += _.random(1, 5);
    this.mood -= _.random(0, 1);
    if(this.energy >= 100){this.energy = 100;}
    if(this.mood <= 0){this.mood = 0;}
  }

  eat(){
    this.full += _.random(1, 3);
    this.energy -= _.random(1, 3);
    if(this.full >= 50){this.full = 50;}
    if(this.energy === 0){
      $(`div[data-name=${this.name}]`).find('.img').css('background-image', 'url(../../media/rip.png)');
    }
  }

  update(){
    $($(`div[data-name=${this.name}]`).find('.holder > .bar').get(0)).css('width', `${this.energy}%`);
    $($(`div[data-name=${this.name}]`).find('.holder > .bar').get(1)).css('width', `${this.full * 2}%`);
    $($(`div[data-name=${this.name}]`).find('.holder > .bar').get(2)).css('width', `${this.mood * 10}%`);
  }

  render(){                     //render is instance method inside the object, 'this' in function refers to who called it
    $('#pets').append(`<div data-name=${this.name} class=pet>
                        <div class=img style='background-image:url("${this.speciesImg}")'></div>
                        <div class=info>
                        <div class=name><strong>Name:</strong> ${this.name}</div>
                        <div class=gender><strong>Gender:</strong> ${this.gender}</div>
                        <div class=age><strong>Age:</strong> ${this.age}</div>
                        <div>
                        <div class=methods>
                        <div class=energy>Energy:</div>
                        <div class=holder><div class=bar style='width:${this.energy}%'></div></div>
                        <div class=full>Fullness:</div>
                        <div class=holder><div class=bar style='width:${this.full * 2}%'></div></div>
                        <div class=mood>Mood:</div>
                        <div class=holder><div class=bar style='width:${this.mood * 10}%'></div></div>
                        </div>
                        <div>
                        <div class=sleep><button class='button, button-primary'>Sleep</button></div>
                        <div class=eat><button class='button, button-primary'>Eat</button></div>
                        <div class=play><button class='button, button-primary'>Play</button></div>
                        </div>
                        </div>`);
  }
}

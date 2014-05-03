/* global Pet, pets */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    pet.update();
  }

  function add(){
    let speciesImg = $('#species').val();
    let species = $('#species option:selected').text();
    let gender = $('#gender').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, name, age);
    pets.push(pet);
    pet.render();
    $('#name').val('');
    $('#age').val('');
  }
})();

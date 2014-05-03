(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
  }
  function play() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.play();
    pet.update();
  }
  function sleep() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }
  function eat() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.eat();
    pet.update();
  }
  function add() {
    var speciesImg = $('#species').val();
    var species = $('#species option:selected').text();
    var gender = $('#gender').val();
    var name = $('#name').val() || undefined;
    var age = $('#age').val() || undefined;
    var pet = new Pet(species, speciesImg, gender, name, age);
    pets.push(pet);
    pet.render();
    $('#name').val('');
    $('#age').val('');
  }
})();

//# sourceMappingURL=main.map

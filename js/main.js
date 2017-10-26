/**
 * Main.js
 * @author Robin Bastien <info@robinbastien.com>
 */
var stage = 1;

$(document).ready( function() {

  // Turn display on body to beat the animation flash
  $('body').addClass('is-loaded');

  $('body').on('click', function() {
    if( stage == 1 ) {
      stage++;
      $('body').addClass('stage-2 is-animating').attr('data-stage', stage);
      $(this).removeClass('the-lion-clickable');
    }
  });

  $('.btn--cancel').on('click', function() {
    $(this).attr('disabled','disabled');
    $('.text--content').html('Pfft. You clicked "No"? Seriously?');
  });

  $('.btn--start').on('click', function() {
    updateStage( stage );
  });

  $('.enter-digits input').on('keyup', function() {
    var thisStage = $(this).attr('data-stage');
    var val = $(this).val().toUpperCase();

    if( val == data[thisStage].digit ) {

      $(this).addClass('is-correct').attr('disabled','disabled');
      updateStage( stage, true );



    } else {
      console.log('wrong');
    }
  });


});

function updateStage( stageCurr ) {
  stage = stageCurr+1;
  console.log('updated stage to ' + stage);

  if( stage == 3 ) $('body').removeClass('is-animating');
  $('input[data-stage='+ stage +']').removeAttr('disabled');
  $('body').addClass('stage-' + stage).attr('data-stage',stage);

  $('.text--intro').html('<h1>' + data[stage].heading + '</h1><p>' + data[stage].content + '</p>');
  $('body').css('background-color', data[stage].background);
  $('.enter-digits input:not(.is-correct):first').focus();

  if( stage == 8 ) {
    $('body').addClass('is-complete');
  }
}

data = {
    "3": {
      "heading": "First Clue!",
      "content": "Lodged on the ground beside your brother's beloved snowboard, you'll find something that's pretty...enLIGHTening. Take that over to the Skwinkles stash for your first digit.",
      "background": "#33403f",
      "digit": "N"
    },
    "4": {
      "heading": "Keeping it Clean",
      "content": "Sweet, you found them... Phew! Is it Cesar's week to clean, or ours? I think you should double check that.",
      "background": "#193eb0",
      "digit": "8"
    },
    "5": {
      "heading": "Dull Knives",
      "content": "Excelente! It wasn't that hard was it? However I think your knives need to be sharpened.",
      "background": "#7620ca",
      "digit": "2"
    },
    "6": {
      "heading": "Fire and Fury!",
      "content": "There's another one... it's a relaxing source of heat, just like Robin's burning love for you! <3. Though you'll need to look carefully.",
      "background": "#193eb0",
      "digit": "L"
    },
    "7": {
      "heading": "Chocolatey Goodness",
      "content": "..For the love of God Ilse! You have some nice birthday M&M's from a YEAR ago. You should go & eat them.",
      "background": "#33403f",
      "digit": "R"
    },
    "8": {
      "heading": "Claim your Gift",
      "content": "Look behind the travel suitcases in the shoe closet",
      "background": "#bb0055"
    }
 }

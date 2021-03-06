/*
 modal.js
*/

function openModal(){
  if(!GameState.tutorial){
    $('#modalScreen').show();
  }
  var mod = $('#modal');
  mod.show();
  mod.animate({opacity: 1}, MODAL_FADE_INTERVAL);
  //resizeModal();
  if($('#colorScheme').val() == 5){
    $('#customColors').show();
    $('#customColors input').blur();
  } else {
    $('#customColors').hide();
  }
  $('#openButtons').hide();
  PlayerManager.updatePlayerArea();
  _CRAPS.dealer.betManager.displayBets();
  //_CRAPS.dealer.betManager.displayBets();
  //$('#buffer').hide();
  //$('#betListing').hide();
  //setTimeout(function(){$('#buffer').show();$('#betListing').show()},1000);
}

function closeModal(){
  $('#boardColor').attr('value',  colors5.board      );
  $('#border').attr('value',      colors5.border     );
  $('#pointOff').attr('value',    colors5.pointOff   );
  $('#pointBorder').attr('value', colors5.pointBorder);
  $('#pointOn').attr('value',     colors5.pointOn    );
  $('#lines').attr('value',       colors5.lines      );
  $('#text').attr('value',        colors5.text       );
  $('#buttonText').attr('value',  colors5.buttonText );
  $('#specialText').attr('value', colors5.specialText);
  $('#finalText').attr('value',   colors5.finalText  );
  $('#dice').attr('value',        colors5.dice       );
  $('#dicePips').attr('value',    colors5.dicePips   );
  $('#betBorder').attr('value',   colors5.betBorder  );
  $('#betFill').attr('value',     colors5.betFill    );
  saveSettings();
  $('#colorScheme').val(localStorage['colors']);
  colors = eval("colors" + localStorage['colors']);
  $('#modal').animate({opacity: 0}, MODAL_FADE_INTERVAL, function(){$('#modalScreen').hide();$('#modal').hide();});
  $('#openButtons').show();
  PlayerManager.updatePlayerArea();
  _CRAPS.dealer.betManager.displayBets();
  //_CRAPS.dealer.betManager.displayBets();
  //$('#buffer').hide();
  //$('#betListing').hide();
  //setTimeout(function(){$('#buffer').show();$('#betListing').show()},1000);
}

function openGlossary(term){
  switch(term){
  case "button":
    $('#glossaryTerm').html('Button:');
    $('#glossaryDefinition').html('A circle disk on the table that either says "OFF" when there is no Point on, or says "ON" resting on top of a number in the Place Bets area, indicating that is the current Point.');
    break;
  case "point":
    $('#glossaryTerm').html('Point:');
    $('#glossaryDefinition').html('What ever number is "ON".');
    break;
  case "comeOut":
    $('#glossaryTerm').html('Come Out Roll:');
    $('#glossaryDefinition').html('A roll when there is no Point set.');
    break;
  case "345":
    $('#glossaryTerm').html('3x-4x-5x Odds:');
    $('#glossaryDefinition').html('Scheme to determine the multiplier on Odds bets, based on the Point.<br /> Points 4 &amp; 10 may bet at most 3 times the attached bet<br /> Points 5 &amp; 9 may bet at most 4 times the attached bet<br /> Points 6 &amp; 8 may bet at most 5 times the attached bet');
    break;
  case "sevenOut":
    $('#glossaryTerm').html('Seven Out:');
    $('#glossaryDefinition').html('Roll a 7 when there is a Point on, ends the roll');
    break;
  }
  $('#glossary').show();
  $('#glossaryScreen').show();
}

function closeGlossary(){
  $('#glossaryScreen').hide();
  $('#glossary').hide();
}

function clickModalButton(button){
  var modals = ['gameplay', 'rules', 'settings', 'tutorial', 'about'];
  var mod = $('#modal');
  if(mod.css('visibility')== 'hidden' || mod.css('display') == 'none'){
    openModal();
  }
  modals.splice(modals.indexOf(button), 1);
  for(i in modals){
    $('#' + modals[i] + 'Button').removeClass('blue');
    $('#' + modals[i]).hide();
  }
  $('#' + button + 'Button').addClass('blue');
  $('#' + button).show();
  //resizeModal();
  if($('#colorScheme').val() == 5){
    $('#customColors').show();
    $('#customColors input').blur();
  } else {
    $('#customColors').hide();
  }
  if(button == 'tutorial'){
    updateTutorial();
  }
}

function clickRulesButton(button){
  var modals = ['standard', 'multi', 'single', 'fire'];
  var mod = $('#modal');
  modals.splice(modals.indexOf(button), 1);
  for(i in modals){
    $('#' + modals[i] + 'Button').removeClass('red');
    $('#' + modals[i]).hide();
  }
  $('#' + button + 'Button').addClass('red');
  $('#' + button).show();
  //resizeModal();
  if($('#colorScheme').val() == 5){
    $('#customColors').show();
    $('#customColors input').blur();
  } else {
    $('#customColors').hide();
  }
}

function resizeModal(){
  $('#gameplay').height('auto');
  $('#rules').height('auto');
  $('#standard').height('auto');
  $('#multi').height('auto');
  $('#single').height('auto');
  $('#fire').height('auto');
  $('#settings').height('auto');
  $('#modal').height('auto');
  if($('#modal').height() > $(window).height() * 0.8){
    $('#modal').height($(window).height() * 0.7);
    $('#gameplay').height($('#modal').height() * 0.7);
    $('#rules').height($('#modal').height() * 0.7);
    $('#rules').height($('#modal').height() * 0.7);
    $('#standard').height($('#rules').height() * 0.7);
    $('#multi').height($('#rules').height() * 0.7);
    $('#single').height($('#rules').height() * 0.7);
    $('#fire').height($('#rules').height() * 0.7);
    $('#settings').height($('#modal').height() * 0.7);
  } else {
    $('#gameplay').height('auto');
    $('#rules').height('auto');
    $('#standard').height('auto');
    $('#multi').height('auto');
    $('#single').height('auto');
    $('#fire').height('auto');
    $('#settings').height('auto');
    $('#modal').height('auto');
  }
  $('#gameplay').width('auto');
  $('#rules').width('auto');
  $('#standard').width('auto');
  $('#multi').width('auto');
  $('#single').width('auto');
  $('#fire').width('auto');
  $('#settings').width('auto');
  $('#modal').width('auto');
  if($('#modal').width() > $(window).width() * 0.8){
    $('#modal').width($(window).width() * 0.7);
    $('#gameplay').width('auto');
    $('#rules').width('auto');
    $('#standard').width('auto');
    $('#multi').width('auto');
    $('#single').width('auto');
    $('#fire').width('auto');
    $('#settings').width('auto');
  } else {
    $('#gameplay').width('auto');
    $('#rules').width('auto');
    $('#standard').width('auto');
    $('#multi').width('auto');
    $('#single').width('auto');
    $('#fire').width('auto');
    $('#settings').width('auto');
    $('#modal').width('auto');
  }
  $('#modal').css('left', (($(window).width() - $('#modal').width())/2));
  $('#modal').css('top', (($(window).height() - $('#modal').height())/2));
}

function updateColors(){
  if($('#colorScheme').val() == 5){
    $('#customColors input').blur();
    $('#boardColor').attr('value', (colors5.board.slice(1,1) == "#")?colors5.board.slice(1):colors5.board);
    $('#border').attr('value', (colors5.border.slice(1,1) == "#")?colors5.border.slice(1):colors5.border);
    $('#pointOff').attr('value', (colors5.pointOff.slice(1,1) == "#")?colors5.pointOff.slice(1):colors5.pointOff);
    $('#pointBorder').attr('value', (colors5.pointBorder.slice(1,1) == "#")?colors5.pointBorder.slice(1):colors5.pointBorder);
    $('#pointOn').attr('value', (colors5.pointOn.slice(1,1) == "#")?colors5.pointOn.slice(1):colors5.pointOn);
    $('#lines').attr('value', (colors5.lines.slice(1,1) == "#")?colors5.lines.slice(1):colors5.lines);
    $('#text').attr('value', (colors5.text.slice(1,1) == "#")?colors5.text.slice(1):colors5.text);
    $('#buttonText').attr('value', (colors5.buttonText.slice(1,1) == "#")?colors5.buttonText.slice(1):colors5.buttonText);
    $('#specialText').attr('value', (colors5.specialText.slice(1,1) == "#")?colors5.specialText.slice(1):colors5.specialText);
    $('#finalText').attr('value', (colors5.finalText.slice(1,1) == "#")?colors5.finalText.slice(1):colors5.finalText);
    $('#dice').attr('value', (colors5.dice.slice(1,1) == "#")?colors5.dice.slice(1):colors5.dice);
    $('#dicePips').attr('value', (colors5.dicePips.slice(1,1) == "#")?colors5.dicePips.slice(1):colors5.dicePips);
    $('#betBorder').attr('value', (colors5.betBorder.slice(1,1) == "#")?colors5.betBorder.slice(1):colors5.betBorder);
    $('#betFill').attr('value', (colors5.betFill.slice(1,1) == "#")?colors5.betFill.slice(1):colors5.betFill);
    $('#customColors').show();
  } else {
    $('#customColors').hide();
  }
  //resizeModal();
  colors = eval("colors" + $('#colorScheme').val());
  draw(Board);
}

function resetColors(){
  $.extend(colors5, colors0);
  $('#betBorder').attr('value', colors5.betBorder);
  $('#boardColor').attr('value', colors5.board);
  $('#border').attr('value', colors5.border);
  $('#pointOff').attr('value', colors5.pointOff);
  $('#pointBorder').attr('value', colors5.pointBorder);
  $('#pointOn').attr('value', colors5.pointOn);
  $('#lines').attr('value', colors5.lines);
  $('#text').attr('value', colors5.text);
  $('#buttonText').attr('value', colors5.buttonText);
  $('#specialText').attr('value', colors5.specialText);
  $('#finalText').attr('value', colors5.finalText);
  $('#dice').attr('value', colors5.dice);
  $('#dicePips').attr('value', colors5.dicePips);
  $('#betFill').attr('value', colors5.betFill);
}

function saveSettings(){
  if(!isNaN(parseInt($('#startingBank').val()))){
    initBank = parseInt($('#startingBank').val());
    MODAL_FADE_INTERVAL = isNaN(parseInt($('#modalTiming').val()))?0:parseInt($('#modalTiming').val());
    BET_FORM_FADE_OUT = isNaN(parseInt($('#betFormTiming').val()))?0:parseInt($('#betFormTiming').val());
    DICE_ROLL = isNaN(parseInt($('#diceTiming').val()))?1000:parseInt($('#diceTiming').val());
    colors5.betBorder = $('#betBorder').attr('value');
    colors5.board = $('#boardColor').attr('value');
    colors5.border = $('#border').attr('value');
    colors5.pointOff = $('#pointOff').attr('value');
    colors5.pointBorder = $('#pointBorder').attr('value');
    colors5.pointOn = $('#pointOn').attr('value');
    colors5.lines = $('#lines').attr('value');
    colors5.text = $('#text').attr('value');
    colors5.buttonText = $('#buttonText').attr('value');
    colors5.specialText = $('#specialText').attr('value');
    colors5.finalText = $('#finalText').attr('value');
    colors5.dice = $('#dice').attr('value');
    colors5.dicePips = $('#dicePips').attr('value');
    colors5.betFill = $('#betFill').attr('value');
    PlayerManager.updatePlayerArea();
  } else {
    alert('Please enter a number as the initial bank!');
  }
}

function updateTutorial(){
  var _bets = _CRAPS.dealer.betManager.bets;
  if(!GameState.tutorial){
    $('#tutorialDescription').html("This tutorial will teach you how to place a Pass Line bet, as well as a Pass Line Odds bet and walk you through a Pass Line bet sequence.<br /><br />The Pass Line bet is the traditional/standard bet in Craps, and the one that most people think of when they think of Craps.<br /><br />While you are completing the tutorial, this window will describe what is happening, but you can close this window with the 'Close' button below to see your bets. To open this window again, click the 'Tutorial' button.<br /><br />Starting the tutorial will remove all your bets and reset the game.<br /><br />To start the tutorial, click 'Start Tutorial'.");
    $('#tutorialInstruction').html('');
  }else if(GameState.tutorialState == 0 && _bets.length == 0){
    $('#tutorialDescription').html('To start, notice that the <span class="keyword" onclick="openGlossary(\'button\')" title="Point Indicator">button</span> says "Off". This means the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is off. You can only place a Pass Line bet when the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is off. You may now place a Pass Line bet.<br /><br />Click on the Pass Line, and create a Pass Line bet by clicking "Create Bet". $100 is a good amount to bet.');
    $('#tutorialInstruction').html('Click the Pass Line');
  }else if(GameState.tutorialState == 0 && _bets.length == 1){
    $('#tutorialDescription').html('You\'ve now created a Pass Line bet! Roll the dice, and let\'s see what happens on your <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>!');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 1){
    $('#tutorialDescription').html('You rolled a 7! You win on the Pass Line <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>!<br /><br />You have another <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>, roll again!');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 2){
    $('#tutorialDescription').html('You rolled a 3! You lose on the Pass Line <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>, but your roll isn\'t over! When you lose the Pass Line bet on a <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>, it is automatically rebet.<br /><br />You have another <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span>, roll again!');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 3 && _bets.length == 1){
    $('#tutorialDescription').html('You rolled an 8! A <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is now set. Because a <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is set and you have a Pass Line bet on the table, you can now create a Pass Line Odds bet! You want to create a Pass Line Odds bet because the Pass Line bet only pays out 1 to 1, but Pass Line Odds bets pay out at better odds.<br /><br />Click the Pass Line to create a Pass Line Odds bet!<br /><br />This is a <span class="keyword" onclick="openGlossary(\'345\')" title="Determines the multiplier on Odds bets, based on the Point">3x-4x-5x Odds</span> table, so for a <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> of 8, you can bet a maximum of 5 times your Pass Line bet. Create a Pass Line Odds bet for $' + (_CRAPS.dealer.betManager.bets[0].bet.value * 5) + '. Create a Pass Line Odds bet by using the slider and clicking "Create Bet".');
    $('#tutorialInstruction').html('Click the Pass Line');
  }else if(GameState.tutorialState == 3 && _bets.length == 2){
    $('#tutorialDescription').html('You\'ve now created a Pass Line Odds bet! It\'s time to roll the dice again! You will roll until you roll the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> (an 8) or a 7.');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 4){
    $('#tutorialDescription').html('You rolled an 8! You won your Pass Line and Pass Line Odds bets by rolling the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span>!<br /><br />The <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is off, and you are on a <span class="keyword" onclick="openGlossary(\'comeOut\')" title="A roll when there is no Point set">come out roll</span> again! Roll the dice!');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 5){
    $('#tutorialDescription').html('You rolled a 5! A <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> is now set. Because this is a tutorial, let\'s not bet Pass Line Odds, since you already know how to do that!<br /><br />Roll the dice! You will roll until you roll the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> or a 7.');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 6){
    $('#tutorialDescription').html('You rolled a 9! Since it is neither the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> nor a 7, you get to keep rolling!<br /><br />Roll the dice! You will roll until you roll the <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> or a 7.');
    $('#tutorialInstruction').html('Click Roll');
  }else if(GameState.tutorialState == 7){
    $('#tutorialDescription').html('<span class="keyword" onclick="openGlossary(\'sevenOut\')" title="Roll a 7 when there is a Point on, ends the roll">Seven Out</span>! You rolled a 7 with a <span class="keyword" onclick="openGlossary(\'point\')" title="Roll Objective">Point</span> on, so you lose your Pass Line bet, and would have lost a Pass Line Odds bet if you had one.<br /><br />That\'s how Pass Line and Pass Line Odds bets work!<br /><br />This tutorial is over. Click "Close Tutorial" to return to the normal game. You will not be able to play until you close the tutorial.');
    $('#tutorialInstruction').html('Seven Out! Click "Close Tutorial".');
  }
}

function startTutorial(){
  $('#closeTutorial').show();
  $('#closeTutorial2').show();
  $('#tutorialInstruction').show();
  $('#startTutorial').hide();
  $('#modalScreen').hide();
  GameState.tutorial = true;
  GameState.tutorialState = -1;
  
  //reset Bets
  reset();
  GameState.tutorialState = 0;
  
  //reset Game
  nextBetId = 1;
  GameState.point = null;
  for(i in GameState.fireArray){
    GameState.fireArray[i] = false;
  }
  PlayerManager.updatePlayerArea();
  
  updateTutorial();
}

function closeTutorial(){
  GameState.tutorial = false;
  if($('#modal').css('display') != 'none'){
    $('#modalScreen').show();
  }
  $('#startTutorial').show();
  $('#closeTutorial').hide();
  $('#closeTutorial2').hide();
  $('#tutorialInstruction').hide();
  updateTutorial();
}
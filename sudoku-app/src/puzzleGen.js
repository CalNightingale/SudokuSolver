// Algorithm written wirh reference to dlbeer.co.nz/articles/sudoku.html

export function genPuzzle(){
  // instantiate variables
  var squares = Array(81).fill(null);
  var i;
  // generate top left box randomly; no constraints
  // create array of numbers 1-9
  var nums = Array(9);
  for(var j = 1; j <= nums.length; j++) {
    nums[j - 1] = j;
  }
  // clone nums list for future uses
  var topOptions = nums.slice();
  var midOptions = nums.slice();
  var botOptions = nums.slice();
  var shuffledNums = nums.slice();
  shuffleArray(shuffledNums);
  // assign top left box
  for(i = 0; i < 9; i++) {
    squares[i] = shuffledNums[i];
  }
  // determine options for top row
  while(topOptions.length > 6) {
    var x = topOptions.shift();
    if(squares[0] != x && squares[1] != x && squares[2] != x) {
      topOptions.push(x); // put element back if it isn't in the row
    }
  }
  // determine options for middle row
  while(midOptions.length > 6) {
    var x = midOptions.shift();
    if(squares[3] != x && squares[4] != x && squares[5] != x) {
      midOptions.push(x); // put element back if it isn't in the row
    }
  }
  // determine options for bottom row
  while(botOptions.length > 6) {
    var x = botOptions.shift();
    if(squares[6] != x && squares[7] != x && squares[8] != x) {
      botOptions.push(x); // put element back if it isn't in the row
    }
  }
  // fill in top row middle box
  shuffleArray(topOptions);
  for(i = 9; i < 12; i++) {
    squares[i] = topOptions.pop();
  }
  console.log(topOptions);
  console.log(midOptions);
  console.log(botOptions);

  return squares;
}

function checkRowValidity(rowNum) {
  var indices = Array(9);
  var i;
  if(rowNum == 0) i = 0;
  if(rowNum == 1) i = 3;
  if(rowNum == 2) i = 6;
  if(rowNum == 3) i = 27;
  if(rowNum == 4) i = 30;
  if(rowNum == 5) i = 33;
  if(rowNum == 6) i = 54;
  if(rowNum == 7) i = 57;
  if(rowNum == 8) i = 60;

  indices[0] = i;
  indices[1] = ++i;
  indices[2] = ++i;
  i += 7;
  indices[3] = i;
  indices[4] = ++i;
  indices[5] = ++i;
  i += 7;
  indices[6] = i;
  indices[7] = ++i;
  indices[8] = ++i;
}

// Shuffles array order in-place using Durstenfeld shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

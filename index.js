var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens 
}

function destructivelyRemoveLastKitten(){
  kittens.pop(kittens[kittens.length-1]);
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens 
}

function appendKitten(name){
  
}

function prependKitten(name){
  
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}





function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string === "I love you, Grandma.") {
=======
  if (string === '"I love you, Grandma."') {
>>>>>>> 2b7dada523586b31646981630f02f15d84ebc5d2
    return "I love you, too."
  }
  else if (string.toLowerCase() === string){
    return "I can\'t hear you!"
  } else if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
    else {
      return "Hello there."
    }
}
<<<<<<< HEAD
sayHiToGrandma("I love you, Grandma.")
sayHiToGrandma("hi")
sayHiToGrandma("HI")
sayHiToGrandma("Hi")
=======
sayHiToGrandma('"I love you, Grandma."')
sayHiToGrandma('"hi"')
sayHiToGrandma('"HI"')
sayHiToGrandma('"Hi"')
>>>>>>> 2b7dada523586b31646981630f02f15d84ebc5d2

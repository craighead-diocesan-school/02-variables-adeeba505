// ####################################
// #### ----- Life Remaining ----- ####
// ####################################

function lifeRemaining() {
  alert("The average life expectancy is 83 years")
  let age = prompt("How old are you?")
  let lifetime = 83
  let lifeleft = lifetime - age
  alert("You've got " + lifeleft +' left in you')
}

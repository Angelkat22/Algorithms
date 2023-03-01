//Задача: вызов лифта
// В доме два лифта
// реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// алгоритм будет применяться в домах разной этажности.
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А


let floorcount = 19 // Count of  floors in the house
let position_elev1 = 0 // Position of elevator 1
let position_elev2 = 8 // Position of elevator 2
let current_floor = 1 // Floor on witch have to get the elevator

function getElevator(position_elev1, position_elev2, current_floor) {
  let diff_elev1 = Math.abs(position_elev1 - current_floor) // find the difference between position of elevator 1 and floor on witch have to get the elevator

  let diff_elev2 = Math.abs(position_elev2 - current_floor) // find the difference between position of elevator 2 and floor on witch have to get the elevator

  // Compare the difference between position of elevator 1 and elevator 2 and send the correct elevator
    if (diff_elev1 < diff_elev2) {
    console.log('Send elevator 1')
    } else if (diff_elev2 < diff_elev1){

    console.log('Send elevator 2')
    } else 
    console.log('Position of elevator 1 = position of elevator 2')
}

getElevator(0, 8, 1)
getElevator(19, 19, 5)
getElevator(12, 19, 19)



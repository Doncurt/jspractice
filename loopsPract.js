/* Delare and assign an arrray*/
const myArray = ['1','2','3','4','5'];
/*Console log the enitre array*/
for(let i=0; i < myArray.length; i++){
  console.log(myArray[i]);
}
/*printing backwards*/
for(let i = myArray.length-1; i >= 0; i--){
  console.log(myArray[i]);
}

/*NESTED CHDCKS FOR EQUALITY*/

let myPlaces =['nyc','miami','sf'];

let friendPlaces= ['nyc','bali','Yo mamas house'];


for(let myPlacesPosition= 0; myPlacesPosition < myPlaces.length; myPlacesPosition++){

  for( let friendPlacesPosition =0; friendPlacesPosition< friendPlaces.length; friendPlacesPosition++){
        if(friendPlaces[friendPlacesPosition]=== myPlaces[myPlacesPosition]){
          console.log("Found it!");
        }
  }
}

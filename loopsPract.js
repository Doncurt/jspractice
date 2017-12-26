const myArray = ['1','2','3','4','5'];

for(let i=0; i < myArray.length; i++){
  console.log(myArray[i]);
}
/*printing backwards*/

for(let i = myArray.length-1;i >=0;i--){
  console.log(myArray[i]);
}

/*NESTED CHDCKS FOR EQUALITY*/

let myPlaces =['nyc','miami','sf'];
let friendPlaces= ['nyc','bali','Yo mamas house'];

for(let myPlacesIndex =0; myPlacesIndex < myPlaces.length; myPlacesIndex++){

  for(let friendPlacesIndex =0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++)		{

  		if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
        console.log(myPlaces[myPlacesIndex]);
      }

	}

}

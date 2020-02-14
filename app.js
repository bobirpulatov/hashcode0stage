

let maxSlices = 17;
let pizzaTypeCount = 4;

let pizzaTypes = [2, 5, 6, 8];



/**
 * 1. pizzaTypeCount should be equal to pizzaTypes.length
 * 2. maxSlices should not exceed pizzaTypes overall sum
 * 
 * 
*/

const calculateOrderNumber = (maxSlices, pizzaTypeCount, pizzaTypes) => {
    
    // pizzaTypeCount should be equal to pizzaTypes.length
    if (pizzaTypeCount != pizzaTypes.length)
        return 0;

    // If pizza slices is less or equal to maxSlices return all pizzaTypes
    if (pizzaTypes.reduce( (total, each) => total += each, 0 ) <= maxSlices)
        return { pizzaTypeCount, pizzaTypes}

    
}

pizzaToOrder = calculateOrderNumber(maxSlices, pizzaTypeCount, pizzaTypes);

console.log(pizzaToOrder);
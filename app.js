

let maxSlices = 17;
let pizzaTypeCount = 4;

let pizzaTypes = [2, 5, 6, 8];



/**
 * 
*/
const howManyPizzaToOrder = (maxSlices, pizzaTypeCount, pizzaTypes) =>{
    
}

/**
 * Calculate max number of pizza to order
 * @param maxSlices - Maximum amount of pizza slices
 * @param pizzaTypeCount - Count of pizza types in pizzaria
 * @param pizzaTypes - Pizza types with count of slices in array
 * @see howManyPizzaToOrder - Sub func for recursive calculation
 * @returns Obj
*/
const calculateOrderNumber = (maxSlices, pizzaTypeCount, pizzaTypes) => {
    
    // pizzaTypeCount should be equal to pizzaTypes.length
    if (pizzaTypeCount != pizzaTypes.length)
        return 0;

    // If pizza slices is less or equal to maxSlices return all pizzaTypes
    if (pizzaTypes.reduce( (total, each) => total += each, 0 ) <= maxSlices)
        return { pizzaTypeCount, pizzaTypes}
  
        
    return howManyPizzaToOrder(maxSlices, pizzaTypeCount, pizzaTypes);
    
}

pizzaToOrder = calculateOrderNumber(maxSlices, pizzaTypeCount, pizzaTypes);

console.log(pizzaToOrder);
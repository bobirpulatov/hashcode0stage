

/** @var number - Maximum count of slices */
let maxSlices = 10;

/** @var number - Pizza type count*/
let pizzaTypeCount = 4;

/** @var array - Slice count in each pizza */
let pizzaTypes = [2, 5, 6, 8];

/**
 * Calculate max number of pizza to order
 * @param {number} maxSlices - Maximum amount of pizza slices
 * @param {number} pizzaTypeCount - Count of pizza types in pizzaria
 * @param {number[]} pizzaTypes  - Pizza types with count of slices in array
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

    return howManyPizzaToOrder(maxSlices, pizzaTypes, []);    
}

/**
 * 
*/
const howManyPizzaToOrder = (maxSlices, pizzaTypes, possibleNumbers) => {
    // Initial loop
    if (possibleNumbers.length == 0)
        possibleNumbers.push({"indexes": [], "total" : 0, finish: false});

    possibleNumbers.forEach( (val, i) => {
        
    });

    possibleNumbers = possibleNumbers.map( eachNumber => {
        // if curr total pieces is less than maxSlices, proceed adding more pieces
        if (eachNumber.total < maxSlices){
            pizzaTypes.forEach( (v, i) => {
                const found = (eachNumber.indexes.find( el => el == i) != undefined);
                if (!found && eachNumber.total + v < maxSlices){
                    
                    eachNumber.indexes.push(i);
                    eachNumber.total += v;

                } else
                    eachNumber.finish = true;
            });
        }else
            eachNumber.finish = true;

        return eachNumber;
    });
    

    // Checking if it's exceeding or not
    let isExceeding = true;
    possibleNumbers.forEach( eachNumber => {
        if (!eachNumber.finish) isExceeding = false;
    });

    return (isExceeding) ? possibleNumbers : howManyPizzaToOrder(maxSlices, pizzaTypes, possibleNumbers);
}


pizzaToOrder = calculateOrderNumber(maxSlices, pizzaTypeCount, pizzaTypes);

console.log(pizzaToOrder);
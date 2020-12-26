export const calcCompare = (attribute_one, attribute_two) => {
    if(attribute_one <  attribute_two){return false}
    return true
}


export const getClosest = (item, array, getDifference) => {
    var closest, difference;

    if(!Array.isArray(array)){
        throw new Error(`Expects ${array} to be an Array`);
    }
    array.forEach((comparedItem, comparedItemIndex) => {
        var thisDifference = getDifference(comparedItem, item);
        if(thisDifference >= 0 && (typeof difference == "undefined" || thisDifference < difference)){
            difference = thisDifference;
            closest = comparedItemIndex;
        }

    });

    return closest;
}



export const lerp = (a, b, n) => {
    return (1-n) * a + n * b
}

export const getNumber = (item, array) => {
    return getClosest(item, array,(comparedItem, item) => {
        return Math.abs(comparedItem - item);
    });
}
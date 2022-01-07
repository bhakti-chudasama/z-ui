var str = 'aabbcd';
function isValid(str) {
    var splitStr = str.split('');
    console.log(splitStr);
    var maxCount = 0;
    var minCount = 0;
    let strObj = {}

    for (let i = 0; i < splitStr.length; i++) {
        if (strObj.hasOwnProperty(splitStr[i])) {
            strObj[splitStr[i]] = strObj[splitStr[i]] + 1;
        }
        else {
            strObj[splitStr[i]] = 1;
        }
    }
    let arrObj = Object.values(strObj);
    var max = Math.max(...arrObj);
    var min = Math.min(...arrObj)
    console.log(min);
    console.log(max);

    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i] === max) {
            maxCount++
        }
        if (arrObj[i] === min) {
            minCount++
        }
    }
    if (min === max) {
        return 'YES';
    }
    if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
        return 'YES';
    }
    if (max - min !== 1) {
        return 'NO';
    }
    if (maxCount === minCount) {
        return 'NO';
    }
    if (maxCount === 1 || minCount === 1) {
        return 'YES';
    }
    return 'No'
}
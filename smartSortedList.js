/**
 * Goal:Implement ascending and descending smart insertion of data, such that the array be completely sorted.

 * Given variables low med high
 * Compute their values each time new data comes in.
 * 
 * Apply special cases 0 elements, 1 element, 2 elements and 3 elements first.
 * Once we surpassed 3 elements, apply the general cases.
 * 
 * If more than 3 elements are present, first recalculate mid and high.
 * Then gauge which part of array the algorithm must focus on.
 * 
 * Each loop in turn has low1 med1 and high1 internal variables, defined outside that loop.
 * 
 * low1 mid1 and high1 are recomputed at each iteration while algorithm figures where to place
 * data based on the magnitude of the value with respect to the present values in the array.
 * 
 * Once the spot has been identified, data is inserted at that spot.
 * 
 * @author:Dmitri Dimov dimametahnet@gmail.com
 */

let testArray = [];

function smartDescInsert(testArray, newElement){
    let low = 0;
    let mid = 0;
    let high = 0;
    if(testArray.length == 0){
        testArray.splice(0,0,newElement);
    }
    else if(testArray.length == 1){
        if(newElement < testArray[0]){
            testArray.push(newElement);
        }
        else if(newElement >= testArray[0]){
            testArray.splice(0,0,newElement);
        }
    }
    else if(testArray.length == 2){
        if(newElement >= testArray[0]){
            testArray.splice(0,0,newElement);
        }
        else if(newElement < testArray[0] && newElement >= testArray[testArray.length-1]){
            testArray.splice(testArray.length-1,0,newElement);
        }
        else if(newElement < testArray[testArray.length-1]){
            testArray.push(newElement);
        }
    }
    else if(testArray.length == 3){
        if(newElement >= testArray[0]){
            testArray.splice(0,0,newElement);
        }
        else if(newElement < testArray[0] && newElement >= testArray[testArray.length-2]){
            testArray.splice(testArray.length-2,0,newElement);
        }
        else if(newElement < testArray[testArray.length - 2] && newElement >= testArray[testArray.length-1]){
            testArray.splice(testArray.length-1,0,newElement);
        }
        else if(newElement < testArray[0]){
            testArray.splice(0,0,newElement);
        }
    }
    else if(testArray.length > 3){
        high = testArray.length - 1;
        mid = Math.floor(high - (high - low)/2);
        if(newElement > testArray[low]){
            testArray.splice(0,0, newElement);
        }
        else if(newElement > testArray[mid] && newElement < testArray[low]){
            if(mid - 1 == low){
                testArray.splice(low+1,0,newElement);
            }
            else if(mid - 1 > low){
                let low1 = low;
                let high1 = mid;
                let mid1 = 0;
                for(let k = low + 1; k < mid; k++){
                    mid1 = Math.floor(high1 - (high1 - low1)/2);
                    if(newElement < testArray[mid1]){
                        low1 = mid1 + 1;
                    }
                    else if(newElement == testArray[mid1]){
                        break;
                    }
                    else if(newElement > testArray[mid1]){
                        high1 = mid1;
                    }
                }
                if(newElement < testArray[mid1]){
                    testArray.splice(mid1+1,0,newElement);
                }
                else if(newElement >= testArray[mid1]){
                    testArray.splice(mid1,0,newElement);
                }
            }
        }
        else if(newElement < testArray[mid] && newElement > testArray[high]){
            if(high - 1 == mid){
                testArray.splice(high-1,0,newElement);
            }
            else if(high - 1 > mid){
                let low1 = mid;
                let high1 = high;
                let mid1 = 0;
                for(let k = mid + 1; k < high; k++){
                    mid1 = Math.floor(high1 - (high1 - low1)/2);
                    if(newElement < testArray[mid1]){
                        low1 = mid1 + 1;
                    }
                    else if(newElement == testArray[mid1]){
                        break;
                    }
                    else if(newElement > testArray[mid1]){
                        high1 = mid1;
                    }
                }
                if(newElement < testArray[mid1]){
                    testArray.splice(mid1+1,0,newElement);
                }
                else if(newElement >= testArray[high1]){
                    testArray.splice(mid1,0,newElement);
                }
            }
        }
        else if(newElement == testArray[mid]){
            testArray.splice(mid,0,newElement);
        }
        else if(newElement < testArray[testArray.length - 1]){
            testArray.splice(testArray.length,0,newElement);
        }
    }
    return testArray;
}

function smartAscInsert(testArray, newElement){
    let low = 0;
    let mid = 0;
    let high = 0;
    if(testArray.length == 0){
        testArray.splice(0,0,newElement);
    }
    else if(testArray.length == 1){
        if(newElement > testArray[0]){
            testArray.splice(testArray.length,0,newElement);
        }
        else if(newElement <= testArray[0]){
            testArray.splice(0,0,newElement);
        }
    }
    else if(testArray.length == 2){
        if(newElement > testArray[testArray.length - 1]){
            testArray.splice(testArray.length,0,newElement);
        }
        else if(newElement > testArray[0] && newElement <= testArray[testArray.length-1]){
            testArray.splice(testArray.length-1,0,newElement);
        }
        else if(newElement <= testArray[0]){
            testArray.splice(0,0,newElement);
        }
    }
    else if(testArray.length == 3){
        if(newElement > testArray[testArray.length - 1]){
            testArray.splice(testArray.length,0,newElement);
        }
        else if(newElement > testArray[testArray.length-2] && newElement <= testArray[testArray.length-1]){
            testArray.splice(testArray.length-1,0,newElement);
        }
        else if(newElement > testArray[0] && newElement <= testArray[testArray.length-2]){
            testArray.splice(testArray.length-2,0,newElement);
        }
        else if(newElement <= testArray[0]){
            testArray.splice(0,0,newElement);
        }
    }
    else if(testArray.length > 3){
        high = testArray.length - 1;
        mid = Math.floor(high - (high - low)/2);
        if(newElement < testArray[low]){
            testArray.splice(0,0, newElement);
        }
        else if(newElement < testArray[mid] && newElement > testArray[low]){
            if(mid - 1 == low){
                testArray.splice(low+1,0,newElement);
            }
            else if(mid - 1 > low){
                let low1 = low;
                let high1 = mid;
                let mid1 = 0;
                for(let k = low + 1; k < mid; k++){
                    mid1 = Math.floor(high1 - (high1 - low1)/2);
                    if(newElement < testArray[mid1]){
                        high1 = mid1;
                    }
                    else if(newElement == testArray[mid1]){
                        break;
                    }
                    else if(newElement > testArray[mid1]){
                        low1 = mid1 + 1;
                    }
                }
                if(newElement <= testArray[mid1]){
                    testArray.splice(mid1,0,newElement);
                }
                else if(newElement > testArray[mid1]){
                    testArray.splice(mid1+1,0,newElement);
                }
            }
        }
        else if(newElement > testArray[mid] && newElement < testArray[high]){
            if(high - 1 == mid){
                testArray.splice(high-1,0,newElement);
            }
            else if(high - 1 > mid){
                let low1 = mid;
                let high1 = high;
                let mid1 = 0;
                for(let k = mid + 1; k < high; k++){
                    mid1 = Math.floor(high1 - (high1 - low1)/2);
                    if(newElement < testArray[mid1]){
                        high1 = mid1;
                    }
                    else if(newElement == testArray[mid1]){
                        break;
                    }
                    else if(newElement > testArray[mid1]){
                        low1 = mid1;
                    }
                }
                if(newElement <= testArray[mid1]){
                    testArray.splice(mid1,0,newElement);
                }
                else if(newElement > testArray[mid1]){
                    testArray.splice(mid1+1,0,newElement);
                }
            }
        }
        else if(newElement == testArray[mid]){
            testArray.splice(mid,0,newElement);
        }
        else if(newElement > testArray[testArray.length - 1]){
            testArray.splice(testArray.length,0,newElement);
        }
    }
    return testArray;
}

// let testNums = [1,7,6,9,8,5,4,3,2,0,10];

// let testNums = [];
// for (let i = 0; i < 100000; i++) { //10000
//   testNums.push(Math.floor(Math.random() * 100000)); // Generate and add a random number
// }

let testNums = [2,7,3,5,8,9,1,4,2,6,7,0];

for(let a in testNums){
    testArray = smartDescInsert(testArray, testNums[a]);
}

console.log('final array: ',testArray);
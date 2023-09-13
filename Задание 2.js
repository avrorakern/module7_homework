const zoo = {
    cat: false,
    crocodile: true,
    dog: false,
    giraffe: true,
    bear: true
}

let str = 'parrot';

function haveThisKey (obj, str) {
    for (let key in obj) {
        if (key == str) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(haveThisKey(zoo, str));
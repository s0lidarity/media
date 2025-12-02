/**
 * @param {number[]} arr
 * @return {boolean}
 */
export var uniqueOccurrences = function(arr) {
    const m = new Map();

    for(const i of arr){
        if(!m.has(i)){
            m.set(i, 1);
        } else {
            m.set(i, m.get(i)+1);
        }
    }

    const s = new Set();

    for(const v of m.values()){
        if(s.has(v)){
            return false;
        } else {
            s.add(v);
        }
    };
    return true;
};
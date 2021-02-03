// Sets have unique elements

class MySet extends Set {
    constructor(data) {
        super(data)
    }

    // First, the intersection of two sets consists of the common elements between those two sets. 
    // This function returns a set with common elements between two sets:
    intersectSets(setA, this_set = this) {
        var intersection = new Set();
        for (var elem of this_set) {
            if (setA.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }

    // A super set is a set that has all of the elements that another set has
    isSuperset(setA, this_set = this) {
        for (var elem of setA) {
            if (!this_set.has(elem)) {
                return false;
            }
        }
        return true;
    }

    // Add the elelmts of one set to the other 
    unionSet(setA, this_set = this) {
        var union = new Set(setA);
        for (var elem of this_set) {
            union.add(elem);
        }
        return union;
    }

    // returns the differance between two sets 
    differenceSet(setA, this_set = this) {
        var difference = new Set(setA);
        for (var elem of this_set) {
            difference.delete(elem);
        }
        return difference;
    }

    test() {
        return this
    }

}

const set = new MySet([1, 2, 2, 2, 5])

set.add(1)
set.add({ a: 1 })
set.add({ a: 1 })

console.log('Set:', set.test())


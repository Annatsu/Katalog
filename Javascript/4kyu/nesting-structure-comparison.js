// Kata link: https://www.codewars.com/kata/nesting-structure-comparison


Array.prototype.sameStructureAs = function(other) {
    if (Array.isArray(other))
        return other.every((v, i) => {
            vIsArray = Array.isArray(v);
            tIsArray = Array.isArray(this[i]);

            return vIsArray && tIsArray
                ? v.length === this[i].length
                    ? Array.prototype.sameStructureAs.call(this[i], v)
                    : false
                : vIsArray !== tIsArray
                    ? false
                    : true;
        });
    return false;
};

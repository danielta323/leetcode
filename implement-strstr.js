/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (!needle.length) {
        return 0;
    }
    
    for (var i = 0; i < haystack.length; i++) {
        var searched = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) {
                searched = false;
            }
        }
        if (searched) {
            return i;
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // building map
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    
    
    var result = 0;
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if (s[i+1] && romanMap[s[i] + s[i+1]] && 
            (c === 'I' || c === 'X' || c === 'C') )  
        {
            result += romanMap[s[i] + s[i+1]];
            i++;
        } else {
           result += romanMap[s[i]];
        }
    }
    return result;    
};

const isAnagram = (s:string, t:string): boolean =>{

    if (s.length !== t.length){
        return false
    } 
    
    const charMap = new Map<string, number>();
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0)+1)
    }
    for (const char of t){
        if(!charMap.has(char)) return false
        charMap.set(char, charMap.get(char)! -1)
        if (charMap.get(char) == 0){
            charMap.delete(char)
        }
    
    }
    return charMap.size ===0
}


let example = isAnagram("xat","tax")
console.log(example)
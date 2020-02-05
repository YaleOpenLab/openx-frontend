export const hasTrue = (obj) => {
    for(let o in obj) {
        if(obj[o]) return true;
    }

    return false;
};

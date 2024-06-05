// using module.exports 

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    if(b==0) throw new Error(" can not divide by zero ");
    return a/b;
}

module.exports = {
    add,sub,mul,div
};
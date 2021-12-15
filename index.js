function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function stuff(){}
}
function returnsAnAnonymousFunction(){
    return function(){}

}
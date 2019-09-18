var colors = [];
colors.push("red");
colors.push("green");
colors.duplicate();

Array.prototype.duplicate = function (){
    for (i=0; i<colors.length; i++){
        push(colors[i]);
    }
}
console.log(colors);

//challenge 1 birth days calculator
function aDays(){
    var inp = new Date(document.getElementById("myDate").value);
    var today = new Date();
    var diff = Math.floor((today.getTime() - inp.getTime())/(1000*60*60*24));
    console.log(today, inp, today.getTime(), inp.getTime() , diff)
   //document.getElementById("age").innerHTML = 'you are '+diff+' days old';

    var h1 = document.createElement('h1')
    var ans = document.createTextNode(diff+' days old');
    h1.setAttribute('id','age');
    h1.appendChild(ans);
    document.getElementById('demo').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}


var count = 0;
function Add1(){
    count += 1;
    document.getElementById('count').innerHTML = count;
    if (count >= 100){
        document.body.style.backgroundColor = 'red';
    }
}
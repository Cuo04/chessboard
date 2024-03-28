let box = document.getElementsByTagName('div');
for(let i = 0; i <= box.length; i++){
    if(i % 2 == 0){
        box[i].style.backgroundColor = 'black';
    }
    else{
        box[i].style.backgroundColor = 'gray';
    }
}
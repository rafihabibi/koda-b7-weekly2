function prosesNumbers(angka){
    let hasilArray = 1;
    for(let i = 0; i < angka.length;i++){
        if(angka[i] % 2 !== 0){
            hasilArray *= angka[i];
        }; 
    };
    return hasilArray;
}

console.log(prosesNumbers([1,2,3,4,5]));
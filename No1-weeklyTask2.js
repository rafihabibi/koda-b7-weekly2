function triangle(data){
    if(typeof data !== "number" || data < 0){
        console.log("Parameter harus bertipe data nomor dan harus nomor positif.");
        return;
    }
    
    for(let i = 1; i <= data;i++){
        let hasil1 = "";
        for(let j = 1;j <= i;j++){
            hasil1 += j + " ";
        }
        console.log(hasil1);
    }
    
}

triangle(5);
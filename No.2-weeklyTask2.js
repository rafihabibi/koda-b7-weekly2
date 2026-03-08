function buatRentang(mulai, selesai){
    if(typeof mulai !== "number" || typeof selesai !== "number" || mulai < 0 || selesai < 0 || mulai > selesai){
        return "Parameter harus bertipe number atau bertipe Positif atau harus sesuai urutan!";
    }
    let hasilRentang = [];
    for(let i = mulai;i <= selesai;i++){
        hasilRentang.push(i);
    }
    return hasilRentang.join(",");
}
console.log(buatRentang(1, 5))
const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        if(status){
            setTimeout(() =>{
                resolve("Data berhasil disimpan");
            }, 3000);
        } else {
            reject("Gagal mengambil data");
        }
    });
}

fetchData(true)
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.error(error);
    });

// .then/catch = digunakan untuk menangani hasil promise, dan untuk mengelola dari operasi asinkron seraca berurutan.

async function takeData(getStatus) {
    try {
        const getData = await fetchData(getStatus);
        console.log(getData);
    }catch(error){
        console.error(error);
    }
}

takeData(true);
//async-await = Digunakan untuk menunggu promise selesai secara berurutan. dimana di async-await ini menggunakan try-catch untuk menangkap error. 

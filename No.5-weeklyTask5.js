const getDataFromServer = (status, callback) => {
    if (status) {
        setTimeout(() => {
            const products = [
                'Product 1',
                'Product 2',
                'Product 3'
            ];
            callback(products, null);
        }, 3000);
    } else {
        const err = new Error('Failed to fetch data');
        callback(null, err);
    }
}

function processData(productData, errorMessage){
    try{
        if(errorMessage){
            throw errorMessage;
        }
        console.log(`Data diterima: ${productData} `);
    } catch(error){
        console.error(`Terjadi masalah: ${error.message}`);
    }
}
getDataFromServer(false, processData);
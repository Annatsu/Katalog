// Node Modules
const fs = require('fs');
const path = require('path');


// The katas folder.
const KATAS_DIR = path.join(__dirname, 'katas');


// Read the folders inside the katas directory.
fs.readdir(KATAS_DIR, (err, kyuFolders) => {

    // If there was an error, print that to the console and exit the script.
    if (err) {
        console.error(err);
        return;
    }


    Promise.all(kyuFolders.map((f) => readByPromise(path.join(KATAS_DIR, f))))
        .then((kyuKatas) => {
            kyuKatas
                .filter((katas) => katas.length)
                
        })
        .catch((err) => {
            console.error(err);
        });


});


function readByPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err)
                reject(err);
            else
                resolve(files);
        });
    });
}

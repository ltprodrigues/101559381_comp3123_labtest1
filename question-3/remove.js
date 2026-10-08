const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDirectory)){
    const files = fs.readdirSync(logsDirectory);

    for(const filename of files){
        console.log(`delete files...${filename}`);
        fs.unlinkSync(path.join(logsDirectory, filename));
    }

    fs.rmdirSync(logsDirectory);
} else {
    console.log('Logs directory does not exist.');
}
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), 'Logs');


//create directory if doesn exist
if (!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory)
}

//change the current working directory to logs
process.chdir(logsDirectory);

//Creating 10 files

for (let i=0; i < 10; i++){
    const filename = `log${i}.txt`;

    fs.writeFileSync(filename, `This is log file ${i}.`)
    console.log(filename)
}
import fs from "fs";
console.log('Incrementing build number...');
fs.readFile('./buildInfo.json',function(err,content) {
    if (err) throw err;
    var buildInfo = JSON.parse(content);
    buildInfo.buildRevision = buildInfo.buildRevision + 1;
    fs.writeFile('./buildInfo.json',JSON.stringify(buildInfo),function(err){
        if (err) throw err;
        console.log(`Current build number: ${buildInfo.buildRevision}`);
    })
});

const fs=require('fs/promises');
const a=5;
fs.writeFile('./text.txt',`${a} text`)
    .then(()=>{console.log(a.toString() +" has been written successfully!")})
    .then(()=>{fs.appendFile('./text.txt',`\n new line with a+1 :${a+1} text`)})
    .then(()=>{console.log((a+1).toString() +" has been written successfully!")})
    .catch((err:Error)=>{console.log(err)});

async function fileWriting(){
    await fs.writeFile('./text2.txt',`${a} text`);
    await fs.appendFile('./text2.txt',`\n\n\n${a+1} text`);
    console.log(`${a+1} has been written successfully!`);
}

try{
    fileWriting();
}
catch(err){
    console.error(err);
}
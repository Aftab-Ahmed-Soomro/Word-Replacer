let para = prompt('Enter the text:');
alert(para);

function replaceWord (removed,added) {
    let newPara = para.replace(removed,added);   
    return(`New Para : ${newPara}`);
}

let wordToReplace = prompt('Enter a character you want to replace');
let newWord = prompt('Enter a character you want to add');

console.log(replaceWord(wordToReplace,newWord));








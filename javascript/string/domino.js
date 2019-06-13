const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const str = "DOMINO"
const getStr = (s,num) => {
    // console.log(s.length,num)
    if(num <= 0) throw "YOUR INPUT IS INVAILD!! MUST GREATER THAN 1";
    return s[Number(num)%s.length - 1]
}

readline.question(`What's your number?`, (num) => {
  console.log(getStr(str,num))
  readline.close()
})

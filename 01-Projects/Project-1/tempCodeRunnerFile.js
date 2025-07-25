let bArr = Array.from("1234567890ABCDEF")
let bgc = ""
for (let i = 0; i < 6; i++) {
    const element = bArr[Math.floor(Math.random()*16)];
    bgc += element
}
console.log(bgc);
// console.log(bArr.length);
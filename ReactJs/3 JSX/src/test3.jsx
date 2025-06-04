/*
var num = parseInt(prompt("Enter Number")); 
    var str=[];
    for(var i=1;i<=10;i++){
           str.push(`${num} x ${i} = ${num*i}`);
    }

const result = str.map((line,index)=>{
    return <div key={index}>{line}</div>
});    
export default result;
*/

var num = parseInt(prompt("Enter Number")); 
    var str='';
    for(var i=1;i<=10;i++){
           str += num +" x "+i+" = "+(num*i)+'\n'; 
    }
const result = <div>{alert(str)}</div>
export default result;

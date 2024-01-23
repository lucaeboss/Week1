console.log('Hello World');
for(i=1; i<=100;i++)
{
    if(i%2===0)
    {
        console.log(`even: ${i}`);
    }
    else
    {
        console.log(`odd: ${i}`);
    }
}

let _=require('lodash');

console.log(_.camelCase('order number'))
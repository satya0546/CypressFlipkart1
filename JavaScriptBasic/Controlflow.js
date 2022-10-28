//conditional statement 
// 1. if else
// 2. swwitch case


//if else example
//hour
//if hour is between 6am and 12am: Good morning!
//if it is between 12pm and 6pm : Good Afternoon!
//Otherwise : GoodEvening!

let hour=13;
if(hour >=6 && hour <=12)
console.log('Good morning!')
else if(hour >=12 && hour <=18)
console.log('Good Afternoon!')
else
console.log('GoodEvening!!')


//Switch case

let role = 'guest'

switch (role){
   case 'guest':
   console.log('Guest User')
   break;

   case 'moderate':
   console.log('Moderate User')
   break;

   default:
    console.log('Unknown User')
}

//same example with if else

if(role === 'guest') console.log('Guest User')
else if(role === 'moderate') console.log('Guest User')
else console.log('Unknown User')


//Loops

//For loop

for(let i=0; i<=5;i++){
    console.log('Hello Miss!', i)
}

for(let i=0; i<=5;i++){
    if(i%2 !==0) console.log(i)
}

//while loop
let i=0;
while(i<=5){
    if(i%2 !==0) console.log(i)
    i++
}   

//do while loop

let j=0;
do{
    if(j%2 ==0) console.log(j)
    j++

}while (j<=5);
// 1. uzdevums

let radius = 5;

let area = Math.PI * radius * radius

let circumference = 2 * (Math.PI * radius)


// izmanto toFixed metodi ar diviem cipariem aiz komata
    
console.log("Laukums: " + area.toFixed(2));
console.log("Apkārtmērs: " + circumference.toFixed(2));

// 2. uzdevums

let age = 20;

if (age >= 18) {
    console.log("Tu esi tiesīgs balsot. ");
} else {
    console.log("Tu neesi tiesīgs balsot.");
}

// 3.a. uzdevums
// Ar for ciklu izvadīt skaitļus no 1-10 un no 10-1

//  for (let i =1; i <= 10; i++) {
    //  console.log(i)
//  }

// for (let i =10; i >= 1; i--) {
    //  console.log(i)
//  }

// 3.b. uzdevums


 let numbers = [5, 10, 15, 20, 5];
 let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    //    sum = sum + numbers[i]
        // console.log(numbers[i])
    }
    // console.log(sum)

let average = sum / numbers.length;

   console.log("Summa: " + sum);
console.log("Vidējais: " + average);
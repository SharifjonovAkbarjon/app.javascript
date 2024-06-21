
//     // masala 1

//     let A  = 15
//     let B  = 3
//     let C  = 0

//     while(A >= B){
//         A -= B
//         C ++
//     }

//     console.log(A)

//     // masala 2

//     let a = 15
//     let b = 3
//     let i = 0

//     while(a >= b){
//         a -= b
//         i ++
//     }

//     console.log(i);


//     // masala 3

//     let K = 21
//     let N = 6
//     let c = 0

//     while(K >= N){
//         K -= N
//         c ++
//     }

//     console.log("butun son " + c)
//     console.log("qoldiq son " +  K)
    

//     // 3 xil yo`l bn ishlanadigan masalalar

// {
//     // 1 masala
//     function son(array) {
//       let musbat = 0,
//         manfiy = 0;
//       for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//           musbat += array[i];
//         } else {
//           manfiy += array[i];
//         }
//       }
//       return ` ${musbat} ${manfiy}`;
//     }
//     console.log(son([2, 8, 5, 7, -9, -4]));
//   }
  
//   {
//     // 1 masla while
//     function son(array) {
//       let musbat = 0,
//         manfiy = 0;
//       let i = 0;
//       while (i < array.length) {
//         if (array[i] > 0) {
//           musbat += array[i];
//         } else {
//           manfiy += array[i];
//         }
  
//         i++;
//       }
//       return `${musbat} ${manfiy}`;
//     }
//     console.log(son([1, 4, 8, 5, 7, -9, -4]));
//   } 
  
//   {
//     // 1 masla do while
//     function son(array) {
//       let musbat = 0,
//         manfiy = 0;
//       let i = 0;
//       do {
//         if (array[i] > 0) {
//           musbat += array[i];
//         } else {
//           manfiy += array[i];
//         }
//         i++;
//       } while (i < array.length);
//       return `${musbat} ${manfiy}`;
//     }
//     console.log(son([4, -1, 4, 6, 1, 2, 5, -6, -4]));
//   }


// {
//     // 2 masala
//     function son(array) {
//       let sum = 0;
//       for (let i = 0; i <= array; i += 2) {
//         sum = sum + i;
//       }
//       return `juft sonlar yigindisi shunga teng ${sum}`;
//     }
//     console.log(son(45));
//   }
//   {
//     function son(array) {
//       let sum = 0;
//       let i = 0;
//       while (i <= array) {
//         sum = sum + i;
//         i += 2;
//       }
//       return `juft sonlar yigindisi shunga teng ${sum}`;
//     }
//     console.log(son(56));
//   }
//   {
//     function son(array) {
//       let sum = 0;
//       let i = 0;
//       do {
//         sum = sum + i;
//         i += 2;
//       } while (i <= array);
//       return `juft sonlar yigindisi shunga teng ${sum}`;
//     }
//     console.log(son(22));
//   }
  
//   {
//     // 3 masala
//     function son(a, b) {
//       let sum = 0;
//       for (let i = a; i <= b; i++) {
//         sum = sum + i;
//       }
//       return sum;
//     }
//     console.log(son(5, 20));
//   }
//   {
//     // 3 masal while 
//     function son(a, b) {
//       let i = a;
//       let sum = 0;
//       while (i <= b) {
//         sum = sum + i;
//         i++;
//       }
//       return sum;
//     }
//     console.log(son(5, 20));
//   }
//   {
//     // 3 masala do while
//     function son(a, b) {
//       let sum = 0;
//       let i = a;
//       do {
//         sum = sum + i;
//         i++;
//       } while (i <= b);
//       return sum;
//     }
//     console.log(son(5, 20));
//   }
  
//   {
//     // 4 masala
//     function son(n) {
//       for (let i = n; i >= 0; i -= 2) {
//         console.log(i);
//       }
//     }
//     console.log(son(50));
//   }
//   {
//     // 4 masalani while 
//     function son(n) {
//       let i = n;
//       while (i >= 0) {
//         console.log(i);
//         i -= 2;
//       }
//     }
//     console.log(son(69));
//   }
//   {
//     // 4 masala do while
//     function son(n) {
//       let i = n;
//       do {
//         console.log(i);
//         i -= 2;
//       } while (i >= 0);
//     }
//     console.log(son(34));
//   }
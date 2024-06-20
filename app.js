
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

let mobile = [{
   Model:"OnePlus Nord CE 2 Lite 5G",
   Brand:"OnePlus",
   ScreenSize:"6.59 inches",
   Storage:"128GB"},

   {
   Model:"Samsung Galaxy M04 Dark Blue",
   Brand:"samsung",
   ScreenSize:"6.5 inches",
   Storage:"64GB"},

   {
   Model:"realme narzo N55 ",
   Brand:"realme",
   ScreenSize:"6.72 inches",
   Storage:"128GB"},
   
   {
   Model:"Redmi A1 ",
   Brand:"redmi",
   ScreenSize:"6.56inches",
   Storage:"16GB"},

   {
   Model:"Tecno Spark 9 ",
   Brand:"Tecno Spark",
   ScreenSize:"6.6 inches",
   Storage:"64GB"}
 ]


  
 for(i=0;i<mobile.length;i++){
   console.log(mobile[1].Model,mobile[1].Storage)
}

// VM267:34 Samsung Galaxy M04 Dark Blue 64GB

  
for(i in mobile){
   console.log(mobile[1].Model,i)
}

// VM263:37 Samsung Galaxy M04 Dark Blue 0
// VM263:37 Samsung Galaxy M04 Dark Blue 1
// VM263:37 Samsung Galaxy M04 Dark Blue 2
// VM263:37 Samsung Galaxy M04 Dark Blue 3
// VM263:37 Samsung Galaxy M04 Dark Blue 4

for(i of mobile){
 console.log(i);
}

// {Model: 'OnePlus Nord CE 2 Lite 5G', Brand: 'OnePlus', ScreenSize: '6.59 inches', Storage: '128GB'}
// VM286:52 {Model: 'Samsung Galaxy M04 Dark Blue', Brand: 'samsung', ScreenSize: '6.5 inches', Storage: '64GB'}
// VM286:52 {Model: 'realme narzo N55 ', Brand: 'realme', ScreenSize: '6.72 inches', Storage: '128GB'}
// VM286:52 {Model: 'Redmi A1 ', Brand: 'redmi', ScreenSize: '6.56inches', Storage: '16GB'}
// VM286:52 {Model: 'Tecno Spark 9 ', Brand: 'Tecno Spark', ScreenSize: '6.6 inches', Storage: '64GB'}

mobile.forEach((item)=>console.log(item));

// {Model: 'OnePlus Nord CE 2 Lite 5G', Brand: 'OnePlus', ScreenSize: '6.59 inches', Storage: '128GB'}Brand: "OnePlus"Model: "OnePlus Nord CE 2 Lite 5G"ScreenSize: "6.59 inches"Storage: "128GB"[[Prototype]]: Object
// VM373:61 {Model: 'Samsung Galaxy M04 Dark Blue', Brand: 'samsung', ScreenSize: '6.5 inches', Storage: '64GB'}
// VM373:61 {Model: 'realme narzo N55 ', Brand: 'realme', ScreenSize: '6.72 inches', Storage: '128GB'}
// VM373:61 {Model: 'Redmi A1 ', Brand: 'redmi', ScreenSize: '6.56inches', Storage: '16GB'}
// VM373:61 {Model: 'Tecno Spark 9 ', Brand: 'Tecno Spark', ScreenSize: '6.6 inches', Storage: '64GB'}


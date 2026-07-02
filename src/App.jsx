// import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard1 from "./components/ProductCard1";
import ProductCard2 from "./components/ProductCard2";
import Studentcard from "./Studentcard";

const App = () => {
  const data1 = {
    name: "Apple",
    cod: 456456,
    cost: 789.56,
    image:
      "https://img.magnific.com/free-vector/apple-colorful-vector-design_341269-1123.jpg",
  };

  const data2 = {
    name: "Orange",
    cod: 388620,
    cost: 12.56,
    image:
      "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
  };

  return (
    <>
      {/* <Header></Header> */}

      {/* <ProductCard1 name="Props Apple" cod = {898989} cost={45.56}/>
    <ProductCard1 name="Props Orange" cod = {456564} cost={89.98}/> */}

      {/* <ProductCard1 props={data1}/>
      <ProductCard1 props={data2}/> */}
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>

      {/* <Studentcard name= "Harsh" age={22}/>
      <Studentcard name = "vasu" age={23}/>
      <Studentcard name="dev" age={24}/> */}

      {/* There are three roles  , and each has different nav links   */}
      {/* <Header />
      <Footer/> */}
    </>
  );
};

export default App;

// // import statements

// const App = () => {
//   // * js section
//   const name = "Megh";
//   const address = "HMT";
//   const collegeYear = 3;

//   let student = {
//     name: "megh",
//     age: 21,
//     college: "Grow More",
//   };

//   let isvalid = true

//   function welcome() {
//     let n = prompt("Enter your name : ");
//     console.log("welcome " + n);
//   }

//   // * html section
//   return (
//     <div>
//       <h2>Details of {name}</h2>
//       <h3>Name : {name}</h3>
//       <h3>Address : {address}</h3>
//       <h3>College Year : {collegeYear}</h3>

//       {/* object cannnot be used as react child and cannot be shown on screen */}
//       {/* <h2>Deatils of {student}</h2> */}

//       <h2>Details of {student.name}</h2>
//       <p>Age : {student.age}</p>
//       <p>College : {student.college}</p>

//       <p>isValid : {isvalid ? "YEs":"no"}</p>
//       {/* {welcome()} */}
//     </div>
//   );
// };

// export default App;

// /*
//  * HTML is executing once
//  * function and js inside function , getting executed twice
//  */

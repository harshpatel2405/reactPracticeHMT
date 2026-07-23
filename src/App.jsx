//  * Lecture 3

import Header from "./components/Header";
import CheckCard from "./components/CheckCard";
import MapDemo1 from "./components/MapDemo1";
import MapDemo2 from "./components/mapDemo2";
import UseStateDemo1 from "./components/useState/useStateDemo1";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import StudentProfileCard from "./components/StudentProfileCard";
import UsersProfileCard from "./components/UsersProfileCard";
import './App.css'
import Card from "./components/props/Card";
import UseStateDemo2 from "./components/useState/UseStateDemo2";
import UseStateDemo3 from "./components/useState/UseStateDemo3";

const App = () => {
  const data = [
    {
      name: "Harsh Patel",
      rollNumber: 56,
      sem: 7,
      cgpa: 9.8,
      dept: "IT",
    },
    {
      name: "Shyam Kanbar",
      rollNumber: 121,
      sem: 6,
      cgpa: 6.8,
      dept: "MBA",
    },
    {
      name: "Sujal Varma",
      rollNumber: 561,
      sem: 8,
      cgpa: 8.7,
      dept: "Mechanical",
    },
  ];

  const user = 
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhdsa_nI0ZfAr_gF1KoPURLXmpjk90dWgN_T8R3yD7g&s",
      name :  "Virat Kohli",
      age : 39,
      occupation : "Cricketer",
      height: 175,
      weight: 75,
    }
  

    const newData = [10, 20 , 30 , 40]
  return (
    <>
      <Header />
      <Routes>
        <Route path='/useStateDemo1' element={<UseStateDemo1/>}/>
        <Route path='/useStateDemo2' element={<UseStateDemo2/>}/>
        <Route path='/useStateDemo3' element={<UseStateDemo3/>}/>
      </Routes>
      {/* <Card data = {data}/> */}
      {/* <CheckCard
        name="Cherry"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENE1MBYg9MgwNwWgp5Q-6nglspd-9M5eZIBjSpEGGjmfIAmQxZtOKTKvv&s=10"
        price = {15.99}
      /> */}

      {/* <MapDemo1/> */}
      {/* <MapDemo2/> */}

      {/* <UseStateDemo1 /> */}

      {/* <StudentProfileCard studentName = "Harsh" rollNumber = {141} dept = 'IT' sem ={7} cgpa = {8.8}/>
        <StudentProfileCard studentName = "Harsh" rollNumber = {141} dept = 'IT' sem ={7} cgpa = {8.8}/>
        <StudentProfileCard studentName = "Harsh" rollNumber = {141} dept = 'IT' sem ={7} cgpa = {8.8}/>
        <StudentProfileCard studentName = "Harsh" rollNumber = {141} dept = 'IT' sem ={7} cgpa = {8.8}/> */}
        {/* 
        * data is array 
        * map -> will return us one object at a time 
        * 
         */}
      {/* {data.map((d) => {
        return <StudentProfileCard key={d.rollNumber} d  = {d}/>;
      })} */}

{/* <div className="profile-container">
    <UsersProfileCard data = {user}/>
    {/* <UsersProfileCard />
    <UsersProfileCard />
    <UsersProfileCard /> 
</div> */}
      {/* <Routes>
        <Route path="/home" element={<UseStateDemo1 />} />
        <Route path="/" element={<Header />} />
        {/* <Route path='/studentCard' element = {<StudentProfileCard/>}/> 

        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>
  );
};

export default App;



// // import React from 'react'
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ProductCard1 from "./components/ProductCard1";
// import ProductCard2 from "./components/ProductCard2";
// import Studentcard from "./Studentcard";

// const App = () => {
//   const data1 = {
//     name: "Apple",
//     cod: 456456,
//     cost: 789.56,
//     image:
//       "https://img.magnific.com/free-vector/apple-colorful-vector-design_341269-1123.jpg",
//   };

//   const data2 = {
//     name: "Orange",
//     cod: 388620,
//     cost: 12.56,
//     image:
//       "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
//   };

//   return (
//     <>
//       {/* <Header></Header> */}

//       {/* <ProductCard1 name="Props Apple" cod = {898989} cost={45.56}/>
//     <ProductCard1 name="Props Orange" cod = {456564} cost={89.98}/> */}

//       {/* <ProductCard1 props={data1}/>
//       <ProductCard1 props={data2}/> */}
//       <ProductCard2/>
//       <ProductCard2/>
//       <ProductCard2/>

//       {/* <Studentcard name= "Harsh" age={22}/>
//       <Studentcard name = "vasu" age={23}/>
//       <Studentcard name="dev" age={24}/> */}

//       {/*  There are three roles  , and each has different nav links   */}
//       {/* <Header />
//       <Footer/> */}
//     </>
//   );
// };

// export default App;

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

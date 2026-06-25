// import statements

const App = () => {
  // * js section
  const name = "Megh";
  const address = "HMT";
  const collegeYear = 3;

  let student = {
    name: "megh",
    age: 21,
    college: "Grow More",
  };

  let isvalid = true

  function welcome() {
    let n = prompt("Enter your name : ");
    console.log("welcome " + n);
  }

  // * html section
  return (
    <div>
      <h2>Details of {name}</h2>
      <h3>Name : {name}</h3>
      <h3>Address : {address}</h3>
      <h3>College Year : {collegeYear}</h3>

      {/* object cannnot be used as react child and cannot be shown on screen */}
      {/* <h2>Deatils of {student}</h2> */}

      <h2>Details of {student.name}</h2>
      <p>Age : {student.age}</p>
      <p>College : {student.college}</p>

      <p>isValid : {isvalid ? "YEs":"no"}</p>
      {/* {welcome()} */}
    </div>
  );
};

export default App;

/*
 * HTML is executing once
 * function and js inside function , getting executed twice
 */

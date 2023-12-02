// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React from 'react';

// const  App = () => {
//   return (
//     <>
//       <MyName />
//       {/* // nested components */}
//       <h1 className="myclass">Hello World </h1>
//       {/* <img src = " " alt = ""/> */}
//     </>
//     //<p>hello</p> ==> this can not written here only inside div

//     // <section>
//     //   <h1>Hello World</h1>
//     // </section>

//     // <React.Fragment>
//     //   <h1>Hello World</h1>
//     // </React.Fragment>

//     // <>
//     //   <h1>Hello World</h1>
//     // </>
//   );
// };

// const MyName = () => {
//   return <h1>Likhit Sri Sai</h1>;
// };

// // const App = () => {
// //     // return React.createElement("h1",{},"Hello World1");
// //     // if another div got added then it is difficult then we need to write like this
// //     return React.createElement(
// //       "div",
// //       {},
// //       React.createElement("h1",{},"Hello World")
// //     )
// //     //but in the above approach it is simple to write.
// // }

// // const App = () => {
// //   return (
// //     <div>
// //       Welcome to ReactJs Course
// //     </div>
// //   )
// // }
// export default App;


import React from 'react'
// import Restaurant from './component/Basics/Restaurant';
import UseState from './component/Hooks/useState'
import UseEffect from './component/Hooks/useEffect'
import UseReducer from './component/Hooks/useReducer'
import Todo from './component/todoreact/todo'
import Temp from './component/weather/temp'

const App = () => {
  return (
    <>
      {/* <UseReducer/>
       */}
       {/* <Todo/> */}
       {/* <Temp/> */}
       <UseState/>
    </>
  )
}

export default App

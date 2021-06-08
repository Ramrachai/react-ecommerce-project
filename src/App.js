import "./App.css";
import Homepage from "./pages/homepage/homepage.component.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Hats page </h1>
      <p>{`${props.match.url}`}</p>
      <button onClick={()=>{props.history.push('/')}}>Home</button>
    </div>
  );
};
const Jackets = (props) => {
  console.log('jackets:', props);
  return (
    <div>
      <h1> Jackets page </h1>
      <p>{`${props.match.url}`}</p>
      <button onClick={()=>{props.history.push('/')}}>Home</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={Jackets} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

// function App () {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/' > Home</Link>
//           </li>
//           <li>
//             <Link to='/about'>About</Link>
//           </li>
//           <li>
//             <Link to='/users'>Users</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path='/' exact> <Homepage/> </Route>
//         <Route path='/about' exact> <About/> </Route>
//         <Route path='/users' exact> <Users/> </Route>
//       </Switch>
//     </Router>
//   )
// }

// function About(){
//   return <h2>About page</h2>
// }
// function Users(){
//   return <h2>User page</h2>
// }

// export default App;

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import './App.css';
// import Homepage from './pages/homepage/homepage.component.jsx'

// export default function App(){
//   return (
//     <Router>
//        <nav>
//          <ul>
//            <li>
//              <Link to='/'> Homeaa </Link>
//            </li>
//            <li>
//              <Link to='/about'> About </Link>
//            </li>
//            <li>
//              <Link to='/users'> Users </Link>
//            </li>
//          </ul>
//        </nav>

//       <Switch>
//         <Route path='/' exact> <Homepage/> </Route>
//         <Route path='/about' exact> <About/> </Route>
//         <Route path='/users' exact> <Users/> </Route>
//       </Switch>
//     </Router>
//   )
// }

// function About (){
//   return <h1>About page </h1>
// }
// function Users(){
//   return <h1>Users Page</h1>
// }

// import React from 'react'
// import { Route, Link, Switch } from "react-router-dom";
// import Homepage from "./pages/homepage/homepage.component.jsx"
// import "./App.css"
// export default function App() {
//   return (
//     <div>

//         <nav>
//           <ul>
//             <li>
//               <Link to='/'> Home </Link>
//             </li>
//             <li>
//               <Link to='/about'> About </Link>
//             </li>
//             <li>
//               <Link to='/users'> Users </Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/"> <Homepage></Homepage></Route>
//           <Route exact path="/about"> <About></About></Route>
//           <Route exact path="/users/:userId"> <Users></Users></Route>
//         </Switch>

//     </div>
//   )
// }

// function About(){
//   return <h1>About us page </h1>
// }
// function Users(){
//   return <h1>Users page </h1>
// }

// import React from 'react'
// import { Route, Link, Switch } from "react-router-dom";
// import "./App.css"

// const Homepage = (props) =>{
//  console.log("Homepage log:",props);
// return <div>
//     <Link to ='/topics'> Topics</Link>
//     <button onClick= {()=> props.history.push('/topics')}>Topics</button>
//     <h1>Home page </h1>
//   </div>
// }

// const TopicsList = (props) =>{
//   console.log('list:',props);
//   return <div>
//     <h1>Topics List page </h1>
//   </div>
// }

// const TopicDetails = (props) =>{
// console.log('details:',props);
//   const id = props.match.params.topicId;
//   return <div>
//     <h1>Topic Details page: {id} </h1>
//   </div>
// }

// function App(){
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to ='/'>Homepage </Link>
//           </li>
//           <li>
//             <Link to= '/topics'>Topics list </Link>
//           </li>
//           <li>
//             <Link to ='/topics/:topicId'>Topics Detail </Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//       <Route exact path ="/" component={Homepage}/>
//       <Route exact path ="/topics" component={TopicsList}/>
//       <Route exact path ="/topics/:topicId" component={TopicDetails}/>
//       </Switch>
//     </div>
//   )
// }

// export default App;

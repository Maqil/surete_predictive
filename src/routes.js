import React from "react";
import {
  BrowserRouter as Router,
  Route
  // Redirect,
  // withRouter
} from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import AppBar from "./components/appbar/AppBar";
import Header from "./components/header/Header";
import FilterMenu from "./components/filter/FilterMenu";
// import FilterBar from "./components/home/FilterBar";
// import Test from "./components/appbar/Test";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/home" component={AppBar} />
      <Route path="/home" component={Header} />
      <Route path="/home" component={FilterMenu} />
      {/* <Route path="/errorlogin" component={Errorlogin} />
      <PrivateRoute path="/home" component={AppBar} /> */}
      {/* <PrivateRoute path="/protected" component={Protected} /> */}
    </Router>
  );
}

export default AppRouter;

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/errorlogin",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function Errorlogin() {
//   return <h6>You must logging first </h6>;
// }

// class Login extends Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;

//     if (redirectToReferrer) return <Redirect to={from} />;

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

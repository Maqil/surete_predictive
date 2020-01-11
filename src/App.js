import React, { Component } from "react";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import store from "./store";

// material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Provider store={store}>
//         <Routes />
//       </Provider>
//     </ThemeProvider>
//   );
// }

// export default App;

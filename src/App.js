import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import store from "./store";

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

// Let's convert App from class to function to get into the mood!
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

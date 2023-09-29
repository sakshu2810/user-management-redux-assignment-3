import AppLayout from "../../components/containers/appLayout";
import HomeHeader from "./homeHeader";
import  UserTable  from "../userTable/userTable";
import { Provider } from "react-redux";
import store from "../../stores/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },  
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          fontSize: 35
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 20, 
        },
      },
    },
  },
});

function Home() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppLayout />
        <HomeHeader />
        <UserTable />
      </div>
    </ThemeProvider>
  </Provider>
  );
}

export default Home;

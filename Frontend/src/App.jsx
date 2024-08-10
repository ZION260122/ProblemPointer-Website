import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Raleway, Ariel",
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    Home
    </ThemeProvider>
  )
}

export default App

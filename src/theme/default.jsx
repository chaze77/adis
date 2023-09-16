import { createTheme } from "@mui/material/styles";

// Определите пользовательскую тему
const theme = createTheme({
  palette: {
    primary: {
      main: "#107c10", // Основной цвет
    },
    secondary: {
      main: "#786161", // Второстепенный цвет
    },
  },
  typography: {
    fontFamily: "xbox-helvetica, sans-serif", // Шрифт по умолчанию
    fontSize: 16, // Размер шрифта по умолчанию
  },
});

export default theme;

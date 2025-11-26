import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { theme as styledTheme } from "./styles/theme"
import { ThemeProvider } from "styled-components"
import { ThemeProvider as CustomThemeProvider, useTheme } from "./contexts/ThemeContext"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  const currentTheme = {
    colors: {
      ...styledTheme.colors[theme], 
      error: styledTheme.colors.error,
      success: styledTheme.colors.success
    },
    spacing: styledTheme.spacing,
    borderRadius: styledTheme.borderRadius,
    shadows: styledTheme.shadows
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  )
}

export default App
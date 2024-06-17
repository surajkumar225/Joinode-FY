import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Compiler from "./pages/Compiler"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner"

function App() {

  return (
    <>
    <Toaster position="bottom-right"/>
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/compiler" element={<Compiler />}/>
        <Route path="/compiler/:urlid" element={<Compiler />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </ThemeProvider>

    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import { CertificatesScreen, ContactScreen, HomeScreen, ProjectsScreen } from "../screens/"


export const EnglishRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/projects' element={<ProjectsScreen />} />
        <Route path='/certificates' element={<CertificatesScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
    </Routes>
  )
}

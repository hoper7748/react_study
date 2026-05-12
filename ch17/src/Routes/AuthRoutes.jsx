import { Route, Routes } from "react-router"
import Join from "../Pages/Join/Join"

function AuthRoutes() {

    return (
        <>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/join" element={<Join />} />
            </Routes>
        </>
    )
}

export default AuthRoutes
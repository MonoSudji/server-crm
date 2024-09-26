import { ConfigProvider, theme } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";


export default function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorBgContainer: '#17191b',
                },
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginForm />}/>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    )
} 
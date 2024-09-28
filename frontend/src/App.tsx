import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useAppSelector } from "./hooks/useAppSelector";


function App() {
    const themeIsDark = useAppSelector((state) => state.settings.themeIsDark);
    
    return (
        <ConfigProvider
            theme={{
                algorithm: themeIsDark
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                    colorBgContainer: themeIsDark ? "#1e2022" : "white",
                    colorBgBase: themeIsDark ? "#17191b" : "white",
                    colorText: themeIsDark ? "white" : "black",
                },
            }}
        >
            <div
                style={{
                    backgroundColor: themeIsDark ? "#1e2022" : "#f9fafc",
                    height: "100vh",
                }}
            >
                <RouterProvider router={router} />
            </div>
        </ConfigProvider>
    );
}

export default App;

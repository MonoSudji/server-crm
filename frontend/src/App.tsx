import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes"

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
            <RouterProvider router={router} />
        </ConfigProvider>
    )
} 
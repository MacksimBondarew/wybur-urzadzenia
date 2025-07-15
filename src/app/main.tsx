import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.module.css";
import App from "./App.tsx";
import { Sprite } from "../components/shared/icon/sprite.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Sprite />
        <App />
    </StrictMode>
);

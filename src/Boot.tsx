import { css, Global } from "@emotion/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import hexagon from "./assets/hexagon.svg";
import HeaderMenu from "./components/HeaderMenu";
import Agents from "./pages/Agents";
import { ConfigProvider } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          margin: 0,
          display: "grid",
          gridTemplateRows: "80px calc(100vh - 80px)",
        }}
      >
        <HeaderMenu />

        <div style={{ height: "100%", padding: "16px" }}>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Agents />,
      },
    ],
  },
]);

function Boot() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

          * {
            box-sizing: border-box;
          }

          html,
          body,
          #root,
          h1 {
            margin: 0;
            padding: 0;
            font-family: "Inter", sans-serif;
          }

          #root {
            background-color: #111;
            background-image: url(${hexagon});
            background-size: cover;
            background-repeat: no-repeat;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          li,
          ul {
            color: #fff;
          }

          .ant-modal-close {
            color: #fff !important;
          }

          .ant-modal-mask {
            backdrop-filter: blur(2px);
          }

          ul {
            list-style: none;
            padding: 0;
          }

          /* Smooth scrollbar styles */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #222;
          }

          ::-webkit-scrollbar-thumb {
            background: #444;
            border-radius: 5px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          /* For Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #444 #222;
          }
        `}
      />

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#000e",
              headerBg: "#000a",
              titleColor: "#fff",
            },
            Input: {
              colorBgContainer: "#000a",
              colorBorder: "#000a",
              colorText: "#fff",
              colorTextPlaceholder: "#bbb",
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default Boot;

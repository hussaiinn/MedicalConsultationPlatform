"use client";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import { useEffect } from "react";
// import { UserProvider } from '@components/userContext';
import { AuthProvider } from "./Providers";
import { Provider } from "react-redux";
import store from "./store";
// import Provider from '@components/Provider';
// import { Session } from 'next-auth';

// export const metadata = {
//     title: 'DocConnect',
//     description: 'Enter a new world of Meds',
// }

const RootLayout = ({ children }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <html lang="en">
        <body>
          <Provider store={store}>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <AuthProvider>{children}</AuthProvider>
            </main>
          </Provider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

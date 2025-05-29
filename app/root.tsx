import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { NotFoundPage } from "./components/NotFoundPage";
import { ServerErrorPage } from "./components/ServerErrorPage";
import { GeneralErrorPage } from "./components/GeneralErrorPage";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // render 404 page if the error is a 404
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  // render server error page for server errors (5xx status codes)
  if (isRouteErrorResponse(error) && error.status >= 500) {
    return (
      <ServerErrorPage status={error.status} statusText={error.statusText} />
    );
  }

  // render general error page for other errors
  return <GeneralErrorPage />;
}

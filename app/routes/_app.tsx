import { Links, LiveReload, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import { ReactNode } from 'react';
import Navbar from '~/components/Navbar';
import GeneralErrorPage from '~/error/GeneralErrorPage';

export const meta: MetaFunction = () => {
  return [
    { title: "Criss Portfolio" },
    { name: "description", content: "An updated latest portfolio of Criss in 2024." },
  ];
};

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
import { MetaFunction, Outlet } from '@remix-run/react';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => {
  return [
    { title: "Criss Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}
import React from 'react';
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import "./Layout.css";
import TopAlbum from './components/topAlbum/TopAlbum';

/**
 * Represents the layout component of the application.
 * Renders the navigation bar and hero section components.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TopAlbum/>
    </>
  );
};

export default Layout;

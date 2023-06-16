import React from 'react';
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import "./Layout.css";
import TopAlbum from './components/topAlbum/TopAlbum';
import NewAlbum from './components/newAlbum/NewAlbum';
import Faqs from './components/Faqs/Faqs';

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
      <NewAlbum/>
      <Faqs/>
    </>
  );
};

export default Layout;

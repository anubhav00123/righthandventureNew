import AboutPage from "@/components/AboutPage";
import BreadBanner from "@/components/BreadBanner";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import ServiceSection from "@/components/ServiceSection";
import Strategy from "@/components/Strategy";
import WhyChoose from "@/components/WhyChoose";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us | Righthandventure</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <BreadBanner
        title="About Us"
        backgroundImage="/image/image-1920x1280-17.jpg"
      />
      <AboutPage />
      <main>
        <ServiceSection />
        <WhyChoose />
        <Counter />
        <Reviews />
        <FAQ />
        <Strategy />
      </main>
      <Footer />
    </>
  );
};

export default about;

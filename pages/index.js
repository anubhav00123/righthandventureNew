import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import EstateBanner from "@/components/EstateBanner";
import EstateServices from "@/components/EstateServices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Reviews from "@/components/Reviews";
import ServiceSection from "@/components/ServiceSection";
import Strategy from "@/components/Strategy";
import WhyChoose from "@/components/WhyChoose";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Righthandventure</title>
        <meta name="description" content="Righthandventure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>
        <Banner />
        <AboutSection />
        <CTA />
        <ServiceSection />
        <WhyChoose />
        <Counter />
        <EstateServices/>
        <EstateBanner/>
        <Reviews />
        <Partner />
        <FAQ />
        <Strategy />
      </main>
      <Footer />
    </>
  );
}

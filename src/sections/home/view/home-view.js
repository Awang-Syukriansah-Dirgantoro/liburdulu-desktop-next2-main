"use client";

import { useScroll } from "framer-motion";

import MainLayout from "src/layouts/main";
import HomeCleanInterfaces from "../home-clean-interfaces";
import ScrollProgress from "src/components/scroll-progress";

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HomeCleanInterfaces />
    </MainLayout>
  );
}

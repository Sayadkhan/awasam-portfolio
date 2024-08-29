"use client";

import WaterWaveWrapper from "@/components/visualEffect/WaterWaveWrapper";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => <div className="h-screen"></div>}
    </WaterWaveWrapper>
  );
}

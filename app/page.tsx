"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
      {() => (
        <div className="h-screen p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}

"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Profile from "@/components/ui/Profile";
import TextArea from "@/components/ui/TextArea";
import WaterWaveWrapper from "@/components/visualEffect/WaterWaveWrapper";
import clsx from "clsx";
import Image from "next/image";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";

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
                <Button>
                  <GoHomeFill />
                  Basic Button
                </Button>

                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com/">Google</Button>
              </div>
              <Input
                type="email"
                placeholder="Full Name"
                icon={<FaRegUserCircle />}
              />
              <TextArea placeholder="Say about" icon={<FaRegUserCircle />} />
              <Profile />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}

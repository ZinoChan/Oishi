import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-secondary flex items-center justify-center">
      <Image src="/images/loader.gif" width={150} height={150} alt="loading" />
    </div>
  );
};

export default Loader;

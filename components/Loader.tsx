import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 text-center left-0 h-screen w-screen overflow-hidden bg-secondary flex items-center justify-center">
      <div>
        <h3 className="text-black font-main font-bold text-xl mb-6">
          backing...
        </h3>
        <Image
          src="/images/loader.gif"
          width={150}
          height={150}
          alt="loading"
        />
      </div>
    </div>
  );
};

export default Loader;

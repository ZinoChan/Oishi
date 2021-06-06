import Image from "next/image";

const AuthLoader = () => {
  return (
    <div className="fixed text-center top-0 left-0 h-screen w-screen overflow-hidden bg-secondary flex items-center justify-center">
      <div>
        <h3 className="text-black font-main text-xl mb-6">Authenticating...</h3>
        <Image src="/images/spinner.gif" width={80} height={80} alt="loading" />
      </div>
    </div>
  );
};

export default AuthLoader;

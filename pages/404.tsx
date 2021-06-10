import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen w-full flex items-center text-center justify-center">
      <div>
        <div
          style={{ backgroundImage: "url(/images/404.jpg)" }}
          className="flex items-center justify-center bg-contain h-96 w-96 max-w-full mb-6"
        >
          <h1 className="text-7xl font-main font-bold">404</h1>
        </div>
        <p className="text-2xl font-main mb-4">Page Not Found</p>
        <Link href="/">
          <a className="bg-primary text-white rounded px-2 py-1">
            Back To Home
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

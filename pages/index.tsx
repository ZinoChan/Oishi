import Navbar from "@components/Navbar";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <section
      style={{ backgroundImage: "url(/images/home-bg.jpg)" }}
      className="bg-center w-full min-h-screen  h-full py-20 items-center flex"
    >
      <Navbar />
      <div className="max-w-screen-xl px-2 mx-auto w-full">
        <div className="grid grid-cols-4">
          <div className="self-center 2xl:block hidden">
            <h2 className="text-3xl font-main font-bold mb-4">Wait Less</h2>
            <p className="font-poppins leading-normal text-md text-gray-500">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
          </div>
          <div className="relative text-center 2xl:col-span-2 col-span-4">
            <img src="/images/burger.png" className="mx-auto" alt="burger" />
            <h1
              className={`${styles.text_stroke} font-pacifico sm:text-9xl text-7xl text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              Tasty
            </h1>
            <button className="transition-all hover:shadow-btn_lg shadow-btn mt-8 px-6 py-3 font-bold rounded bg-primary text-white font-main uppercase">
              order now
            </button>
          </div>
          <div className="self-end 2xl:block hidden">
            <h2 className="text-3xl font-main font-bold mb-4">Eat More</h2>
            <p className="font-poppins leading-normal text-md text-gray-500">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

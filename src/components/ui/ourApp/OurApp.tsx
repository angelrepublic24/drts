import Image from "next/image";
import Link from "next/link";

export const OurApp = () => {
  const apps = [
    {img: "/app/ciber.png" },
    {img: "/app/uasd.png" },
    {img: "/app/voter.png" },
  ];
  return (
    <section id="mobile-apps" className="py-20 bg-white text-teal-600 mx-auto w-3/4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Download mobile apps for fast, easy access!
      </h2>
      <div className="  grid grid-cols-1 md:grid-cols-3 ">
        {apps.map((app, index) => (
          <div key={index} className="w-full border-spacing-1 mb-2">
            <div>
              <Image
                src={app.img}
                width={500}
                height={100}
                alt=""
                className="w-full"
                quality={100}
              />
            </div>
            <div className="pt-8 w-full overflow-hidden flex justify-center">
              <Link
                href={""}
                className="border border-teal-600 px-2 py-1 w-[40%] rounded-md font-medium text-center text-teal-600 hover:bg-teal-600 hover:text-white mr-4"
              >
                <div className="flex justify-start">
                <div className="flex items-center mr-2">
                    <Image src={'/app/googleplay.png'} width={25} height={50} quality={100} alt=""/>
                </div>
                <div className="text-left">
                    <span className="text-xs md:text-sm text-gray-400 ">Get it on</span>
                    <p className="text-black text-sm md:text-md">Google Play</p>
                </div>
                </div>
                 
              </Link>
              <Link
                href={""}
                className="border border-teal-600 px-2 py-1 w-[40%] rounded-md font-medium text-center text-teal-600 hover:bg-teal-600 hover:text-white"
              >
                <div className="flex justify-start">
                <div className="flex items-center mr-2">
                    <Image src={'/app/appleplay.png'} width={25} height={50} quality={100} alt=""/>
                </div>
                <div className="text-left">
                    <span className="text-xs md:text-sm text-gray-400 ">Get it on</span>
                    <p className="text-black text-sm md:text-md">App Store</p>
                </div>
                </div>
                 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

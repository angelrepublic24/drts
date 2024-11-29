import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="text-teal-600 w-11/12 mx-auto rounded-3xl"
      style={{ background: "#e4fcf7" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center w-full items-center">
          <Image
            src={"/about.png"}
            width={600}
            height={100}
            alt="about"
            className="rounded-xl w-3/4 h-3/4"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center flex justify-center flex-col h-full">
        <p className="text-center text-black font-light mb-2 bg-gray-50 w-32 rounded-xl py-1">About us</p>

          <h2 className="text-3xl font-bold text-left mb-12">
            Learn more about our company
          </h2>
          <p className="mb-6 text-left">
            We are a company dedicated to the mass distribution of software, to
            satisfy all the technological needs that we can cover in your
            Company. DRTS complies with the strictest standards and
            methodologies of software production. We design and develop web
            pages, applications for personal computers, web applications,
            applications for cell phones (apps) and more services, all of this
            committed to the improvement of your company to move forward
            together towards the future, with clear, concise and precise ideas.
          </p>
          <p className="text-left">
            With a team dedicated to the design, sale, installation, repair, and
            maintenance of the system, we have extensive experience, providing
            service throughout the national territory.
          </p>
          <p className="text-left">
            We adhere to strict discipline in our work, carried out under the
            highest standards of quality and service, to satisfy the needs of
            our distinguished clientele.
          </p>
        </div>
      </div>
    </section>
  );
};

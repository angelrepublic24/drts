export const About = () => {
    return (
        <section id="about" className="py-20 text-teal-600 w-11/12 mx-auto rounded-3xl" style={{background: '#e4fcf7'}}>
        <h2 className="text-3xl font-bold text-center mb-12">Learn more about our company</h2>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-6">
            We are a company dedicated to the mass distribution of software, satisfying technological needs for businesses. Our services include web design, app development, and more.
          </p>
          <img src="/about-image.jpg" alt="About Us" className="mx-auto rounded-lg shadow-md" />
        </div>
      </section>
    )
}
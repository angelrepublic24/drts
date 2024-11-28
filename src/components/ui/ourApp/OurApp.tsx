export const OurApp = () => {
    return (
        <section id="mobile-apps" className="py-20 bg-white text-teal-600">
            <h2 className="text-3xl font-bold text-center mb-12">Download mobile apps for fast, easy access!</h2>
            <div className="flex justify-center space-x-8">
            {["App Store", "Google Play"].map((platform, index) => (
                <button
                key={index}
                className="border border-teal-600 px-6 py-3 rounded-md font-medium text-teal-600 hover:bg-teal-600 hover:text-white"
                >
                Get it on {platform}
                </button>
            ))}
            </div>
        </section>

    )
}
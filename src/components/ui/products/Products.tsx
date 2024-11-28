export const Products = () => {
    return (
        <section id="products" className="py-20 bg-white text-teal-800">
        <h2 className="text-3xl font-bold text-center mb-12">Discover our products and services for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            { name: "OSCMI", description: "Inventory Control System" },
            { name: "LOANS", description: "Loan System" },
            { name: "REDIES", description: "Property Inventory Manager" },
            { name: "VOTER CONTROLLER", description: "Voting System" },
            { name: "MIGECO", description: "Content Manager" },
            { name: "FIDELISYS", description: "Customer Loyalty System" },
            { name: "SIVAMAS", description: "Travel System" },
            { name: "VLAnime", description: "Online Sales" },
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
}
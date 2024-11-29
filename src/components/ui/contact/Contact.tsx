export const Contact = () => {
    return (
        <section id="contact" className="py-20 w-11/12 bg-teal-100 mx-auto rounded-3xl mb-10">
        <h2 className="text-3xl font-bold text-center mb-12">Reach out to us for any questions or support!</h2>
        <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-3xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <input type="text" placeholder="First Name*" className="border rounded-lg px-4 py-2" />
            <input type="text" placeholder="Last Name" className="border rounded-lg px-4 py-2" />
            <input type="email" placeholder="Email*" className="border rounded-lg px-4 py-2" />
            <input type="tel" placeholder="Phone" className="border rounded-lg px-4 py-2" />
            <textarea placeholder="Comments..." className="col-span-2 border rounded-lg px-4 py-2"></textarea>
            <button className="col-span-2 bg-teal-600 text-white py-3 rounded-lg">Submit</button>
          </form>
        </div>
      </section>
    )
}
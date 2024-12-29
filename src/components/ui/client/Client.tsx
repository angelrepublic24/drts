import Image from "next/image"

export const Client = () => {

  const clients = [
    // {img: '/client/drts.png', bg: 'bg-[#001427]'},
    {img: '/client/suple.png'},
    {img: '/client/flores.png'},
    {img: '/client/liriano.png', bg: 'bg-[#ebebeb]'},
    {img: '/client/civel.png'},
    {img: '/client/tondu.png'},
    {img: '/client/laesmeralda.png'},
    {img: '/client/lagaito.png'},
    {img: '/client/aquitelopresto.png'},
    {img: '/client/financieraV.png'},
    {img: '/client/perez.png'},
    {img: '/client/mb.png'},
    {img: '/client/jjauto.png', bg: 'bg-[#0b1222]'},
    {img: '/client/civc.png'},
    {img: '/client/nexxo.png'},
    {img: '/client/next_tv.png'},
    {img: '/client/ouitv.png'},
    {img: '/client/tele.png'},
    {img: '/client/tvMax.png'},
    {img: '/client/nextRadio.png'},
    {img: '/client/saotome.png'},
    {img: '/client/drtours.png'},
    {img: '/client/redInmobiliaria.png'},
    {img: '/client/mcbClub.png'},
  ]

    return (
        <section id="clients" className="py-20 bg-white text-teal-600 w-full">
        <p className="text-center text-black font-light mb-2 bg-gray-50 w-40 mx-auto rounded-xl py-1">Our Clients</p>
        <h2 className="text-3xl font-bold text-center mb-12">Our clients trust us to deliver excellence!</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 px-8 w-full justify-around ">
          {clients.map((client, index) => (
            <div key={index} className={`${client.bg} w-11/12 rounded-2xl shadow-md text-center flex justify-center h-28 py-4 mb-5`}>
              <Image src={client.img} alt="" width={500} height={500} quality={100} loading = 'lazy' className="object-contain w-3/4" />
            </div>
          ))}
        </div>
      </section>
    )
}
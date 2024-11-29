import Image from "next/image"

export const Client = () => {

  const clients = [
    {img: '/client/drts.png'},
    {img: '/client/suple.png'},
    {img: '/client/flores.png'},
    {img: '/client/liriano.png'},
    {img: '/client/civel.png'},
    {img: '/client/tondu.png'},
    {img: '/client/laesmeralda.png'},
    {img: '/client/lagaito.png'},
    {img: '/client/aquitelopresto.png'},
    {img: '/client/financieraV.png'},
    {img: '/client/perez.png'},
    {img: '/client/mb.png'},
    {img: '/client/jjauto.png'},
    {img: '/client/civc.png'},
    {img: '/client/nexxo.png'},
    {img: '/client/nextTv.png'},
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
        <h2 className="text-3xl font-bold text-center mb-12">Our clients trust us to deliver excellence!</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-8 w-full justify-around ">
          {clients.map((client, index) => (
            <div key={index} className="bg-white w-11/12 rounded-2xl shadow-md text-center flex justify-center h-24">
              <Image src={client.img} alt="" width={500} height={500} quality={100} loading = 'lazy' className="w-1/2" />
            </div>
          ))}
        </div>
      </section>
    )
}
import React from "react";
import bannerImage from '../../public/assets/banner.jpg'

export const Banner = () => {
  return (
    <section className='banner w-full flex items-center justify-around' style={{ height: '600px', padding: '0 1.5rem' }}>
      <div className="flex items-center justify-center flex-col gap-6">
        <h2 className="text-5xl font-bold text-center leading-tight">Trusted eCommerce <br /> Shopify Agency </h2>
        <p className="w-96 text-center">We're a leading Shopify agency who design and develop strategic eCommerce websites.</p>
        <div className="flex gap-5">
          <button className="ease-out text-black transition hover:shadow-sm bg-primary hover:bg-primary-dark py-2 px-6 rounded-full font-bold uppercase">contact us</button>
          <button className="ease-out text-black transition hover:shadow-sm hover:bg-primary py-2 px-6 rounded-full font-bold uppercase border-2 border-black">our work</button>
        </div>
      </div>
      <div className="w-2/5">
        <img src={bannerImage} alt='banner-image' className="w-full" />
      </div>
    </section>
  );
};

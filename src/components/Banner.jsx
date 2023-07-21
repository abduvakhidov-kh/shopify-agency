import React from "react";

export const Banner = () => {
  return (
    <section className='banner h-full w-full flex items-center justify-around'>
      <div className="flex items-center justify-center flex-col gap-6">
        <h2 className="text-5xl font-bold text-center leading-tight">Trusted eCommerce <br /> Shopify Agency </h2>
        <p className="w-96 text-center">We're a leading Shopify agency who design and develop strategic eCommerce websites.</p>
        <div>button group</div>
      </div>
      <div>
        <img src='/' alt='banner-image' />
      </div>
    </section>
  );
};

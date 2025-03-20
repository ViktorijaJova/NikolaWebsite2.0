import React from 'react';
import ProductList from '../ProductList/ProductList';

import imgOne from '../../../public/nikola.png';
import imgTwo  from '../../../public/vice3.png';
import imgThree  from '../../../public/third.png';

const Monographs = () => {
  const sectionTitle = 'Case Studies';

  // Define monographs data here
  const monographs = [
    { imgProduct: imgOne, titleProduct: 'THE MODS', linkProduct: '/the-mods' },
    { imgProduct: imgTwo, titleProduct: 'VICE GOLF', linkProduct: '/vice-golf' },
    { imgProduct: imgThree, titleProduct: 'Equestrian Collection', linkProduct: '/equestrian-collection' },
  ];

  return (
    <>
      <section className="relative lg:block pt-10">
        <div
          className="z-0 has-overlay absolute top-0 left-0 w-full overflow-hidden"
          style={{ minHeight: 420 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat " />
        </div>

        <div className="container relative flex m-auto pt-20" style={{ minHeight: 320 }}>
          <div className="w-full">
            <h1 className="text-3xl text-[#727373] font-normal text-center">{sectionTitle}</h1>
          </div>
        </div>

        <div className="container relative flex flex-row mx-auto items-center" style={{ minHeight: 420 }}>
          <div className="bg-white relative -top-32 w-full p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              {monographs.map((monograph, index) => (
                <ProductList
                  key={index}
                  imgProduct={monograph.imgProduct}
                  titleProduct={monograph.titleProduct}
                  linkProduct={monograph.linkProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Monographs;

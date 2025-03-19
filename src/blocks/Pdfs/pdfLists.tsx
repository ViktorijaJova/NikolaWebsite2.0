import React from 'react';
import ProductList from '../ProductList/ProductList';

import imgOne from '../../layout/Footer/assets/logo.png';
import imgTwo from '../../layout/Footer/assets/logo.png';
import imgThree from '../../layout/Footer/assets/logo.png';

const Monographs = () => {
  const sectionTitle = 'Monographs';

  // Define monographs data here
  const monographs = [
    { imgProduct: imgOne, titleProduct: 'VICE GOLF', linkProduct: '/vice-golf' },
    { imgProduct: imgTwo, titleProduct: 'VICE GOLF', linkProduct: '/vice-golf' },
    { imgProduct: imgThree, titleProduct: 'VICE GOLF', linkProduct: '/vice-golf' },
  ];

  return (
    <>
      <section className="relative lg:block">
        <div
          className="z-0 has-overlay absolute top-0 left-0 w-full overflow-hidden"
          style={{ minHeight: 420 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-gradient-to-r from-alkLightBlue to-alkPurple mix-blend-multiply" />
        </div>

        <div className="container relative flex m-auto pt-20" style={{ minHeight: 320 }}>
          <div className="w-full">
            <h1 className="text-3xl text-white font-normal text-center">{sectionTitle}</h1>
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

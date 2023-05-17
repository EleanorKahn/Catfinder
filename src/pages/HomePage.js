import React from 'react';
import GridtextComponent from '../components/GridtextComponent';
import catFirst from "../assets/images/cat-323262_1280.jpg"
import catsecond from "../assets/images/cat-4346992_1280.jpg";
import catThird from "../assets/images/siamese-375327_1280.jpg"
import catPink from "../assets/images/cats-796437_1280.jpg";

const HomePage = () => {
  return (
    <div>
        <h2 className="mb-4 text-center text-white font-fraunces">Adopt, Don&apos;t Shop</h2>
        <section className="grid sm:grid-cols-2 grid-cols-1 mb-4 bg-white">
            <GridtextComponent />
            <img src={catFirst} alt="cat" className='object-cover'/>
            <img src={catThird} alt="cat" />
            <article className="p-4">
                <h3 className='mb-2'>Stand out to the right audience</h3>
                <p className='mr-4'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places.</p>
            </article>
            <article className="p-4">
                <h4>Graphic design</h4>
                <p className='mr-4'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&apos; attention.</p>
            </article>
            <img src={catsecond} alt="cat" className='object-fill'/>
            <img src={catPink} alt="cat" />
            <article className="p-4">
                <h4>Photography</h4>
                <p className='mr-4'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </article>
        </section>
    </div>
  );
};

export default HomePage;
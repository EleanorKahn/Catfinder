import React from 'react';
import GridtextComponent from '../components/GridtextComponent';
import catFirst from "../assets/images/siamese-375327_1280.jpeg"
import catThird from "../assets/images/maine-coon-5778154_1280.jpeg";
import catsecond from "../assets/images/cat-4346992_1280.jpeg";
import catPink from "../assets/images/cats-796437_1280.jpeg";

const HomePage = () => {
  return (
    <div>
        <h2 className="mb-4 text-center text-white font-fraunces text-4xl font-bold">Adopt, Don&apos;t Shop</h2>
        <section className="grid sm:grid-cols-2 grid-cols-1 mb-4 bg-white">
            <GridtextComponent />
            <img src={catFirst} alt="cat" className='object-cover'/>
            <img src={catThird} alt="cat" />
            <GridtextComponent />
            <GridtextComponent />
            <img src={catsecond} alt="cat" className=''/>
            <img src={catPink} alt="cat" />
            <GridtextComponent />
        </section>
    </div>
  );
};

export default HomePage;
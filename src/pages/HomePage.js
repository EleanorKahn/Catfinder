import React from 'react';
import GridtextComponent from '../components/GridtextComponent';
import catFirst from "../assets/images/image-stand-out.jpg"
import catThird from "../assets/images/image-transform.jpg";
import catsecond from "../assets/images/image-photography.jpg";
import catPink from "../assets/images/image-graphic-design.jpg";

const HomePage = () => {
  return (
    <div>
        <section className="grid sm:grid-cols-2 grid-cols-1 mb-4 bg-white max-w-fit">
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
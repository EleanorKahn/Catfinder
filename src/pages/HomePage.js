import React from 'react';

const HomePage = () => {
  return (
    <div>
        <h2 className="mb-4 text-center text-white">Adopt, Don&apos;t Shop</h2>
        <section className="grid sm:grid-cols-2 grid-cols-1 mb-4">
            <article className="p-4">
                <h3 className='mb-2'>Transform your brand</h3>
                <p className='mr-4'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button>Learn More</button>
            </article>
            <picture>
                I will be a picture
            </picture>
            <picture>
                I will be a picture
            </picture>
            <article className="p-4">
                <h3 className='mb-2'>Stand out to the right audience</h3>
                <p className='mr-4'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places.</p>
                <button>Learn More</button>
            </article>
            <article className="p-4">
                <h4>Graphic design</h4>
                <p className='mr-4'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&apos; attention.</p>
            </article>
            <article className="p-4">
                <h4>Photography</h4>
                <p className='mr-4'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </article>
        </section>
    </div>
  );
};

export default HomePage;
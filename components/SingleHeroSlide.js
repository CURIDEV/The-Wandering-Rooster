"use client";

export const SingleHeroSlide = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-2"
        style={{
          backgroundImage: 'url("assets/img/hero/heroImage.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#f5ecd9',
          aspectRatio: '2429 / 1295',
        }}
      />
    </section>
  );
};
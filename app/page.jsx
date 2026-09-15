'use client';

import { useState } from 'react';

const products = [
  ['Aurelia Sofa', 'Upholstery', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85'],
  ['Forma Lounge Chair', 'Seating', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=85'],
  ['Noma Dining Table', 'Dining', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1100&q=85'],
  ['Arco Bed', 'Bedroom', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85'],
];

const nav = ['Collections', 'New Arrivals', 'Inspiration', 'Craftsmanship', 'Stores', 'Journal'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="OAK GALLERIE home">OAK GALLERIE</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <i /><i />
        </button>
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {nav.map((item) => <a onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}
          <a onClick={() => setMenuOpen(false)} href="#quote">Request a Quote</a>
        </nav>
      </header>

      <section className="hero" id="top">
  <img
    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
    alt="Quiet modern living room with sculptural furniture"
  />

  <div className="hero-shade" />

  <div className="hero-content section-pad">
    <p className="eyebrow light">Since 2016</p>

    <h1>
      TIMELESS FORMS.<br />
      CRAFTED AROUND YOU.
    </h1>

    <p className="hero-copy">
      Bespoke furniture crafted in India, shaped by natural materials,
      considered design and the spaces they belong to.
    </p>

    <div className="hero-actions">
      <a className="button solid" href="#collections">
        Explore Collections <b>↗</b>
      </a>

      <a className="text-link light" href="#bespoke">
        Start a Project <b>↗</b>
      </a>
    </div>
  </div>
</section>

      <section className="collection section-pad" id="collections">
        <div className="collection-image image-frame"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85" alt="Warm lounge with a low cream sofa" /></div>
        <div className="collection-copy">
          <p className="eyebrow">01 / The Season</p>
          <h2>THE NEW<br />COLLECTION</h2>
          <p>Measured silhouettes, tactile upholstery and responsibly sourced woods define a collection designed for rooms that evolve with you.</p>
          <a className="text-link" href="#new-arrivals">Discover the collection <b>↗</b></a>
        </div>
      </section>

      <section className="products section-pad" id="new-arrivals">
        <div className="section-heading">
          <div><p className="eyebrow">Selected Pieces</p><h2>FEATURED PRODUCTS</h2></div>
          <a className="text-link desktop-only" href="#collections">View all pieces <b>↗</b></a>
        </div>
        <div className="product-grid">
          {products.map(([name, type, image]) => (
            <a className="product-card" href="#quote" key={name}>
              <div className="product-image"><img src={image} alt={name} /><span>View piece <b>↗</b></span></div>
              <p>{type}</p><h3>{name}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="craft section-pad" id="craftsmanship">
        <div className="craft-copy" id="story">
          <p className="eyebrow">The OAK GALLERIE Standard</p>
          <h2>CRAFTED WITH<br />INTENTION</h2>
          <p>Every edge, joint and finish is considered with patience. We work with skilled makers and natural materials chosen to grow richer with time.</p>
          <a className="text-link" href="#journal">Meet our makers <b>↗</b></a>
        </div>
        <div className="craft-image image-frame"><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1500&q=85" alt="Detail of an elegant upholstered chair" /></div>
      </section>

      <section className="inspiration section-pad" id="inspiration">
        <div className="section-heading"><div><p className="eyebrow">A Sense of Place</p><h2>SPACES WITH CHARACTER</h2></div></div>
        <div className="inspiration-grid">
          <article><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Contemporary cream living room" /><p>Quiet Luxury</p></article>
          <article><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="Architectural home interior" /><p>Modern Rituals</p></article>
          <article><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" alt="Refined bedroom with natural materials" /><p>Considered Calm</p></article>
        </div>
      </section>

      <section className="quote section-pad" id="quote">
        <p className="eyebrow light">For private residences &amp; projects</p>
        <h2>LET&apos;S CREATE SOMETHING<br />BEAUTIFUL</h2>
        <a className="button outline" href="mailto:studio@oakgallerie.com">Request a Quote <b>↗</b></a>
      </section>

      <footer id="stores">
        <div className="footer-top"><a className="brand" href="#top">OAK GALLERIE</a><p>Furniture for a life well lived.</p></div>
        <div className="footer-links">
          <div><p className="footer-label">Visit</p><a href="https://www.google.com/maps/dir//OAK+GALLERIE,+35,+Diamond+Harbour+Rd,+Majherhat,+Mominpore,+Kolkata,+West+Bengal+700027/@22.5278509,88.3333026,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a0279f6de00f34d:0xc092f3592fefb290!2m2!1d88.324155!2d22.5212063?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D">Kolkata</a></div>
          <div><p className="footer-label">Connect</p><a href="mailto:info@oakgallerie.com">info@oakgallerie.com</a><a href="https://www.instagram.com/oak_gallerie?stkn=MWR4OWoxdGZrMGowcw==">Instagram</a><a href="#journal">Pinterest</a></div>
          <div id="journal"><p className="footer-label">Journal</p><a href="#journal">Notes on material</a><a href="#journal">The studio edit</a></div>
          <p className="newsletter">A considered note from our world.<br /><a href="mailto:info@oakgallerie.com">Subscribe <b>↗</b></a></p>
        </div>
        <div className="footer-bottom"><span>© 2026 OAK GALLERIE</span><span>Privacy · Terms</span></div>
      </footer>
    </main>
  );
}

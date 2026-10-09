'use client';

import { useState, FormEvent } from 'react';
import GlassPanel from './GlassPanel';
import styles from './ExchangePortal.module.css';

export default function ExchangePortal() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('Good');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Sibani Giftronics, I want to exchange/sell my phone.\nBrand: ${brand}\nModel: ${model}\nCondition: ${condition}`;
    const url = `https://wa.me/917008121187?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="exchange" className={styles.exchangeSection}>
      <GlassPanel className={styles.portalCard}>
        <div className={styles.leftSide}>
          <h2 className={styles.title}>Upgrade your tech.</h2>
          <p className={styles.desc}>
            Get the best exchange rates for your old smartphone. Fill out the details to get an instant quote via WhatsApp.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.formArea}>
          <div className={styles.inputGroup}>
            <label htmlFor="brand">Phone Brand</label>
            <input 
              id="brand"
              type="text" 
              placeholder="e.g. Apple, Samsung, Vivo" 
              className={styles.input}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="model">Model Name</label>
            <input 
              id="model"
              type="text" 
              placeholder="e.g. iPhone 13 Pro" 
              className={styles.input}
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="condition">Condition</label>
            <select 
              id="condition"
              className={styles.input}
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Flawless">Flawless (No scratches)</option>
              <option value="Good">Good (Minor wear)</option>
              <option value="Average">Average (Dents or scratches)</option>
              <option value="Broken">Broken (Screen crack, etc.)</option>
            </select>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Get Quote on WhatsApp
          </button>
        </form>
      </GlassPanel>
    </section>
  );
}

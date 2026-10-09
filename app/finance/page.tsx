import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GlassPanel from '@/components/GlassPanel';
import styles from './finance.module.css';

export default function Finance() {
  return (
    <main>
      <Navigation />
      
      <section className={styles.financeSection}>
        <h1 className={styles.title}>Easy Upgrade. Zero Worries.</h1>
        <p className={styles.subtitle}>
          Get your dream smartphone today with our flexible financing options. 
          No hidden charges, instant approval, and zero downpayment on select models.
        </p>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.marqueeGroup} aria-hidden={i === 1 ? 'true' : 'false'}>
                <GlassPanel className={styles.financeCard}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Zero Downpayment</h3>
                  <p className={styles.cardDesc}>
                    Walk in empty-handed, walk out with a premium phone. 100% financing available for eligible customers on select brands like Vivo and Samsung.
                  </p>
                </GlassPanel>
                
                <GlassPanel className={styles.financeCard}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Credit Card EMI</h3>
                  <p className={styles.cardDesc}>
                    Instant EMI conversions on HDFC, SBI, ICICI, and Axis bank cards. Enjoy cashback up to ₹5,000 on new Apple and Samsung flagships.
                  </p>
                </GlassPanel>

                <GlassPanel className={styles.financeCard}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24">
                      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Bajaj Finserv</h3>
                  <p className={styles.cardDesc}>
                    No credit card? No problem. Get instant approval with Bajaj Finserv EMI network card with No Cost EMI options up to 12 months.
                  </p>
                </GlassPanel>
                
                <GlassPanel className={styles.financeCard}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      <path d="M16 21v-5h5" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Exchange + Finance</h3>
                  <p className={styles.cardDesc}>
                    Trade in your old phone for its best value and finance the remaining amount. The smartest way to upgrade to a premium device.
                  </p>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>

        <GlassPanel className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Check Your Eligibility?</h2>
          <p className={styles.ctaDesc}>
            Visit our store in Damanjodi with your PAN and Aadhar card, or call us to know the best offers running today.
          </p>
          <a href="tel:+917008121187" className={styles.primaryButton}>
            Call Us Now
          </a>
        </GlassPanel>
      </section>

      <Footer />
    </main>
  );
}

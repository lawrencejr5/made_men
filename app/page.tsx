import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SocialIcon from "@/components/SocialIcon";
import { BRAND_CONFIG, PORTFOLIO_ITEMS } from "@/lib/catalog";
import styles from "./page.module.css";

const CRAFT_STEPS = [
  {
    step: "01",
    title: "Consultation & Fabric Curation",
    description:
      "We help you select from premium cashmere wools, breathable cotton-linens, and textured weaves suited to your occasion and climate.",
  },
  {
    step: "02",
    title: "Precision Anatomical Measurement",
    description:
      "Every posture and shoulder slope is recorded in our Enugu studio—or via our guided remote measurement protocol for clients abroad.",
  },
  {
    step: "03",
    title: "Signature Cut & Master Stitchwork",
    description:
      "From geometric Senator embroidery to razor-sharp corporate lapels, every seam is reinforced and hand-pressed for enduring drape.",
  },
  {
    step: "04",
    title: "Final Fitting & Global Delivery",
    description:
      "Bearing the official Made_Men Global Stitches label, your finished garment is steamed, packaged, and delivered anywhere in the world.",
  },
];

// Highlighted creations for homepage teaser
const FEATURED_WORKS = PORTFOLIO_ITEMS.slice(0, 3);

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Shared Responsive Navbar with Mobile Drawer */}
      <Navbar currentPath="/" />

      <main id="top" className={styles.main}>
        {/* Home Page Hero Banner */}
        <section className={styles.heroBanner}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              {/* Left Column (Main Hero Content) */}
              <div className={styles.heroContent}>
                <div className={styles.locationBadge}>
                  <span className={styles.locationDot} />
                  <span>ENUGU, NIGERIA • BESPOKE ATELIER</span>
                </div>

                <h1 className={styles.heroHeadline}>
                  Where Nigerian Heritage Meets{" "}
                  <span className={styles.goldText}>Master Tailoring.</span>
                </h1>

                {/* Mobile-Only Hero Showcase Card (Displays image above fold on mobile) */}
                <div className={styles.mobileHeroShowcase}>
                  <div className={styles.mobileHeroImageWrap}>
                    <Image
                      src="/images/senator2.jpeg"
                      alt="Bespoke Gold-Embroidered Senator by made_men"
                      fill
                      priority
                      sizes="(max-width: 900px) 90vw, 30vw"
                      className={styles.mobileHeroImage}
                    />
                    <div className={styles.mobileHeroBadge}>
                      <span>SIGNATURE SENATOR</span>
                      <strong>Gold Geometric Embroidery</strong>
                    </div>
                  </div>
                </div>

                <p className={styles.heroLead}>
                  <strong>made<span className={styles.goldUnderscore}>_</span>men</strong> crafts architectural Senator wear, executive corporate suiting, and luxury casual pieces for discerning clients worldwide.
                </p>

                <div className={styles.heroCtaGroup}>
                  <Link href="/browse" className={styles.btnPrimary}>
                    Browse Collection →
                  </Link>
                  <Link href="#contact" className={styles.btnSecondary}>
                    Book a Fitting
                  </Link>
                </div>

                {/* Compact Socials: Sleek Icon Buttons */}
                <div className={styles.heroSocialsBar}>
                  <span className={styles.heroSocialsLabel}>Connect:</span>
                  <div className={styles.heroSocialsIcons}>
                    {BRAND_CONFIG.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroSocialIconBtn}
                        aria-label={social.name}
                        title={`${social.name}: ${social.handle}`}
                      >
                        <SocialIcon name={social.icon} size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Hero Visual Showcase (Hidden on Mobile) */}
              <div className={styles.heroVisualCol}>
                <div className={styles.heroCollage}>
                  {/* Main feature frame */}
                  <div className={styles.heroMainFrame}>
                    <Image
                      src="/images/senator2.jpeg"
                      alt="Obsidian Gold-Embroidered Senator by made_men"
                      fill
                      priority
                      sizes="(max-width: 900px) 100vw, 40vw"
                      className={styles.heroImgCover}
                    />
                    <div className={styles.heroFrameCaption}>
                      <span>SIGNATURE SENATOR</span>
                      <strong>Gold Geometric Embroidery</strong>
                    </div>
                  </div>

                  {/* Secondary stacked frames */}
                  <div className={styles.heroSideStack}>
                    <div className={styles.heroLogoCard}>
                      <Image
                        src="/images/logo1.png"
                        alt="Made_Men Global Stitches Official Emblem"
                        width={95}
                        height={130}
                        className={styles.heroEmblemImg}
                        priority
                      />
                    </div>

                    <div className={styles.heroSubFrame}>
                      <Image
                        src="/images/WhatsApp Image 2026-10-31 at 1.52.20 PM.jpeg"
                        alt="Corporate Double-Breasted Waistcoat Suit by made_men"
                        fill
                        sizes="(max-width: 900px) 50vw, 22vw"
                        className={styles.heroImgCover}
                      />
                      <div className={styles.heroFrameCaptionSmall}>
                        <span>CORPORATE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Lookbook Teaser */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderFlex}>
              <div>
                <span className={styles.eyebrow}>CURATED ARCHIVE</span>
                <h2 className={styles.sectionTitle}>
                  Signature <span className={styles.goldText}>Creations</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  A glimpse into our bespoke Senator, corporate, and smart casual collections.
                </p>
              </div>
              <Link href="/browse" className={styles.btnPrimary}>
                View All Categories ({PORTFOLIO_ITEMS.length}) →
              </Link>
            </div>

            <div className={styles.featuredGrid}>
              {FEATURED_WORKS.map((item) => (
                <Link
                  key={item.id}
                  href="/browse"
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.featuredImage}
                    />
                    <div className={styles.featuredBadges}>
                      {item.categories.map((cat) => (
                        <span key={cat} className={styles.featuredBadge}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.featuredSubtitle}>{item.subtitle}</span>
                    <h3 className={styles.featuredTitle}>{item.title}</h3>
                    <p className={styles.featuredHighlight}>{item.highlight}</p>
                    <span className={styles.featuredCtaText}>Explore in Lookbook →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* The Hand Behind the Brand Section */}
        <section id="hand-behind-brand" className={styles.founderSection}>
          <div className={styles.container}>
            <div className={styles.founderGrid}>
              {/* Portrait Frame displaying WhatsApp Image 2026-10-31 at 1.24.58 PM.jpeg */}
              <div className={styles.founderPortraitCol}>
                <div className={styles.founderPortraitFrame}>
                  <Image
                    src={BRAND_CONFIG.founder.image}
                    alt="The Hand Behind made_men — Master Tailor in Enugu, Nigeria"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className={styles.founderPortraitImg}
                  />
                  <div className={styles.founderFloatingSeal}>
                    <span className={styles.sealLabel}>BASED IN</span>
                    <strong className={styles.sealCity}>
                      {BRAND_CONFIG.city}
                    </strong>
                    <span className={styles.sealSub}>
                      {BRAND_CONFIG.name} • {BRAND_CONFIG.tagline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Narrative Column */}
              <div className={styles.founderStoryCol}>
                <span className={styles.eyebrow}>
                  {BRAND_CONFIG.founder.badge}
                </span>
                <h2 className={styles.founderTitle}>
                  {BRAND_CONFIG.founder.title}
                </h2>
                <p className={styles.founderRole}>
                  {BRAND_CONFIG.founder.name}
                </p>

                <blockquote className={styles.founderQuote}>
                  &ldquo;{BRAND_CONFIG.founder.quote}&rdquo;
                </blockquote>

                <div className={styles.founderParagraphs}>
                  {BRAND_CONFIG.founder.storyParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className={styles.founderStatsGrid}>
                  {BRAND_CONFIG.founder.stats.map((stat) => (
                    <div key={stat.label} className={styles.founderStatItem}>
                      <strong className={styles.founderStatValue}>
                        {stat.value}
                      </strong>
                      <span className={styles.founderStatLabel}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={styles.founderCtaRow}>
                  <Link href="#contact" className={styles.btnPrimary}>
                    Book a Fitting Session
                  </Link>
                  <Link href="/browse" className={styles.btnSecondary}>
                    Browse His Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section id="craft" className={styles.craftSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>THE ATELIER STANDARD</span>
              <h2 className={styles.sectionTitle}>
                How <span className={styles.goldText}>made_men</span> Crafts
                Your Garment
              </h2>
              <p className={styles.sectionSubtitle}>
                Every garment bearing the woven{" "}
                <strong>Made_Men Global Stitches</strong> label goes through
                four precise stages in our Enugu workshop.
              </p>
            </div>

            <div className={styles.craftGrid}>
              {CRAFT_STEPS.map((item) => (
                <div key={item.step} className={styles.craftCard}>
                  <span className={styles.craftStepNum}>{item.step}</span>
                  <h3 className={styles.craftCardTitle}>{item.title}</h3>
                  <p className={styles.craftCardDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrandCol}>
              <div className={styles.footerLogoBadge}>
                <Image
                  src="/images/logo1.png"
                  alt="Made_Men Global Stitches full logo"
                  width={80}
                  height={108}
                  className={styles.footerLogoImg}
                />
              </div>
              <div>
                <h3 className={styles.footerBrandTitle}>
                  made<span className={styles.goldUnderscore}>_</span>men
                </h3>
                <p className={styles.footerTagline}>{BRAND_CONFIG.tagline}</p>
                <p className={styles.footerDesc}>
                  Bespoke Senator wear, corporate suiting, and luxury casual
                  tailoring proudly handcrafted in {BRAND_CONFIG.city}.
                </p>
              </div>
            </div>

            <div className={styles.footerLinksCol}>
              <span className={styles.footerColHeading}>EXPLORE</span>
              <Link href="/browse">All Works</Link>
              <Link href="/browse">Men&apos;s Tailoring</Link>
              <Link href="/browse">Women&apos;s Bespoke</Link>
              <Link href="/browse">Senator Sets</Link>
              <Link href="/browse">Corporate Suiting</Link>
              <Link href="/browse">Casual Outfits</Link>
            </div>

            <div className={styles.footerLinksCol}>
              <span className={styles.footerColHeading}>ATELIER</span>
              <Link href="#hand-behind-brand">The Tailor</Link>
              <Link href="#craft">Craftsmanship</Link>
              <Link href="#contact">Book a Fitting</Link>
              <span>{BRAND_CONFIG.city}</span>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              © {new Date().getFullYear()} {BRAND_CONFIG.name} (
              {BRAND_CONFIG.tagline}). Crafted in {BRAND_CONFIG.city}.
            </span>
            <div className={styles.footerBottomSocials}>
              {BRAND_CONFIG.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

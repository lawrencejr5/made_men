import Image from "next/image";
import BrowseGallery from "@/components/BrowseGallery";
import ContactSection from "@/components/ContactSection";
import SocialIcon from "@/components/SocialIcon";
import { BRAND_CONFIG } from "@/lib/catalog";
import styles from "./page.module.css";

const CRAFT_STEPS = [
  {
    step: "01",
    title: "Consultation & Fabric Curation",
    description:
      "We help you select from luxury cashmere wools, breathable cotton-linens, and textured weaves suited to your occasion and climate.",
  },
  {
    step: "02",
    title: "Precision Anatomical Measurement",
    description:
      "Every posture and shoulder slope is recorded in our Enugu studio—or via our guided remote measurement protocol for global clients.",
  },
  {
    step: "03",
    title: "Signature Cut & Gold Stitchwork",
    description:
      "From geometric Senator embroidery to razor-sharp corporate lapels, each seam is reinforced and pressed for lasting structure.",
  },
  {
    step: "04",
    title: "Final Fitting & Global Delivery",
    description:
      "After a meticulous quality check under the Made_Men Global Stitches label, your garment is steamed, boxed, and delivered.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Sticky Top Navbar */}
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="#top" className={styles.brandLink}>
            <div className={styles.logoMarkWrap}>
              <Image
                src="/images/logo2.png"
                alt="made_men monogram logo"
                width={42}
                height={48}
                className={styles.navLogoImage}
                priority
              />
            </div>
            <div className={styles.brandTextWrap}>
              <span className={styles.brandWordmark}>
                made<span className={styles.goldUnderscore}>_</span>men
              </span>
              <span className={styles.brandSubTag}>
                {BRAND_CONFIG.tagline} • ENUGU
              </span>
            </div>
          </a>

          <nav className={styles.navLinks} aria-label="Primary Navigation">
            <a href="#browse" className={styles.navItem}>
              Browse Categories
            </a>
            <a href="#hand-behind-brand" className={styles.navItem}>
              The Tailor
            </a>
            <a href="#craft" className={styles.navItem}>
              Craftsmanship
            </a>
            <a href="#contact" className={styles.navItem}>
              Contact Me
            </a>
          </nav>

          <a href="#contact" className={styles.navCtaBtn}>
            Book a Fitting
          </a>
        </div>
      </header>

      <main id="top" className={styles.main}>
        {/* Home Page Hero Banner */}
        <section className={styles.heroBanner}>
          <div className={styles.heroGlowLeft} aria-hidden="true" />
          <div className={styles.heroGlowRight} aria-hidden="true" />

          <div className={styles.container}>
            <div className={styles.heroGrid}>
              {/* Left Column: Brand Story, CTAs & Hero Socials List */}
              <div className={styles.heroContent}>
                <div className={styles.locationBadge}>
                  <span className={styles.locationDot} />
                  <span>BESPOKE TAILORING HOUSE • {BRAND_CONFIG.city}</span>
                </div>

                <h1 className={styles.heroHeadline}>
                  Where Nigerian Heritage Meets{" "}
                  <span className={styles.goldGradientText}>
                    Master Tailoring.
                  </span>
                </h1>

                <p className={styles.heroLead}>
                  Welcome to{" "}
                  <strong className={styles.inlineBrand}>
                    made<span className={styles.goldUnderscore}>_</span>men
                  </strong>{" "}
                  <em>({BRAND_CONFIG.tagline})</em>. {BRAND_CONFIG.heroDescription}
                </p>

                <div className={styles.heroCtaGroup}>
                  <a href="#browse" className={styles.primaryGoldBtn}>
                    Browse Categories
                  </a>
                  <a href="#contact" className={styles.secondaryOutlineBtn}>
                    Contact Me
                  </a>
                </div>

                {/* Prominent Socials List on the Home Page Banner */}
                <div className={styles.heroSocialsBox}>
                  <div className={styles.heroSocialsHeader}>
                    <span className={styles.heroSocialsLine} />
                    <span className={styles.heroSocialsLabel}>
                      OFFICIAL SOCIAL CHANNELS — FOLLOW &amp; CONNECT
                    </span>
                  </div>
                  <div className={styles.heroSocialsList}>
                    {BRAND_CONFIG.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroSocialCard}
                        title={`${social.name}: ${social.handle}`}
                      >
                        <span className={styles.heroSocialIcon}>
                          <SocialIcon name={social.icon} size={18} />
                        </span>
                        <span className={styles.heroSocialMeta}>
                          <span className={styles.heroSocialName}>
                            {social.name}
                          </span>
                          <span className={styles.heroSocialHandle}>
                            {social.handle}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Lookbook Composition & Brand Emblem */}
              <div className={styles.heroVisualCol}>
                <div className={styles.heroCollage}>
                  {/* Main tall feature frame */}
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
                        width={110}
                        height={148}
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

                    <div className={styles.heroSubFrame}>
                      <Image
                        src="/images/WhatsApp Image 2026-10-31 at 1.24.55 PM.jpeg"
                        alt="Royal Navy Embellished Senator Ensemble by made_men"
                        fill
                        sizes="(max-width: 900px) 50vw, 22vw"
                        className={styles.heroImgCover}
                      />
                      <div className={styles.heroFrameCaptionSmall}>
                        <span>BESPOKE LUXURY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Categories Section (Men, Women, Casual, Corporate, Senator) */}
        <BrowseGallery />

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
                  <a href="#contact" className={styles.primaryGoldBtn}>
                    Book a Session With the Tailor
                  </a>
                  <a href="#browse" className={styles.secondaryOutlineBtn}>
                    Explore His Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship & Tailoring Process Section */}
        <section id="craft" className={styles.craftSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>THE ATELIER STANDARD</span>
              <h2 className={styles.sectionTitle}>
                How <span className={styles.goldText}>made_men</span> Crafts
                Your Garment
              </h2>
              <p className={styles.sectionSubtitle}>
                Every piece bearing the woven{" "}
                <strong>Made_Men Global Stitches</strong> label goes through
                four uncompromising stages in our Enugu workshop.
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
                  width={92}
                  height={124}
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
              <span className={styles.footerColHeading}>CATEGORIES</span>
              <a href="#browse">Men&apos;s Tailoring</a>
              <a href="#browse">Women&apos;s Bespoke</a>
              <a href="#browse">Senator Wear</a>
              <a href="#browse">Corporate Suiting</a>
              <a href="#browse">Casual Sets</a>
            </div>

            <div className={styles.footerLinksCol}>
              <span className={styles.footerColHeading}>ATELIER</span>
              <a href="#hand-behind-brand">The Hand Behind the Brand</a>
              <a href="#craft">Our Craftsmanship</a>
              <a href="#contact">Book a Fitting</a>
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

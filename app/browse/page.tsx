import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrowseClient from "./BrowseClient";
import ThemeToggle from "@/components/ThemeToggle";
import { BRAND_CONFIG } from "@/lib/catalog";
import styles from "./browse.module.css";
import homeStyles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Browse Categories & Lookbook | made_men (Global Stitches)",
  description:
    "Explore bespoke Senator wear, corporate suiting, casual sets, and bespoke commissions handcrafted by made_men in Enugu, Nigeria.",
};

export default function BrowsePage() {
  return (
    <div className={styles.browsePage}>
      {/* Navigation Header */}
      <header className={homeStyles.navbar}>
        <div className={homeStyles.navContainer}>
          <Link href="/" className={homeStyles.brandLink}>
            <div className={homeStyles.logoMarkWrap}>
              <Image
                src="/images/logo2.png"
                alt="made_men monogram logo"
                width={38}
                height={44}
                className={homeStyles.navLogoImage}
                priority
              />
            </div>
            <div className={homeStyles.brandTextWrap}>
              <span className={homeStyles.brandWordmark}>
                made<span className={homeStyles.goldUnderscore}>_</span>men
              </span>
              <span className={homeStyles.brandSubTag}>
                {BRAND_CONFIG.tagline} • ENUGU
              </span>
            </div>
          </Link>

          <nav className={homeStyles.navLinks} aria-label="Navigation">
            <Link href="/" className={homeStyles.navItem}>
              Home
            </Link>
            <Link href="/browse" className={`${homeStyles.navItem} ${homeStyles.navItemActive}`}>
              Browse Collection
            </Link>
            <Link href="/#hand-behind-brand" className={homeStyles.navItem}>
              The Tailor
            </Link>
            <Link href="/#craft" className={homeStyles.navItem}>
              Craftsmanship
            </Link>
            <Link href="/#contact" className={homeStyles.navItem}>
              Contact Me
            </Link>
          </nav>

          <div className={homeStyles.navActions}>
            <ThemeToggle />
            <Link href="/#contact" className={homeStyles.navCtaBtn}>
              Book Fitting
            </Link>
          </div>
        </div>
      </header>

      {/* Main Browse Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Breadcrumb & Title */}
          <div className={styles.headerArea}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>/</span>
              <span>Lookbook &amp; Categories</span>
            </div>
            <h1 className={styles.pageTitle}>
              Curated <span className={styles.goldText}>Collection</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Filter by style category to explore handcrafted Nigerian Senator suits,
              executive corporate tailoring, and contemporary casual wear drafted in our
              Enugu atelier.
            </p>
          </div>

          {/* Interactive Client Component with Left Sidebar on Desktop */}
          <BrowseClient />
        </div>
      </main>

      {/* Footer */}
      <footer className={homeStyles.footer}>
        <div className={homeStyles.container}>
          <div className={homeStyles.footerBottom}>
            <span>
              © {new Date().getFullYear()} {BRAND_CONFIG.name} ({BRAND_CONFIG.tagline}). Crafted in {BRAND_CONFIG.city}.
            </span>
            <div className={homeStyles.footerBottomSocials}>
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

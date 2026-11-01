import type { Metadata } from "next";
import Link from "next/link";
import BrowseClient from "./BrowseClient";
import Navbar from "@/components/Navbar";
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
      {/* Shared Responsive Navbar with Mobile Drawer */}
      <Navbar currentPath="/browse" />

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

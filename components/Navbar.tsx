"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SocialIcon from "@/components/SocialIcon";
import { BRAND_CONFIG } from "@/lib/catalog";
import styles from "./Navbar.module.css";

interface NavbarProps {
  currentPath?: "/" | "/browse";
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Brand Logo with "GLOBAL STITCHES • ENUGU" preserved on both mobile & desktop */}
          <Link href="/" className={styles.brandLink}>
            <div className={styles.logoMarkWrap}>
              <Image
                src="/images/logo2.png"
                alt="made_men monogram logo"
                width={38}
                height={44}
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
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNavLinks} aria-label="Primary Navigation">
            <Link
              href="/"
              className={`${styles.navItem} ${currentPath === "/" ? styles.navItemActive : ""}`}
            >
              Home
            </Link>
            <Link
              href="/browse"
              className={`${styles.navItem} ${currentPath === "/browse" ? styles.navItemActive : ""}`}
            >
              Browse Collection
            </Link>
            <Link href="/#hand-behind-brand" className={styles.navItem}>
              The Tailor
            </Link>
            <Link href="/#craft" className={styles.navItem}>
              Craftsmanship
            </Link>
            <Link href="/#contact" className={styles.navItem}>
              Contact Me
            </Link>
          </nav>

          {/* Nav Right Controls */}
          <div className={styles.navActions}>
            {/* Theme Switcher Button (Just the icon, no text) */}
            <ThemeToggle />

            {/* Desktop Only: "Book Fitting" Button */}
            <Link href="/#contact" className={styles.desktopBookBtn}>
              Book Fitting
            </Link>

            {/* Mobile Only: "Open Side Bar" Button with Bars Icon */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className={styles.menuToggleBtn}
              aria-label="Open side bar navigation"
              title="Open navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Nav Drawer Backdrop */}
      <div
        className={`${styles.drawerBackdrop} ${isDrawerOpen ? styles.drawerBackdropOpen : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Side Nav Drawer Panel */}
      <aside
        className={`${styles.drawerPanel} ${isDrawerOpen ? styles.drawerPanelOpen : ""}`}
        aria-label="Mobile Navigation"
        aria-modal={isDrawerOpen}
        role="dialog"
      >
        <div className={styles.drawerHeader}>
          <div className={styles.brandLink}>
            <div className={styles.logoMarkWrap}>
              <Image
                src="/images/logo2.png"
                alt="made_men logo"
                width={32}
                height={38}
                className={styles.navLogoImage}
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
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            className={styles.drawerCloseBtn}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        {/* Side Nav Links */}
        <nav className={styles.drawerNavLinks}>
          <Link href="/" onClick={closeDrawer} className={styles.drawerNavLink}>
            <span>Home</span>
            <span>→</span>
          </Link>
          <Link href="/browse" onClick={closeDrawer} className={styles.drawerNavLink}>
            <span>Browse Collection</span>
            <span>→</span>
          </Link>
          <Link href="/#hand-behind-brand" onClick={closeDrawer} className={styles.drawerNavLink}>
            <span>The Tailor</span>
            <span>→</span>
          </Link>
          <Link href="/#craft" onClick={closeDrawer} className={styles.drawerNavLink}>
            <span>Craftsmanship</span>
            <span>→</span>
          </Link>
          <Link href="/#contact" onClick={closeDrawer} className={styles.drawerNavLink}>
            <span>Contact Me</span>
            <span>→</span>
          </Link>
        </nav>

        {/* "Book a Fitting" Button inside the Side Nav Drawer */}
        <div className={styles.drawerCtaWrapper}>
          <Link
            href="/#contact"
            onClick={closeDrawer}
            className={styles.drawerBookFittingBtn}
          >
            Book a Fitting
          </Link>
        </div>

        {/* Side Nav Footer Info */}
        <div className={styles.drawerFooter}>
          <span className={styles.drawerAtelierBadge}>
            ATELIER • {BRAND_CONFIG.city}
          </span>
          <p className={styles.drawerAddress}>
            {BRAND_CONFIG.address}
          </p>

          <div className={styles.drawerSocialsRow}>
            {BRAND_CONFIG.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerSocialIconBtn}
                aria-label={social.name}
                title={social.name}
              >
                <SocialIcon name={social.icon} size={15} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BRAND_CONFIG,
  CATEGORIES,
  PORTFOLIO_ITEMS,
  type CategoryId,
  type PortfolioItem,
} from "@/lib/catalog";
import styles from "./browse.module.css";

export default function BrowseClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) =>
          item.categories.includes(activeCategory)
        );

  const activeCategoryInfo =
    CATEGORIES.find((cat) => cat.id === activeCategory) ?? CATEGORIES[0];

  const getCategoryCount = (id: CategoryId) => {
    if (id === "all") return PORTFOLIO_ITEMS.length;
    return PORTFOLIO_ITEMS.filter((item) => item.categories.includes(id)).length;
  };

  return (
    <>
      {/* Mobile Category Pill Bar (Horizontal scroll on smaller screens) */}
      <div
        className={styles.mobileCategoryBar}
        role="tablist"
        aria-label="Filter by category mobile"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = getCategoryCount(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.mobileCategoryPill} ${
                isActive ? styles.mobileCategoryPillActive : ""
              }`}
            >
              <span>{cat.label}</span>
              <span className={styles.categoryCountBadge}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.browseLayout}>
        {/* Left Sidebar on Desktop */}
        <aside className={styles.sidebar} aria-label="Category Sidebar">
          <div className={styles.sidebarTitle}>Categories</div>

          <div
            className={styles.sidebarCategoriesList}
            role="tablist"
            aria-label="Category selection"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.categorySidebarBtn} ${
                    isActive ? styles.categorySidebarBtnActive : ""
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={styles.categoryCountBadge}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.sidebarMetaBox}>
            <span className={styles.sidebarMetaLabel}>Bespoke Inquiries</span>
            <p className={styles.sidebarMetaText}>
              Need custom measurements, wedding entourage orders, or fabrics sourced
              directly in Nigeria?
            </p>
            <Link href="/#contact" className={styles.sidebarContactCta}>
              Book Fitting / Consultation →
            </Link>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className={styles.contentArea}>
          <div className={styles.activeCategorySummary}>
            <p className={styles.activeCategoryTagline}>
              {activeCategoryInfo.tagline}
            </p>
            <span className={styles.activeCategoryCount}>
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "Creation" : "Creations"}
            </span>
          </div>

          {/* Cards Grid or Empty State */}
          {filteredItems.length > 0 ? (
            <div className={styles.galleryGrid}>
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className={styles.galleryCard}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}>
                      <span className={styles.inspectBtn}>Inspect Stitch Details</span>
                    </div>
                    <div className={styles.cardBadges}>
                      {item.categories.map((cat) => (
                        <span key={cat} className={styles.cardBadge}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.cardSubtitle}>{item.subtitle}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardHighlight}>{item.highlight}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.fabricTag}>{item.fabric}</span>
                      <span className={styles.cardActionText}>View Details →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyCategoryCard}>
              <span className={styles.emptyCategoryBadge}>
                CUSTOM COMMISSIONS
              </span>
              <h3 className={styles.emptyCategoryTitle}>
                Bespoke Womenswear &amp; Tailored Two-Pieces
              </h3>
              <p className={styles.emptyCategoryText}>
                <strong>{BRAND_CONFIG.name}</strong> accepts custom bespoke
                commissions for women—including corporate blazers, structured
                Senator suits, and special occasion ensembles in {BRAND_CONFIG.city}.
              </p>
              <div className={styles.emptyCategoryActions}>
                <Link href="/#contact" className={styles.solidGoldBtn}>
                  Request a Custom Order
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={styles.solidOutlineBtn}
                >
                  Browse All Available Works
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className={styles.lightboxModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.lightboxImageContainer}>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.lightboxImage}
              />
            </div>

            <div className={styles.lightboxDetails}>
              <div className={styles.lightboxCategories}>
                {selectedItem.categories.map((cat) => (
                  <span key={cat} className={styles.cardBadge}>
                    {cat}
                  </span>
                ))}
              </div>
              <span className={styles.lightboxSubtitle}>
                {selectedItem.subtitle}
              </span>
              <h3 className={styles.lightboxTitle}>{selectedItem.title}</h3>
              <p className={styles.lightboxHighlight}>
                {selectedItem.highlight}
              </p>

              <div className={styles.lightboxSpecBox}>
                <div>
                  <span className={styles.specLabel}>FABRIC SPECIFICATION</span>
                  <p className={styles.specValue}>{selectedItem.fabric}</p>
                </div>
                <div>
                  <span className={styles.specLabel}>TAILORING HOUSE</span>
                  <p className={styles.specValue}>
                    {BRAND_CONFIG.name} • {BRAND_CONFIG.city}
                  </p>
                </div>
              </div>

              <div className={styles.lightboxActions}>
                <a
                  href={`https://wa.me/${
                    BRAND_CONFIG.whatsappNumber
                  }?text=${encodeURIComponent(
                    `Hello ${BRAND_CONFIG.name}, I'm interested in commissioning a bespoke piece inspired by "${selectedItem.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.solidGoldBtn}
                >
                  Inquire on WhatsApp
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setSelectedItem(null)}
                  className={styles.solidOutlineBtn}
                >
                  Book Fitting Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


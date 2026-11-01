"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BRAND_CONFIG,
  CATEGORIES,
  PORTFOLIO_ITEMS,
  type CategoryId,
  type PortfolioItem,
} from "@/lib/catalog";
import styles from "@/app/page.module.css";

export default function BrowseGallery() {
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
    <section id="browse" className={styles.browseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>CURATED LOOKBOOK</span>
          <h2 className={styles.sectionTitle}>
            Browse by <span className={styles.goldText}>Category</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Explore bespoke pieces handcrafted in our Enugu atelier—from
            commanding Senator wear and sharp corporate suiting to relaxed
            luxury sets.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className={styles.categoryTabs}
          role="tablist"
          aria-label="Garment categories"
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
                className={`${styles.categoryPill} ${
                  isActive ? styles.categoryPillActive : ""
                }`}
              >
                <span>{cat.label}</span>
                <span className={styles.categoryCount}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.categoryBannerBar}>
          <p className={styles.categoryTagline}>{activeCategoryInfo.tagline}</p>
          <span className={styles.categoryResultMeta}>
            Showing {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "creation" : "creations"}
          </span>
        </div>

        {/* Portfolio Grid or Women's Placeholder State */}
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
                    <span className={styles.inspectBtn}>
                      Inspect Stitch Details
                    </span>
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
                    <span className={styles.cardActionText}>View →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyCategoryCard}>
            <div className={styles.emptyCategoryBadge}>
              BESPOKE WOMENSWEAR ATELIER
            </div>
            <h3 className={styles.emptyCategoryTitle}>
              Custom Women&apos;s Tailoring &amp; Structured Pieces
            </h3>
            <p className={styles.emptyCategoryText}>
              <strong>{BRAND_CONFIG.name}</strong> crafts bespoke women&apos;s
              power suits, structured Ankara &amp; lace couture, two-piece sets,
              and corporate dresses in Enugu, Nigeria. New lookbook photography
              for this category will be uploaded soon.
            </p>
            <div className={styles.emptyCategoryActions}>
              <a href="#contact" className={styles.primaryGoldBtn}>
                Book a Womenswear Consultation
              </a>
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={styles.secondaryOutlineBtn}
              >
                View All Current Works
              </button>
            </div>
          </div>
        )}
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
              aria-label="Close preview"
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
                  <span className={styles.specLabel}>FABRIC &amp; WEAVE</span>
                  <p className={styles.specValue}>{selectedItem.fabric}</p>
                </div>
                <div>
                  <span className={styles.specLabel}>TAILORING HOUSE</span>
                  <p className={styles.specValue}>
                    {BRAND_CONFIG.name} — {BRAND_CONFIG.city}
                  </p>
                </div>
              </div>

              <div className={styles.lightboxActions}>
                <a
                  href={`https://wa.me/${
                    BRAND_CONFIG.whatsappNumber
                  }?text=${encodeURIComponent(
                    `Hello ${BRAND_CONFIG.name}, I'm interested in ordering a bespoke piece inspired by "${selectedItem.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryGoldBtn}
                >
                  Commission This Style on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className={styles.secondaryOutlineBtn}
                >
                  Send Fitting Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


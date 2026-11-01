"use client";

import { useState, type FormEvent } from "react";
import { BRAND_CONFIG } from "@/lib/catalog";
import SocialIcon from "@/components/SocialIcon";
import styles from "@/app/page.module.css";

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Senator");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      `Hello ${BRAND_CONFIG.name} (${BRAND_CONFIG.tagline}),`,
      `My name is ${fullName || "a prospective client"}.`,
      `Category of Interest: ${category}`,
      phone ? `Phone / WhatsApp: ${phone}` : "",
      notes ? `Measurement / Style Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${
      BRAND_CONFIG.whatsappNumber
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Contact & Atelier Info */}
          <div className={styles.contactInfoCol}>
            <span className={styles.eyebrow}>GET IN TOUCH</span>
            <h2 className={styles.sectionTitle}>
              Contact <span className={styles.goldText}>{BRAND_CONFIG.name}</span>
            </h2>
            <p className={styles.contactIntro}>
              Ready for your next bespoke Senator set, sharp corporate suit, or
              custom wardrobe? Visit our studio in{" "}
              <strong>{BRAND_CONFIG.city}</strong> or book a consultation from anywhere in the world.
            </p>

            <div className={styles.contactCardsList}>
              <div className={styles.contactDetailCard}>
                <span className={styles.contactCardLabel}>ATELIER LOCATION</span>
                <strong className={styles.contactCardValue}>
                  {BRAND_CONFIG.address}
                </strong>
                <span className={styles.contactCardSub}>
                  {BRAND_CONFIG.hours}
                </span>
              </div>

              <div className={styles.contactDetailCard}>
                <span className={styles.contactCardLabel}>
                  DIRECT PHONE &amp; WHATSAPP
                </span>
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className={styles.contactCardValueLink}
                >
                  {BRAND_CONFIG.phone}
                </a>
                <span className={styles.contactCardSub}>
                  Instant consultation &amp; measurement guidance
                </span>
              </div>

              <div className={styles.contactDetailCard}>
                <span className={styles.contactCardLabel}>EMAIL CONCIERGE</span>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className={styles.contactCardValueLink}
                >
                  {BRAND_CONFIG.email}
                </a>
                <span className={styles.contactCardSub}>
                  For wedding parties, corporate orders &amp; international shipments
                </span>
              </div>
            </div>

            <div className={styles.contactSocialsBlock}>
              <span className={styles.contactSocialsHeading}>
                CONNECT ON SOCIAL MEDIA
              </span>
              <div className={styles.contactSocialIconRow}>
                {BRAND_CONFIG.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.compactSocialBtn}
                    aria-label={social.name}
                    title={`${social.name}: ${social.handle}`}
                  >
                    <SocialIcon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bespoke Inquiry Form */}
          <div className={styles.contactFormCard}>
            <div className={styles.formHeader}>
              <span className={styles.formBadge}>BESPOKE APPOINTMENT</span>
              <h3 className={styles.formTitle}>Book a Fitting or Custom Order</h3>
              <p className={styles.formSubtitle}>
                Submit your inquiry to start a direct consultation with the master tailor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. Chinedu Okafor"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="category" className={styles.formLabel}>
                    Style Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={styles.formSelect}
                  >
                    <option value="Senator">Senator Wear</option>
                    <option value="Corporate">Corporate / Suiting</option>
                    <option value="Casual">Casual / Two-Piece</option>
                    <option value="Men">Men&apos;s Bespoke</option>
                    <option value="Women">Women&apos;s Bespoke</option>
                    <option value="Groomsmen & Event">
                      Groomsmen / Event Package
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="notes" className={styles.formLabel}>
                  Tell Us About Your Outfit or Occasion
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Share preferred colors, event date, or in-person fitting details in Enugu..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={styles.formTextarea}
                />
              </div>

              <button type="submit" className={styles.submitSolidBtn}>
                Send Inquiry via WhatsApp →
              </button>

              {submitted && (
                <p className={styles.formSuccessNote}>
                  Your inquiry message is opened in WhatsApp! You can also email us directly at{" "}
                  <a href={`mailto:${BRAND_CONFIG.email}`}>
                    {BRAND_CONFIG.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

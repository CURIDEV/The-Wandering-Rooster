"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { REOPEN_DATE, REOPEN_LABEL } from "@/config/vacation";

const SHOP_URL = "https://www.roostershop.store";

const getRemaining = () => {
  const diff = new Date(REOPEN_DATE).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const VacationNotice = () => {
  // Left null on the server so the markup matches on first paint, then filled
  // in and ticked on the client.
  const [remaining, setRemaining] = useState(null);
  const [isOpenAgain, setIsOpenAgain] = useState(false);

  useEffect(() => {
    const tick = () => {
      const next = getRemaining();
      setRemaining(next);
      // Safety net: if the reopening date passes before the vacation flag is
      // flipped, say "we're open" rather than sitting on a dead countdown.
      setIsOpenAgain(next === null);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: remaining?.days },
    { label: "Hours", value: remaining?.hours },
    { label: "Minutes", value: remaining?.minutes },
    { label: "Seconds", value: remaining?.seconds },
  ];

  return (
    <section className="twr-vacation">
      <div className="container">
        <div className="twr-vacation__inner text-center">
          <span className="twr-vacation__badge wow fadeInUp">
            <i className="fas fa-umbrella-beach" />
            Closed for Vacation
          </span>

          <h1 className="twr-vacation__title wow fadeInUp" data-wow-delay=".2s">
            We&rsquo;re Off <span>Wandering</span>
          </h1>

          <p className="twr-vacation__lead wow fadeInUp" data-wow-delay=".3s">
            The Wandering Rooster is taking a short break to rest, recharge, and
            cook up a few new ideas. The truck is parked and the fryers are
            cooling &mdash; but not for long.
          </p>

          <div className="twr-vacation__reopen wow fadeInUp" data-wow-delay=".4s">
            <span className="twr-vacation__reopen-label">
              Back on the roost
            </span>
            <strong className="twr-vacation__reopen-date">
              Thursday, {REOPEN_LABEL}
            </strong>
            <span className="twr-vacation__reopen-place">
              513 Greene Street &middot; Key West, FL
            </span>
          </div>

          {/* Countdown */}
          {isOpenAgain ? (
            <p className="twr-vacation__open-again wow fadeInUp" data-wow-delay=".5s">
              We&rsquo;re back! Come see us at 513 Greene Street.
            </p>
          ) : (
            <div
              className="twr-countdown wow fadeInUp"
              data-wow-delay=".5s"
              role="timer"
              aria-live="off"
            >
              {units.map((unit) => (
                <div className="twr-countdown__unit" key={unit.label}>
                  <span className="twr-countdown__value">
                    {unit.value === undefined || unit.value === null
                      ? "--"
                      : String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="twr-countdown__label">{unit.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="twr-vacation__actions wow fadeInUp" data-wow-delay=".6s">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="fas fa-tshirt" />
                </span>
                <span className="button-text">Shop Rooster Merch</span>
              </span>
            </a>
            <a
              href="https://instagram.com/thewanderingrooster"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn bg-white"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="fab fa-instagram" />
                </span>
                <span className="button-text">Follow Along</span>
              </span>
            </a>
          </div>

          <p className="twr-vacation__note wow fadeInUp" data-wow-delay=".7s">
            Online ordering and delivery are paused until we reopen. Merch still
            ships every day.
          </p>

          {/* Info cards */}
          <div className="twr-info wow fadeInUp" data-wow-delay=".8s">
            <div className="twr-info__card">
              <i className="fas fa-utensils" />
              <h3>Peek at the Menu</h3>
              <p>
                Plan your first order now &mdash; the full menu is still here
                waiting for you.
              </p>
              <Link href="/food-menu">View Menu</Link>
            </div>

            <div className="twr-info__card">
              <i className="fas fa-envelope-open-text" />
              <h3>Questions?</h3>
              <p>
                Call or email any time. We&rsquo;re slower to reply while away,
                but we do reply.
              </p>
              <a href="tel:+19547600555">(954) 760-0555</a>
              <a href="mailto:twradmin@wanderingrooster.com">
                twradmin@wanderingrooster.com
              </a>
            </div>
          </div>

          <p className="twr-vacation__signoff wow fadeInUp" data-wow-delay=".9s">
            Thank you for feeding us all year. See you on {REOPEN_LABEL}.
            <span>&mdash; The Wandering Rooster crew</span>
          </p>
        </div>
      </div>

      {/* Component-scoped styles — self-contained so they don't fight the theme */}
      <style>{`
        .twr-vacation {
          position: relative;
          overflow: hidden;
          background-color: #f5ecd9;
          background-image:
            radial-gradient(circle at 15% 12%, rgba(255, 185, 54, 0.28), transparent 42%),
            radial-gradient(circle at 85% 82%, rgba(0, 129, 61, 0.16), transparent 45%);
          padding: 90px 0 110px;
        }

        .twr-vacation__inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .twr-vacation__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00813D;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 13px;
          line-height: 1;
          padding: 12px 22px;
          border-radius: 100px;
          box-shadow: 0 6px 18px rgba(0, 129, 61, 0.25);
        }

        .twr-vacation__title {
          margin: 26px 0 0;
          font-size: clamp(44px, 8vw, 84px);
          line-height: 1.02;
          font-weight: 800;
          text-transform: uppercase;
          color: #212121;
          letter-spacing: -0.5px;
        }
        .twr-vacation__title span { color: #D12525; }

        .twr-vacation__lead {
          margin: 22px auto 0;
          max-width: 620px;
          font-size: 18px;
          line-height: 1.7;
          color: #5C5C5B;
        }

        .twr-vacation__reopen {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 34px;
          padding: 22px 42px;
          background: #fff;
          border-radius: 14px;
          border: 2px dashed rgba(0, 129, 61, 0.35);
          box-shadow: 0 12px 30px rgba(33, 33, 33, 0.07);
        }
        .twr-vacation__reopen-label {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          font-weight: 700;
          color: #00813D;
        }
        .twr-vacation__reopen-date {
          font-size: clamp(28px, 5vw, 40px);
          font-weight: 800;
          line-height: 1.1;
          color: #212121;
          text-transform: uppercase;
        }
        .twr-vacation__reopen-place {
          font-size: 14px;
          color: #5C5C5B;
        }

        .twr-countdown {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }
        .twr-countdown__unit {
          min-width: 92px;
          padding: 18px 10px 14px;
          background: #212121;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .twr-countdown__value {
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          color: #FFB936;
          font-variant-numeric: tabular-nums;
        }
        .twr-countdown__label {
          font-size: 11px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }

        .twr-vacation__open-again {
          margin: 34px 0 0;
          font-size: 22px;
          font-weight: 700;
          color: #00813D;
        }

        .twr-vacation__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
        }
        .twr-vacation__actions .button-icon { margin-right: 10px; }
        .twr-vacation__actions .theme-btn {
          background-color: #00813D;
          color: #fff;
        }
        .twr-vacation__actions .theme-btn::before { background-color: #00612e; }
        .twr-vacation__actions .theme-btn.bg-white {
          background-color: #fff;
          color: #212121;
          border: 2px solid rgba(33, 33, 33, 0.12);
        }
        .twr-vacation__actions .theme-btn.bg-white:hover { color: #D12525; }

        .twr-vacation__note {
          margin-top: 18px;
          font-size: 14px;
          color: #5C5C5B;
          margin-bottom: 0;
        }

        .twr-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 720px;
          margin: 60px auto 0;
          text-align: left;
        }
        .twr-info__card {
          background: #fff;
          border-radius: 14px;
          padding: 28px 26px;
          border: 1px solid rgba(33, 33, 33, 0.07);
          box-shadow: 0 10px 26px rgba(33, 33, 33, 0.06);
        }
        .twr-info__card i {
          font-size: 22px;
          color: #D12525;
          margin-bottom: 14px;
          display: block;
        }
        .twr-info__card h3 {
          font-size: 20px;
          margin: 0 0 10px;
          color: #212121;
          text-transform: uppercase;
        }
        .twr-info__card p {
          font-size: 15px;
          line-height: 1.65;
          color: #5C5C5B;
          margin: 0 0 14px;
        }
        .twr-info__card a {
          display: block;
          width: fit-content;
          margin-bottom: 8px;
          font-weight: 700;
          color: #00813D;
          text-decoration: none;
          word-break: break-word;
          border-bottom: 2px solid rgba(0, 129, 61, 0.25);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .twr-info__card a:hover {
          color: #D12525;
          border-color: rgba(209, 37, 37, 0.35);
        }

        .twr-vacation__signoff {
          margin: 54px 0 0;
          font-size: 17px;
          font-style: italic;
          color: #5C5C5B;
        }
        .twr-vacation__signoff span {
          display: block;
          margin-top: 6px;
          font-style: normal;
          font-weight: 700;
          color: #212121;
        }

        @media (max-width: 991px) {
          .twr-info { grid-template-columns: 1fr; }
        }

        @media (max-width: 575px) {
          .twr-vacation { padding: 60px 0 80px; }
          .twr-vacation__reopen { padding: 20px 24px; width: 100%; }
          .twr-countdown__unit { min-width: 72px; padding: 14px 8px 12px; }
          .twr-countdown__value { font-size: 28px; }
          .twr-vacation__actions .theme-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default VacationNotice;

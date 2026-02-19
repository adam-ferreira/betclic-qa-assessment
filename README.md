# QA Automation Assessment — Betclic

## Structure

```
betclic-assessment/
├── README.md                      ← You are here
├── part1-flow-and-ui.md           ← Part 1: Flow Analysis & UI Review
├── screenshots/                   ← 31 annotated screenshots (Part 1)
├── part2-automation/              ← Part 2: Test Automation (CodeceptJS)
│   └── (see part2-automation/README.md)
└── fake-app-investigation/        ← Bonus: Fraudulent clone app investigation
    ├── part1-flow-and-ui.md
    └── screenshots/
```

## Part 1 — Flow Analysis & UI Review

Full analysis of the **Betclic Paris Sportifs** Android app (v9.10.1) registration flow on a Pixel 8 (Android 16).

**Scope:**
- Complete registration flow mapped (13 steps + success screen + post-registration)
- 9 positive observations (RGPD compliance, KYC, ANJ, UX patterns)
- 21 edge cases tested (validation, navigation bugs, session timeout, account suspension)
- 31 screenshots documenting every step and finding

**Key findings:**
- Back stack inconsistency on non-standard path when modifying address after code request (Edge Case 18)
- Session timeout during mandatory post-registration flow (Edge Case 19)
- Generic login error for suspended accounts — should show specific message (Edge Case 20)
- KYC fraud detection pipeline works in ~2 minutes — fake document rejected and account suspended (Edge Case 21)
- Duplicate suspension emails (3x) for a single event (Edge Case 21)

See [`part1-flow-and-ui.md`](part1-flow-and-ui.md) for the full analysis.

## Part 2 — Test Automation

CodeceptJS + Playwright test automation project. See [`part2-automation/README.md`](part2-automation/README.md) for details.

## Appendix: Fraudulent Clone App Discovery

During initial setup, a **fraudulent clone app** ("Betclic: Sports Mood", package `com.bclicrisez.utility`) was accidentally installed from the Google Play Store instead of the official Betclic app.

**Root cause:** The device was logged into a **non-activated Google account** (newly created, no phone verification completed). The Play Store served a different search result for "Betclic" on this unverified account — the fraudulent clone appeared prominently while the official app (`sport.android.betclic.fr`) was either hidden or ranked lower. After activating the Google account (phone verification), searching for "Betclic" on the Play Store returned the official app as the first result.

**The clone app:**
- Package: `com.bclicrisez.utility` (vs official `sport.android.betclic.fr`)
- Architecture: WebView wrapper (vs official Jetpack Compose native)
- Content: Online casino (slots, roulette) — NOT sports betting
- No RGPD cookie consent, no KYC, immediate deposit page after registration
- Accepts deposits via crypto and unregulated payment methods
- No ANJ regulatory compliance whatsoever

This is a **security/brand concern for Betclic** — a fraudulent app impersonating their brand is available on Google Play Store and targets users with non-verified Google accounts.

Full investigation: [`fake-app-investigation/part1-flow-and-ui.md`](fake-app-investigation/part1-flow-and-ui.md)

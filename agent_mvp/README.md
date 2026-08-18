# Research Scout

A personal AI agent that pre-qualifies healthcare and e-commerce product roles matching **Mahmoud ABD ELKream**'s profile. Built as the AI Fluency Capstone MVP.

> One job done well: find 3–5 pre-qualified opportunities daily, so I stop scanning LinkedIn/Upwork/Wuzzuf manually.

## How It Works

5-step workflow, ~90 seconds per run:

```
GATHER (web_search × 3) → READ (page_reader × 8) → SCORE (LLM × 8) → FILTER (threshold ≥ 5/9) → FORMAT (LLM × 1)
```

### Live Tool Connections

| Tool | Purpose | Calls/Run |
|------|---------|-----------|
| `web_search` | Gather job listings from LinkedIn, Upwork, Wuzzuf | 3 |
| `page_reader` | Fetch full job descriptions | 8 |
| `LLM (chat)` | Score match + format digest | 9 |

All via the [z-ai-web-dev-sdk](https://www.npmjs.com/package/z-ai-web-dev-sdk) — free tier.

## Quick Start

```bash
# Install the z-ai CLI
npm install -g z-ai-web-dev-sdk

# Run the agent
python3 agent_mvp/scout.py
```

The digest prints to terminal. An audit log is saved to `agent_mvp/audit_log.json`.

## Scoring Rubric

Each job is scored on 4 criteria (total /9):

| Criterion | Range | What it measures |
|-----------|-------|------------------|
| Skill match | 0–3 | React, Next.js, TypeScript, Tailwind, Figma, etc. |
| Domain match | 0–2 | Healthcare, e-commerce, Arabic RTL, IoT |
| Seniority fit | 0–2 | Junior-friendly (filters out 6+ year roles) |
| Location fit | 0–2 | Egypt / MENA / remote-global |

**Threshold:** 5/9 to qualify.

**Seniority penalty:** If the LLM flags "too senior" in red_flags, -2 points are deducted from the total. This prevents senior roles from passing on skill/domain match alone.

## Guardrails

- **MUST NEVER** auto-apply. Agent only surfaces; human clicks apply.
- **MUST NEVER** state salary or seniority unless exact quote from JD.
- **MUST** cite JD URL and quote the exact line justifying each score.
- **MUST** log all fetched URLs to `audit_log.json` for human review.
- **MUST** post only to the private thread (never public channels).

## Files

```
agent_mvp/
├── scout.py              # The agent (5-step workflow)
├── test_eval_e3.py       # E3 eval: seniority penalty test
├── audit_log.json        # Per-run audit trail (all fetched URLs + scores)
├── run_capture.txt       # Raw terminal output of last run
├── TRACKING.md           # 7-day tracking template
└── .github/workflows/
    └── daily-scout.yml   # GitHub Actions cron (9 AM EET daily)
```

## Daily Automation (GitHub Actions)

The workflow at `.github/workflows/daily-scout.yml` runs the agent every day at 9 AM EET (7 AM UTC). To enable:

1. Push this repo to GitHub
2. Add `ZAI_API_KEY` as a repository secret (Settings → Secrets and variables → Actions)
3. The workflow runs automatically; manual trigger also available via "Run workflow" button

Run artifacts (output + audit log) are uploaded as GitHub Actions artifacts and retained for 30 days.

## Eval Cases

| # | Scenario | Pass Criterion |
|---|----------|----------------|
| E1 | Standard day, 30+ matching jobs | Top 5 returned, none below threshold |
| E2 | Quiet day, only 2 jobs above threshold | Digest of 2 + "thin day" note, no padding |
| E3 | Senior role (6+ yrs) with high domain match | Filtered out (seniority penalty -2 drops below threshold) |
| E4 | Remote-US role, no visa sponsorship | Filtered out or flagged with [VISA WARNING] |
| E5 | Sponsored listing with thin JD (<100 words) | Only included if score ≥ 7, else excluded |

Run E3 test: `python3 agent_mvp/test_eval_e3.py`

## Spec & Design

See the [FL-06 agent design doc](https://github.com/Mahmoud-ABDALKream/portfolio) (Research Scout Capstone Agent Design PDF) for the full spec: job, user, tools, instructions, evals, guardrails, platform justification.

## License

MIT — personal use. The match criteria (skills, domains, seniority) are specific to Mahmoud; fork and adjust for your own profile.

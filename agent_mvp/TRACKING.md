# Research Scout — 7-Day Tracking Log

Track the agent's daily runs for one week. Goal: **2–3 applications/week** (vs. current 0–1 from manual scanning).

## How to Use

1. Each morning, run the agent: `python3 agent_mvp/scout.py`
2. Review the digest (5 min)
3. Click apply on any role that fits (manually — never auto-apply)
4. Log the results below

## Tracking Table

| Day | Date | Roles in Digest | Roles Applied To | Time Spent | Notes |
|-----|------|-----------------|------------------|------------|-------|
| 1   |      |                 |                  |            |       |
| 2   |      |                 |                  |            |       |
| 3   |      |                 |                  |            |       |
| 4   |      |                 |                  |            |       |
| 5   |      |                 |                  |            |       |
| 6   |      |                 |                  |            |       |
| 7   |      |                 |                  |            |       |

## Week Summary (fill after Day 7)

- **Total roles surfaced:** ___
- **Total applications submitted:** ___
- **Target met (2–3 applications)?** ___
- **Time saved vs manual scanning:** ~___ min/day × 7 = ___ min
- **Best role found this week:** ___
- **Worst false positive (low-fit role that passed):** ___
- **Scoring adjustments needed:** ___

## Known Issues to Watch

1. **Cloudflare blocks on Upwork** — some URLs return verification pages, scored 0/9. Expected.
2. **"Thin day" warnings** — some days will have <3 qualified roles. This is honest, not a bug.
3. **Senior roles still appearing** — if a role scores 7+/9 despite "too senior" flag, it still qualifies (penalty is -2, not auto-reject). Review manually.
4. **Invented details** — if the LLM states salary or seniority not in the JD, flag it. Guardrail violation.

## Eval Cases to Run Mid-Week

After Day 3, run these eval cases to verify the agent is still healthy:

```bash
# E3: Seniority filter test
python3 agent_mvp/test_eval_e3.py

# E1: Standard day (just run the agent and check the digest has 3-5 roles)
python3 agent_mvp/scout.py
```

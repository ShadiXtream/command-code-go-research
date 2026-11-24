# Whiteboard — Proposals and the Approval Gate

Every agent that works on this repository writes here first. **No agent changes project files until a proposal on this whiteboard is explicitly approved by the user.**

The whiteboard is the only folder an agent may write to without approval.

## Lifecycle

| Status | Meaning | Set by |
|---|---|---|
| `OPEN` | Proposed, under discussion, not approved | Author |
| `APPROVED` | User explicitly approved the stated scope | Recorded by author from the user's decision |
| `REJECTED` | User declined; the reason is recorded | Recorded by author from the user's decision |
| `WITHDRAWN` | Author pulled it before a decision | Author |
| `IMPLEMENTED` | Change is on `main` and verified | Author |

## Opening a proposal

1. Copy `_TEMPLATE.md` to `P-NNNN-short-title.md`. `NNNN` is the next free number — check the highest existing file and `decisions.md`.
2. Fill every section. A proposal without **Scope** and **Files** is not reviewable.
3. Set `Status: OPEN`.
4. Commit and push on a branch named `agent/<agent-name>/P-NNNN`. Never push to `main`.
5. State what you proposed, then wait.

## Discussing

- Append a dated entry under **Discussion**. Do not rewrite another author's text.
- Debate is welcome: state the disagreement, the evidence, and the alternative.
- To change the ask, edit the proposal and add a dated note describing what changed. A material scope change resets the status to `OPEN`.

## What counts as approval

Approval exists only when the user states it explicitly and it is written down:

- the user's words are quoted in **Decision**, with the date;
- the approved scope is restated in that section;
- `decisions.md` gets a matching row.

Not approval: silence, a comment about something else, another agent's agreement, a merge from elsewhere, or the passage of time. When in doubt, ask again.

## Implementing

- Stay inside the approved scope. Anything outside it needs a new proposal.
- Work on `agent/<agent-name>/P-NNNN`, open a pull request, and let the user merge.
- Record the commit hash, what changed, and how it was verified in **Implementation**.
- Set `Status: IMPLEMENTED` only when the change is on `main`.

## Finding work

```bash
grep -l "^\*\*Status:\*\* OPEN" SharedMemory/whiteboard/P-*.md
```

## Hard rules

1. The whiteboard is the only pre-approval write target.
2. One proposal, one scope. Splitting a large change is encouraged; bundling unrelated changes is not.
3. An agent never approves its own proposal and never treats another agent as the approver.
4. `main` stays clean: branches and pull requests only.
5. No secrets, credentials, tokens, or personal data.
6. The ledger (`decisions.md`) is append-only. A correction is a new row that references the old one.

# Priority-list setup

Sign-ups go from the form → `/api/priority-list` (a Vercel serverless function)
→ the URL in `PRIORITY_LIST_WEBHOOK_URL`. The form shows success **only** when
that endpoint replies `{"ok": true}`.

| Where it runs            | `PRIORITY_LIST_WEBHOOK_URL` | What happens                                         |
| ------------------------ | --------------------------- | ---------------------------------------------------- |
| `npm run dev` (local)    | not set                     | Saved to `.data/priority-list.jsonl` (git-ignored)   |
| Vercel / `npm start`     | not set                     | Form says sign-ups aren't connected; offers email    |
| Anywhere                 | set                         | Sent to your endpoint; duplicates reported by it     |

## Option A: Google Sheet (recommended, free)

1. Create a Google Sheet (for example "Clarity priority list").
2. **Extensions → Apps Script**. Delete the sample code and paste
   [`google-apps-script.js`](./google-apps-script.js). Save.
3. **Project Settings (cog) → Script properties → Add property**:
   `SHARED_SECRET` = a long random string. (Generate one with
   `python3 -c "import secrets; print(secrets.token_urlsafe(32))"`.)
4. **Deploy → New deployment → type: Web app**.
   Execute as: **Me**. Who has access: **Anyone**. Authorise when asked.
5. Copy the **Web app URL** (ends in `/exec`).
6. In Vercel: **Project → Settings → Environment Variables**, add for Production
   (and Preview if you want to test there):
   - `PRIORITY_LIST_WEBHOOK_URL` = the `/exec` URL
   - `PRIORITY_LIST_WEBHOOK_SECRET` = the same secret as step 3
7. Redeploy. Submit a test entry and check a row appears in the "Priority list" tab.

"Anyone" access is needed so Vercel can reach the script; the shared secret
stops anyone else writing to your sheet. If you edit the script later, use
**Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## Option B: any other service

Point `PRIORITY_LIST_WEBHOOK_URL` at anything that accepts a POST with this
JSON body and replies `{"ok": true}` (optionally `"duplicate": true`):

```json
{ "name": "…", "email": "…", "consent": true, "submittedAt": "ISO date", "source": "clarity-website", "secret": "…" }
```

(Zapier/Make webhooks work if you add a step that returns that response.)
To use a service with its own API (Mailchimp, Resend, a database), replace
`sendToWebhook` in `src/lib/priority-list.ts`.

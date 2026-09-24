/**
 * Clarity priority list: Google Sheets receiver.
 *
 * Setup (about 5 minutes) is in docs/priority-list-setup.md.
 * 1. Create a Google Sheet. Extensions → Apps Script. Paste this file.
 * 2. Project Settings → Script properties → add SHARED_SECRET (same value
 *    as PRIORITY_LIST_WEBHOOK_SECRET on Vercel).
 * 3. Deploy → New deployment → Web app. Execute as: Me. Access: Anyone.
 * 4. Copy the web app URL into PRIORITY_LIST_WEBHOOK_URL on Vercel.
 */

const SHEET_NAME = "Priority list";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // serialise writes so duplicates can't slip through
  try {
    const data = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty("SHARED_SECRET");
    if (!secret || data.secret !== secret) return json({ ok: false, error: "unauthorised" });

    const email = String(data.email || "").trim().toLowerCase();
    const name = String(data.name || "").trim();
    if (!email || !name || data.consent !== true) return json({ ok: false, error: "invalid" });

    const sheet = getSheet();
    const last = sheet.getLastRow();
    if (last > 1) {
      const emails = sheet.getRange(2, 2, last - 1, 1).getValues().flat();
      if (emails.indexOf(email) !== -1) return json({ ok: true, duplicate: true });
    }

    sheet.appendRow([new Date(data.submittedAt || Date.now()), email, name, "yes", data.source || ""]);
    return json({ ok: true, duplicate: false });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Submitted at", "Email", "Name", "Consent", "Source"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

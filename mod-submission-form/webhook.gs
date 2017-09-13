function sendLastEntry() {
  const webhookURL = 'A_WEBHOOK_URL';
  const spreadsheetID = 'A_SPREADSHEET_ID';

  const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  const form = spreadsheet.getSheets()[0];
  const lastRow = form.getLastRow();
  const urlValue = form.getRange(lastRow, 2, 1, 1).getValue(); // second column of bottom entry
  const postData = { url: urlValue };

  const postBody = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(postData),
  };

  UrlFetchApp.fetch(webhookURL, postBody);
}

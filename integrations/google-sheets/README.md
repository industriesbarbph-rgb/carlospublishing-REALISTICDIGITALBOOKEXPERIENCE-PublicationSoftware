# VPC Publishing spreadsheet connection

The public website is already data-ready. The publisher can maintain changing information in one Google Sheet instead of editing GitHub.

Create these tabs exactly:

## Settings
`key | value`

Recommended keys: `name`, `author`, `lazadaShop`, `nationalBookStoreFinder`, `fullyBooked`, `availabilityNote`.

## Books
`id | title | filipinoTitle | edition | level | isbn13 | summary | audio`

Use IDs `1`, `2`, `3`, `4`.

## Physical Stores
`bookId | retailer | branch | city | status | lastConfirmed | notes | active`

Use `all` in `bookId` when a row applies to every volume. Use `TRUE` / `FALSE` in `active`.

## Online Links
`bookId | retailer | url | active`

## Articles & Write-ups
`bookId | title | publication | url | date | notes | active`

Use `all` for author/publisher/series-wide features.

## Connect it
1. In the Sheet: Extensions → Apps Script.
2. Paste `Code.gs` from this folder.
3. Deploy → New deployment → Web app.
4. Execute as the Sheet owner; access: Anyone with the link.
5. Copy the `/exec` URL.
6. Put that URL into `config.js` as `dataEndpoint` once. After that, the publisher only edits the Sheet.

Only public storefront data should go in this spreadsheet endpoint. Do not place credentials, payment secrets, private customer data or protected book content in these tabs.

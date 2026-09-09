/* ===============================================================
   YOUR WRITING LIVES HERE. This is the only file you ever edit.

   Each note needs four things: subject, date, folder, body.
   Slug, preview, initials and sort order are generated for you.
   A new folder value creates a new folder in the sidebar.

   The body is plain text. Blank line = new paragraph. Also:
     ## Heading        - bullet        > quote
     **bold**          _italic_        [link text](https://...)
     ---               (horizontal rule)
   =============================================================== */

const NOTES = [

{
  subject: "How AI changes the shape of a venture portfolio",
  date: "2026-08-30",
  folder: "Venture",
  body: `
Seed rounds are getting smaller and the companies raising them are getting further along. That combination breaks a few assumptions reserve models were built on.

## The compression

A team of four now ships what a team of fifteen shipped in 2021. The consequence isn't only cheaper software — it's that the evidence a seed investor gets to see is much stronger at the same check size.

> The scarce thing stopped being capital and started being distribution.

Which raises the obvious question for a fund: if the first check buys more proof, what exactly is the follow-on premium paying for?

## Three things I'd want to test

- Whether gross margin holds once inference costs are fully loaded.
- Whether the wedge survives the incumbent shipping a passable version.
- Whether the team can hire outside the founding cluster.

None of these are new questions. The timelines for answering them just got shorter.
`
},

{
  subject: "Seat-based pricing is quietly on the way out",
  date: "2026-08-11",
  folder: "Markets",
  body: `
If the software does the work instead of helping a person do the work, you can't keep charging per person.

Outcome pricing sounds clean until you try to write the contract. Who attributes the outcome? What happens in a bad quarter that has nothing to do with the product? Most companies land on a hybrid — a platform fee plus consumption — and then spend two years tuning the ratio.

## What to watch on the income statement

Net revenue retention stops being comparable across the cohort. A consumption-led business at **140% NRR** and a seat-led business at 140% NRR are not the same business, and the multiple should reflect that.
`
},

{
  subject: "What I actually learned from 40 diligence calls",
  date: "2026-07-19",
  folder: "Venture",
  body: `
Reference calls are mostly theater until you change one thing: stop asking whether they like the product and start asking what they would do if it disappeared tomorrow.

The good answers are specific and slightly annoyed. The bad answers are warm and vague.

## Questions that earned their place

- Walk me through the week you decided to buy.
- Who inside your company would defend this line item?
- What did you almost buy instead, and why didn't you?
`
},

{
  subject: "Reading list — August",
  date: "2026-07-02",
  folder: "Reading",
  body: `
Five things worth the time this month, plus one I gave up on halfway through and don't regret.

- [Title of the first piece](https://example.com) — the argument about margin structure is the useful part; skip the intro.
- [Title of the second piece](https://example.com) — best short history of the category I've found.
- [Title of the third piece](https://example.com) — mostly for the appendix.
`
},

{
  subject: "A note on why this site looks like an inbox",
  date: "2026-05-14",
  folder: "Meta",
  body: `
Because that's how I actually read. Long things arrive, sit unread for a week, and either get opened or archived.

A blog index is a storefront. An inbox is a queue. The second one is more honest about what reading is like.
`
}

];

// Your details — used for the avatar, the byline, and the reply button.
const AUTHOR = {
  name: "Carolyn Lu",
  tagline: "Notes on venture & software",
  email: "you@example.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/carolyn-lu" },
    { label: "Email", href: "mailto:you@example.com" }
  ]
};

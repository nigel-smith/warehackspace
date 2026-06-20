# Ware Hackspace website

The site for a new hackspace and Linux User Group (Ware LUG) in Ware,
Hertfordshire, including a directory of other active local groups.

## Project status

Ware Hackspace is brand new: a website, a handful of interested
people, and informal meet-ups starting at a local pub while the group
grows. There's no fixed venue yet, deliberately, the plan is to grow
the group first and find a proper home once there's a real need for
one. The up-to-date roadmap lives on the site itself (`#roadmap` in
`index.html`), not here, so there's a single source of truth rather
than two lists that can drift out of sync.

It's a plain static site, three files, no build step, no framework.
That's deliberate: anything that needs a build process is one more thing
that can break GitHub Pages silently. Edit a file, commit, and the live
site updates within a minute or two.

```
index.html        the main page content
groups.html        "Local groups" — other like-minded spaces in Ware
assets/style.css  all the visual design (colours, fonts, spacing)
assets/main.js    the mobile menu — that's all the JS does
README.md         this file
```

## Publishing it (one-time setup)

1. Push these files to a GitHub repo, with `index.html` at the **root**
   (not inside a subfolder).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch", branch `main`, folder `/ (root)`.
4. Save. The site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/`
   within a minute or two.

No GitHub Action, no Jekyll config, nothing else required.

## Making routine edits

You can do all of the below straight in the GitHub web interface: open
the file, click the pencil ("Edit this file") icon, change the text,
then "Commit changes" at the bottom. The live site updates shortly
after.

**Change the contact email or GitHub links**
Search `index.html` for `hello@warehackspace.org.uk` and
`YOUR-USERNAME/ware-hackspace` — both appear a couple of times. Replace
with your real details.

**Update the roadmap**
Find `<ol class="roadmap-list">` in `index.html`. Each step is one
`<li>`. To mark a step done, change its class from `todo` to `done` —
the tick and strikethrough are automatic, driven by CSS:

```html
<li class="done"><span class="status-label">Done —</span> Find a venue</li>
```

To add a new step, copy an existing `<li class="todo">...</li>` line
and edit the text.

**Add or edit a local group**
Open `groups.html` and find `<div class="group-grid">`. Each group is
one `<article class="group-card">...</article>` block — copy one,
edit the name, address, description and link, and paste it in
alongside the others.

**Change wording anywhere else**
Everything visible on the page is plain text sitting between HTML tags
in `index.html` — find the sentence you want to change (use your
browser's find-in-page, or GitHub's search) and edit it directly. You
don't need to touch `style.css` or `main.js` for wording changes.

## Adding a real contact form

GitHub Pages only serves static files, so there's no built-in way to
collect form submissions — that's why the site uses a `mailto:` link
and a GitHub Discussions link instead of a form. If you'd rather have
an actual form that lands in your inbox, a free service like
[Formspree](https://formspree.io) can do this without needing a
backend of your own — it's a small change to swap one of the buttons
for a form that posts to their endpoint.

## If you change the design

Colours, fonts and spacing all live at the top of `assets/style.css`,
in the `:root { ... }` block, so you can retheme the whole site by
changing a handful of values rather than hunting through the file.

A few things worth keeping if you do:

- Don't remove the `:focus-visible` outline rule — it's what lets
  keyboard users see where they are on the page.
- If you change a colour, check it against
  [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/)
  — body text should stay above a 4.5:1 contrast ratio against its
  background.
- The `@media (prefers-reduced-motion: reduce)` block turns off
  animation for people who've asked their OS for that. Keep it if you
  add any new animation.

## Testing changes locally (optional)

You don't need anything installed to edit and publish this site — the
GitHub web editor is enough. If you do want to preview changes on your
own machine before committing, the simplest option with no extra
tools is Python's built-in server, run from this folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

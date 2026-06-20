# Ware Hackspace website

The site for a new hackspace and Linux User Group (Ware LUG) in Ware,
Hertfordshire, including a directory of other active local groups and
a running log of updates.

## Project status

Ware Hackspace is brand new: a website, a handful of interested
people, and informal meet-ups starting at a local pub while the group
grows. There's no fixed venue yet, deliberately, the plan is to grow
the group first and find a proper home once there's a real need for
one. The up-to-date roadmap lives on the site itself (`#roadmap` in
`index.html`), not here, so there's a single source of truth rather
than two lists that can drift out of sync.

## How this is built

This is a [Jekyll](https://jekyllrb.com) site, GitHub Pages' built-in
site generator. No build step to run yourself and nothing to install:
push a file, GitHub builds it, the live site updates within a minute
or two. The reason it's worth the small extra structure over a plain
HTML file: adding a new update only ever touches one new file, never
the rest of the site.

```
_config.yml        site title, description, and a few Jekyll settings
_layouts/
  default.html      shared header, nav and footer — every page uses this
  post.html          wraps each update with its title, date and a back link
_posts/             one file per update — see "Adding an update" below
index.html          homepage content
groups.html         "Local groups" — other active groups in Ware
updates.html        lists every post in _posts automatically
assets/style.css    all the visual design (colours, fonts, spacing)
assets/main.js      the mobile menu — that's all the JS does
README.md           this file
```

## Publishing it (one-time setup)

1. Push these files to a GitHub repo, with `_config.yml` at the
   **root** (not inside a subfolder).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch", branch `main`, folder `/ (root)`.
4. Save. The site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/`
   within a minute or two. GitHub Pages detects the `_config.yml` and
   runs the Jekyll build automatically, no extra configuration needed.

**One setting worth checking:** if the site lives at
`username.github.io/repo-name/` (most repos) rather than its own
domain or `username.github.io` directly, open `_config.yml` and set
`baseurl: "/repo-name"`. Get this wrong and the CSS or internal links
will look broken even though the content is fine.

## Adding an update (the main thing you'll do regularly)

Add a new file to `_posts/`, named like this:

```
_posts/2026-07-04-first-meetup.md
```

The date in the filename matters, it controls where the post sits in
the list and what its web address is. The file itself just needs a
short front matter block, then plain text or Markdown underneath:

```markdown
---
layout: post
title: "Our first meet-up"
---
A short write-up of what happened. **Bold**, *italic*, and
[links](https://example.com) all work, same as any Markdown.
```

Save it, commit it, and it shows up on the Updates page automatically
, nothing else needs editing. To edit an existing post later, it's
the same as any other file: find it in `_posts/`, edit, commit.

## Making other routine edits

Everything else is still a plain-text edit via GitHub's web editor
(pencil icon → edit → commit):

**Change the contact email or GitHub links**
Search `index.html` for `hello@warehackspace.org.uk` and
`YOUR-USERNAME/ware-hackspace` — both appear in a couple of places.

**Update the roadmap**
Find `<ol class="roadmap-list">` in `index.html`. To mark a step
done, change its class from `todo` to `done`:

```html
<li class="done"><span class="status-label">Done —</span> Find a venue</li>
```

**Add or edit a local group**
Open `groups.html`, find `<div class="group-grid">`. Each group is
one `<article class="group-card">...</article>` block, copy one,
edit it, paste it in.

## Adding a real contact form

GitHub Pages only serves static files, so there's no built-in way to
collect form submissions, that's why the site uses a `mailto:` link
and a GitHub Discussions link instead of a form. A free service like
[Formspree](https://formspree.io) can add a real form without needing
a backend of your own, if that's ever wanted.

## If you change the design

Colours, fonts and spacing all live at the top of `assets/style.css`,
in the `:root { ... }` block. A couple of things worth keeping if you
do retheme it:

- Don't remove the `:focus-visible` outline rule, it's what lets
  keyboard users see where they are on the page.
- If you change a colour, check it against
  [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/),
  body text should stay above a 4.5:1 contrast ratio against its background.
- The `@media (prefers-reduced-motion: reduce)` block turns off
  animation for anyone who's asked their OS for that. Keep it if you
  add any new animation.

## Testing changes locally (optional)

The GitHub web editor is enough for routine edits, no local setup
needed. If you do want to preview a Jekyll build on your own machine
first:

```
gem install bundler jekyll
bundle init
bundle add jekyll
bundle exec jekyll serve
```

Then open `http://localhost:4000` in a browser. This is genuinely
optional, every edit above can be done entirely through GitHub itself.

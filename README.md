# Authors Together

In 2024, [A Book Apart](https://abookapart.com/) closed its doors after publishing a much-loved collection of more than 50 brief books for people who make websites. The rights to each book have reverted to the authors — hi, that's us — and we've put together this semi-official directory to help you find our books in their new homes.

You can view the directory at [authors-together.org](https://authors-together.org).

If you're a former ABA author and your book(s) are missing from the directory, please [open a PR](https://github.com/authors-together/authors-together/pulls) or [an issue](https://github.com/authors-together/authors-together/issues).

## Running & building the site

I prefer and use [Bun](https://bun.sh/) for this project; you can use whatever you want, but take care not to accidentally (or intentionally) commit changes to `package.json` or lockfiles that might break the build. (This is a reminder to myself as much as anything.)

```bash
bun install
bun dev
```

As you can see, it's not a very complex site. The most complex element are the book cards, which are an Astro component styled with [Tailwind v4 beta](https://tailwindcss.com/) plus some custom CSS (see the `[data-book]` selector in `src/styles/main.css`).

## Some things to note when contributing

The site is built with [Astro](https://astro.build/)'s Content Collections API. If you're adding new authors/books, make sure to include the `.md` extension in filenames (or else Astro will ignore them) and make sure all required fields are included. (If you're in VSCode, you should see red squiggly lines under any missing fields.)

Ideally, you should run the site locally to see how your changes look before submitting a PR. But if that isn't working for some reason, Netlify will automatically build and deploy a preview when you submit.

## Credits (and who the heck are Bits&Letters)

I'm [David Demaree](https://demaree.me), author of [_Git for Humans_](https://gitforhumans.us) (ABA #17). This site came out of a bunch of conversation in a private Slack group with several other ABA authors who helped wrangle links and other information.

Obviously, the site design pays homage to the original A Book Apart publication and identity design by [Jason Santa Maria](https://jasonsantamaria.com/), with a few tweaks to (e.g.) switch to open-source fonts. Specifically, the fonts are:

- [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display) designed by [Patric King](https://patricking.com/)
- [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) designed by @frankrolf
- [Geist](https://geist.sh/) and [Geist Mono](https://vercel.com/font) from Vercel

The site is built with [Astro](https://astro.build/) and hosted on [Netlify](https://netlify.com/).

As for [Bits&Letters](https://bitsandletters.co), it's my web development agency focused on human-centered, standards-based design and development. I'm always looking for new projects and clients. [Get in touch](https://bitsandletters.com/contact).

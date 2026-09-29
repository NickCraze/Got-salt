# GOT Holdings

A responsive blue, white and black marketing website for GOT Holdings, connecting salt import/export with logistics, warehousing and industrial partnerships.

## Run locally

Serve `dist` using any static web server, for example `python3 -m http.server 8000 --directory dist`, then open `http://localhost:8000`.

There is no build step or package dependency. Source files are `dist/index.html`, `dist/styles.css` and `dist/script.js`. Images are served locally from `dist/assets`. Google Fonts is optional: the page falls back to Arial when unavailable.

## Features

- Responsive layout and mobile navigation.
- Keyboard-accessible salt grade tabs.
- Product enquiries prefill the contact message.
- Validated enquiry form opens a mailto draft; it does not submit data to a server or claim email delivery.
- Click-to-call, direct email and map links.
- Reduced-motion support and visible keyboard focus.

## Content notes

The company name and product range follow https://www.gotholdings.co.za/. Existing sales and partnership contact details were reused from its contact page. Review these details before public launch. Warehousing capacity, product availability and application suitability are enquiries, not asserted quantities or guarantees. The copy is a first draft for client review.

## Image credits

- Port photograph: Wolfgang Weiser / Unsplash, https://unsplash.com/photos/container-ships-and-cranes-at-a-busy-port-azTSkG93BG4 (Unsplash license). Depicts Hamburg; it is representative imagery, not a GOT facility photograph.
- Salt stockpiles: Pseudopanax / Wikimedia Commons, https://commons.wikimedia.org/wiki/File:Salt_piles_at_Lake_Grassmere_Saltworks.jpg (public domain). Depicts New Zealand; it is representative imagery, not a GOT facility photograph.

## Hosting

Deploy the `dist` directory to a static hosting service. The review version is hosted privately with Sites. No production domain, existing WordPress website or DNS configuration is modified by this project.

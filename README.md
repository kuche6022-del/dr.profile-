# Dr. Grace Obar — Profile Website

A responsive, premium one-page profile website starter built with plain HTML, CSS and JavaScript.

## Preview
Open `index.html` in a browser. For local development, you can also run:
`python -m http.server 8000`
and visit `http://localhost:8000`.

## Included
- Responsive layout for desktop and mobile
- Navigation, section links and subtle reveal animations
- Profile introduction, coaching services, hub, credentials and contact section
- LinkedIn link supplied by the client

## Important: personalize before publishing
This first build uses only information supplied so far. It deliberately does not invent biography details, awards, testimonials, phone numbers or email addresses.

1. The approved profile photograph is included at `assets/grace-obar-profile.jpg` and is displayed in the homepage hero. To change it later, replace that image while keeping the same filename.
2. Add the verified biography, career history, education institutions, awards and testimonials.
3. Add confirmed phone, WhatsApp and email details. The contact section currently links to LinkedIn.
4. Confirm the exact meaning and awarding bodies for MAPP and CP before expanding those abbreviations.
5. Confirm whether “University of East London” is an education, employment or other affiliation before describing it more specifically.
6. Confirm the coaching hub's official motto. The supplied LinkedIn excerpt only showed “Authentic Life & Executive…” so the site currently uses a general purpose-led message instead of presenting that fragment as a complete motto.

## Files
- `index.html` — page content
- `styles.css` — visual design and responsive layout
- `script.js` — accessible mobile menu, current year and reveal effects
- `favicon.svg` — custom GO monogram browser icon


## Deploy to Render

This is a plain static website. It does not need Node.js, a database, or a start command.

### 1. Upload the website to GitHub
1. Extract this ZIP file.
2. Create a GitHub repository, for example `dr-grace-obar-profile`.
3. Upload the contents of the project folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, and `render.yaml` at the top level.
4. Commit the files to the `main` branch.

### 2. Create the Render site
1. Sign in at https://dashboard.render.com/.
2. Select **New** → **Static Site**.
3. Connect GitHub and select the repository.
4. If asked for build settings, use:
   - Branch: `main`
   - Build Command: leave blank
   - Publish Directory: `.`
5. Create the Static Site and wait for deployment to finish.

The included `render.yaml` contains the same static-site configuration for Render Blueprints.

### 3. After deployment
Open the generated `*.onrender.com` URL on a phone, tablet and desktop. You can add a custom domain in the Render site's Settings. Updates pushed to the connected GitHub branch can trigger automatic redeployment.

Official guide: https://render.com/docs/static-sites


## Compact homepage update
The landing section and section spacing have been shortened for a quicker first impression. The services, hub, credentials and contact details remain available further down the page.


## Outstanding edition
This edition adds refined editorial styling, a custom browser icon, social sharing metadata, basic structured data, keyboard-accessible navigation, and additional visual details. It remains a static site and is ready for Render.

The approved profile photograph is now included in `assets/grace-obar-profile.jpg` and displayed in the homepage hero. Add verified biography/contact details before publishing. No testimonials, awards, or unverified career claims have been invented.


## Photo gallery
The homepage now includes a swipeable “Her work, in moments” gallery after the services section. It includes three supplied event photographs with descriptive, context-conscious captions. On phones, swipe horizontally; on larger screens, use the arrow controls. Replace the three JPEGs in `assets/` if you later want different photographs, keeping the filenames or updating the image paths in `index.html`.

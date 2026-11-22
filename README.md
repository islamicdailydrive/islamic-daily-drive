# Islamic Daily Drive website

A responsive static website starter for Islamic Daily Drive.

## Included
- Mobile-friendly homepage and navigation
- Reminder topic cards with category filtering and search
- Daily Du'a, Qur'an and Hadith, family guidance, video/social and about sections
- WhatsApp contact and counselling enquiry links
- Business email and phone number
- Editable social media link settings in `config.js`
- Basic browser security headers for Cloudflare Pages

## Important security and publishing notes
This is a static public website. It does not include a private admin login, a database, or a server-side counselling inbox. Do not add passwords, API keys, private keys or confidential visitor information to these files. Counselling enquiries currently open WhatsApp directly and are not stored by this website.

For an administrator dashboard with secure authentication and private stored enquiries, a separate backend and secure authentication provider are needed. Free tiers may be available, but have usage limits and configuration requirements. Do not claim a static page is a secure admin system.

## Edit your contact and social links
Open `config.js`. The email and WhatsApp details are already set. Add the official full HTTPS page URLs for Facebook, TikTok, YouTube and Instagram in the matching fields. Leave a field empty until you have the correct official URL.

## Edit website content
Open `index.html` and edit the visible headings, paragraphs and content cards. Keep Islamic quotations, Arabic text, transliteration, translations and religious attributions out until they have been checked against reliable sources. Add the exact source reference whenever publishing Islamic text.

## Publish with Cloudflare Pages
1. Upload these files to a GitHub repository.
2. In Cloudflare, choose Workers & Pages, then Create, then Pages, then Connect to Git.
3. Select the repository.
4. For a plain static site, leave the build command blank and set the output directory to `/` if the interface accepts it. If it requires a directory name, use the repository root setting shown by Cloudflare.
5. Deploy. Cloudflare will provide a free `pages.dev` address.
6. Future commits to the connected GitHub branch trigger a redeploy.

Free plan limits and provider terms can change. A custom domain is optional and usually costs money.

## Contact details
Email: islamicdailydrive@gmail.com
Phone / WhatsApp: +2348107342174

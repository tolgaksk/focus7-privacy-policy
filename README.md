# Focus 7 landing page and privacy policy

This repository hosts the public web page for **Focus 7: Güncel Haber & Finans**.

The page is designed to support app download growth with:

- a Turkish conversion-focused landing section,
- Google Play download calls to action,
- SEO, Open Graph, Twitter Card, and SoftwareApplication structured data,
- the existing privacy policy kept on the same page under `#privacy`.

## Updating the Google Play link

The current call-to-action links use a Google Play search URL because the direct package URL is not stored in this repository.
When the package name is available, replace both CTA `href` values in `index.html` with:

```text
https://play.google.com/store/apps/details?id=<android-package-id>&hl=tr
```

## Download growth checklist

Use this page together with the store listing:

- align the Google Play title and short description with "güncel haber", "finans", and "son dakika" search intent,
- add real app screenshots or a preview video to the landing page,
- connect campaign links with UTM parameters once a direct store URL is available,
- keep the privacy policy link accessible for Google Play compliance.
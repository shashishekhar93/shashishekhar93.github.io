# Shashi Shekhar — Portfolio

Personal portfolio website for **Shashi Shekhar**, a mobile engineer with **4+ years of professional experience**.

The site is intentionally built as a lightweight static GitHub Pages project rather than introducing a framework or build pipeline. It uses semantic HTML, custom CSS, vanilla JavaScript, GSAP/ScrollTrigger, and Lenis via CDN.

## Featured work

- **BlueCab** — Android + iOS mobile work for a cab-booking product.
- **IPPO** — Mobile service-management experience for technicians/field operations.
- **Hello Bacchon** — Education-focused mobile application.
- **VG Academy** — Education product experience.
- **Country Code Selector SDK** — Reusable country/phone-code selection component.
- **RestaurantsNearMe iOS** — React Native iOS work, including navigation and restaurant/table-booking flows.

Private/company work is presented at a portfolio level without exposing private source code.

## Tech stack

**Mobile:** Kotlin, Java, Android SDK, Jetpack Compose, XML, Swift, SwiftUI, React Native  
**Architecture:** MVVM, Clean Architecture, Repository Pattern, Navigation  
**Async & state:** Coroutines, Flow, LiveData, ViewModel  
**Networking:** Retrofit, REST APIs, OkHttp, JSON, Postman, Swagger  
**Persistence:** Room, SQLite, DataStore, Firebase Firestore  
**Quality:** JUnit, Mockito, Espresso, Firebase Crashlytics  
**Tools:** Android Studio, Xcode, Git, GitHub Actions, JIRA

## Local preview

This site has no build step.

Open `index.html` directly in a browser, or from the project folder run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This repository is intended for GitHub Pages.

1. Commit the site files to the repository.
2. Push the branch to GitHub.
3. In GitHub, open **Settings → Pages**.
4. Select the branch/folder used for deployment.
5. Keep the custom domain/user-site URL as `https://shashishekhar93.github.io`.

The project includes `.nojekyll` so GitHub Pages can serve the static files directly.

## Project structure

```text
.
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _config.yml
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── bluecab/
        ├── country-sdk/
        ├── hello-bacchon/
        └── ippo/
```

## Contact

- Email: p.shekharmishra93@gmail.com
- Phone: +91 7398334112
- GitHub: https://github.com/shashishekhar93
- LinkedIn: https://www.linkedin.com/in/shashi-shekhar-m-150565bb

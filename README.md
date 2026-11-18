# Personal Profile Website

## About the Project

This is a personal profile website that I developed to introduce myself, share my educational background, and showcase my skills, projects, interests, and hobbies.

I created this website using HTML, CSS, and JavaScript. I also used GitHub Actions to automate the validation and deployment process.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- GitHub Actions
- GitHub Pages

## Website Sections

The website contains the following sections:

- **Home:** A short introduction about me.
- **Professional Journey:** My education, skills, internships, projects, and achievements.
- **Personal Interests:** A few things I enjoy, including music, movies, food, and travel.
- **Family:** A section introducing my family.
- **Hobbies:** Activities I enjoy during my free time.
- **Contact:** My contact details and social profile links.

## Project Structure

```text
Profile-Website/
│
├── index.html
├── css/
│   ├── theme.css
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── hero/
│   ├── journey/
│   ├── interests/
│   ├── family/
│   └── hobbies/
│
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── deploy.yml
│       ├── pr-checks.yml
│       ├── lighthouse.yml
│       └── notify.yml
│
├── .htmlhintrc
├── .stylelintrc.json
├── .gitignore
└── README.md
```

## Theme Management

I kept the website's theme-related variables in `css/theme.css`. This makes it easier to change colours and other theme values without modifying the main stylesheet.

I also created separate Git branches to practise different themes, including dark and warm-light themes.

## GitHub Actions Workflows

I created five GitHub Actions workflows to automate different tasks:

1. **HTML and CSS Validation:** Checks the HTML using HTMLHint and the CSS using Stylelint.
2. **Deployment:** Builds and deploys the website to GitHub Pages.
3. **Pull Request Checks:** Checks the HTML title, image alt attributes, and console log statements before merging.
4. **Lighthouse Audit:** Runs a performance and quality audit after deployment.
5. **Deployment Notification:** Sends a Slack notification when deployment succeeds or fails.

I used Stylelint instead of CSSLint because the project uses modern CSS features such as custom properties and Grid.

## Deployment

The website is hosted using GitHub Pages.

**Live Website:** https://harsha-varthini09.github.io/Portfolio-Website/

## Git Workflow

I followed a branch-based workflow while developing the website.

- `main` – Contains the production version.
- `develop` – Used to integrate completed changes.
- Feature branches – Used to develop individual website sections and features.
- Theme branches – Used to make theme-related changes.
- CI branches – Used to add and update GitHub Actions workflows.

Changes are pushed through pull requests instead of directly modifying the production branch.

## Contact

- **Email:** harshavarthini.eswaramurthy@psiog.com
- **GitHub:** https://github.com/Harsha-varthini09
- **LinkedIn:** Add your LinkedIn profile URL here.
- **Slack url:** https://app.slack.com/client/T0CJU672KU4C0CJQ9GRBFC
---

This project helped me practise front-end development, Git branching, pull requests, GitHub Actions, and automated deployment.
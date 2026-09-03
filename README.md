# Shubham Gupta Portfolio

A full-stack portfolio built from scratch with a zero-dependency Node.js backend and a custom frontend served as static assets. The content is seeded from the attached resume and organized so it stays easy to extend later.

## Stack

- Node.js built-in HTTP server
- Vanilla JavaScript frontend
- Custom CSS
- Local JSON contact storage

## Getting started

```bash
npm run dev
```

The app runs on `http://localhost:4000`.

## Production run

```bash
npm start
```

## Where to edit content

- Main portfolio content: `server/portfolio-data.js`
- Resume download file: `public/shubham-gupta-resume.pdf`
- Frontend layout and interactions: `public/app.js`
- Visual design: `public/styles.css`

## Contact form behavior

The form posts to the Node backend and stores submissions in `server/data/contact-submissions.json`.

- A sample file is included as `server/data/contact-submissions.example.json`
- The real submission file is ignored by git and created automatically when the first message is sent

## Docker

```bash
docker build -t shubham-gupta-portfolio .
docker run -p 4000:4000 shubham-gupta-portfolio
```

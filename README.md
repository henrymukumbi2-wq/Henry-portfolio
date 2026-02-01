# Mukumbi Henry Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Display of featured projects
- **Skills Section**: Technical skills and expertise
- **Experience Timeline**: Professional background and achievements
- **Testimonials**: Client feedback and reviews
- **Gallery**: Professional photos

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod validation
- **Email**: Nodemailer

## 🚀 Deployment

### Free Deployment on Railway

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub (recommended)

2. **Connect Your Repository**
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

3. **Configure Environment Variables**
   - In your Railway project, go to "Variables"
   - Add these environment variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```
   - For Gmail: Use an "App Password" (not your regular password)
   - Enable 2FA on your Google account first, then generate an App Password

4. **Deploy**
   - Railway will automatically detect it's a Node.js app
   - It will run `npm install`, `npm run build`, then `npm start`
   - Your site will be live at `https://your-project-name.up.railway.app`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mukumbi-henry-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your email credentials for the contact form:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Start the development server:
```bash
npm run dev
```

5. In a separate terminal, start the backend server:
```bash
npm run server
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run check` - Run TypeScript type checking

## Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                 # Backend Express server
│   ├── routes/            # API routes
│   └── index.js           # Server entry point
├── public/                 # Static assets
└── attached_assets/       # Additional assets
```

## Contact

Mukumbi Henry
- Email: henrymukumbi2@gmail.com
- WhatsApp: +260 953 736 093
- Phone: +260 979 632 548
- Location: Ndola, Zambia

## License

This project is licensed under the MIT License.
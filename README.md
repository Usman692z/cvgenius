# CVGenius - AI Resume Builder

An intelligent resume builder application with user authentication, beautiful UI, and AI-powered suggestions.

## ✨ Features

- **User Authentication**: Sign up and login securely
- **Modern UI**: Beautiful dark theme with responsive design
- **Resume Builder**: Create and manage multiple resumes
- **AI Suggestions**: Get smart suggestions to improve your content
- **Fast & Easy**: Build professional resumes in minutes
- **Mobile Friendly**: Works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org))
- npm 8+
- Git

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:YOUR-USERNAME/cvgenius.git
cd cvgenius
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file**
```bash
cp .env.example .env
```

4. **Generate JWT Secret**
```bash
# On Mac/Linux
openssl rand -hex 32

# On Windows (PowerShell)
$RandomBytes = [System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32)
[System.BitConverter]::ToString($RandomBytes).Replace('-', '')
```

Copy the output and add to `.env`:
```
JWT_SECRET=your-generated-key-here
```

5. **Start the server**
```bash
npm start
```

6. **Visit in browser**
```
http://localhost:5000
```

## 📁 Project Structure

```
cvgenius/
├── server.js              # Express server
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore            # Git ignore rules
├── railway.json          # Railway deployment config
├── README.md             # This file
└── public/
    ├── index.html        # Main HTML page
    ├── css/
    │   └── style.css     # Styles
    └── js/
        ├── app.js        # Main app logic
        └── api.js        # API client
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite (local) / PostgreSQL (production)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs password hashing
- **Deployment**: Railway.app

## 📝 Available Scripts

```bash
# Start development server
npm start

# Start with auto-reload (requires nodemon)
npm run dev
```

## 🔐 Environment Variables

Create `.env` file with:

```
NODE_ENV=development
PORT=5000
JWT_SECRET=your-secret-key-here
DATABASE_URL=sqlite:./database.db
```

For production (Railway):
- `NODE_ENV`: production
- `JWT_SECRET`: generate secure key
- `DATABASE_URL`: auto-created by Railway

## 🚀 Deployment

### Deploy to Railway

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Go to Railway.app**
- Visit: https://railway.app
- Login with GitHub
- Create new project
- Select this repository
- Add environment variables

3. **Deploy**
- Railway auto-deploys
- Your app is LIVE!

## 📖 API Endpoints (Future Implementation)

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Resumes
- `GET /api/resumes` - List all resumes
- `POST /api/resumes` - Create resume
- `GET /api/resumes/:id` - Get single resume
- `PUT /api/resumes/:id` - Update resume
- `DELETE /api/resumes/:id` - Delete resume

## 🔒 Security Features

✅ Password hashing (bcryptjs)
✅ JWT authentication
✅ Authorization checks
✅ CORS protection
✅ Input validation
✅ Secure headers
✅ Environment variables for secrets

## 🎨 Customization

### Change Colors
Edit `public/css/style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change App Name
Edit `public/index.html`:
```html
<title>Your App Name</title>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5000
# Mac/Linux:
lsof -ti:5000 | xargs kill -9

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Dependencies not installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment variables not loading
Make sure `.env` file:
- Is in project root
- Has correct variable names
- Has no extra spaces

## 📚 Learning Resources

- [Express.js Guide](https://expressjs.com/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [Railway Docs](https://docs.railway.app/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 💬 Support

- **Issues**: GitHub Issues
- **Email**: support@cvgenius.com
- **Discord**: Community Server

## 🎯 Roadmap

- [ ] PDF export
- [ ] Cover letter builder
- [ ] LinkedIn integration
- [ ] More resume templates
- [ ] Email notifications
- [ ] Mobile app
- [ ] Dark/Light mode toggle
- [ ] Collaboration features

## 🙏 Acknowledgments

- Express.js team
- JavaScript community
- All contributors

## 📊 Status

✅ Ready for development
✅ Ready for deployment
✅ Production-ready code
✅ Security configured

---

**Made with ❤️ by CVGenius Team**

Last updated: February 2026

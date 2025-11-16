# 💈 Barbershop Lobby

**Full-stack appointment and management system for barbershops** — built as a study project during the **FullStack Weekend Workshop**.

Barbershop Lobby is a modern, production-ready application designed to deliver a complete digital experience for both customers and barbershop administrators. It features user authentication, service listings, intelligent booking flows, comprehensive schedule management, admin dashboards, and a clean, responsive UI optimized for performance and scalability.

---

## 🚀 Tech Stack

This project leverages a cutting-edge, production-grade technology stack:

### **Frontend & Framework**
- **Next.js 16.0** — React meta-framework with App Router
- **React 19.2** — Latest React with concurrent features
- **TanStack Query 5.90** — Powerful async state management
- **TailwindCSS 4** — Utility-first CSS framework
- **Radix UI** — Unstyled, accessible component primitives
- **Lucide React** — Beautiful, consistent icon library
- **React Day Picker 9.11** — Flexible date picker component
- **next-themes 0.4** — Light/Dark theme switching

### **Backend & Database**
- **Prisma ORM 6.18** — Next-generation TypeScript ORM
- **PostgreSQL** — Robust relational database
- **pg 8.16** — Non-blocking PostgreSQL client for Node.js
- **Prisma Adapter for pg** — Connection pooling support

### **Authentication & Security**
- **BetterAuth 1.3** — Modern authentication library
- **next-safe-action 8.0** — Type-safe server actions with validation
- **Zod 4.1** — TypeScript-first schema validation

### **AI Integration**
- **Vercel AI SDK 5.0** — Unified interface for AI models
- **@ai-sdk/openai 2.0** — OpenAI GPT integration
- **@ai-sdk/google 2.0** — Google Generative AI integration
- **Shiki 3.15** — Syntax highlighting for AI code generation

*AI capabilities power intelligent features including smart scheduling suggestions, automated service descriptions, natural language booking queries, and data-driven insights.*

### **Payments**
- **Stripe 18.4** — Complete payment infrastructure
- **@stripe/stripe-js 7.8** — Official Stripe.js library

### **Developer Experience**
- **TypeScript 5** — Type safety across the entire codebase
- **ESLint 9** — Code quality and consistency
- **Prettier 3.6** — Opinionated code formatting
- **tsx 4.20** — TypeScript execution environment

---

## 🧩 Features

### **Customer Experience**
✅ User registration & secure authentication  
✅ Browse services with detailed descriptions & pricing  
✅ View available barbers and their specialties  
✅ Smart availability-based appointment booking  
✅ Real-time schedule visualization with `react-day-picker`  
✅ Payment processing via Stripe integration  
✅ Booking history and management  
✅ Responsive design for mobile and desktop  

### **Admin & Management**
✅ Comprehensive admin dashboard  
✅ Barbershop profile and service management  
✅ Appointment tracking and status updates  
✅ Revenue analytics and reporting  
✅ User and barber management tools  
✅ Configurable business hours and availability  

### **Technical Features**
✅ Server-side rendering with Next.js App Router  
✅ Type-safe server actions with validation  
✅ Optimistic UI updates with TanStack Query  
✅ Database migrations and seeding with Prisma  
✅ Light/Dark theme persistence  
✅ Accessible UI components (WCAG compliant)  
✅ Interactive toast notifications via Sonner  
✅ AI-powered features for enhanced UX  

---

## 📁 Project Structure

```
/
├── prisma/
│   ├── schema.prisma          # Database schema definitions
│   └── migrations/            # Database migration history
├── src/
│   ├── app/                   # Next.js App Router pages & layouts
│   │   ├── (auth)/           # Authentication routes
│   │   ├── (admin)/          # Admin dashboard routes
│   │   └── api/              # API routes & webhooks
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Base UI components (Radix)
│   │   └── features/         # Feature-specific components
│   ├── server/                # Server actions & services
│   │   ├── actions/          # Server actions
│   │   └── services/         # Business logic layer
│   ├── lib/                   # Utilities, configs & helpers
│   │   ├── auth.ts           # BetterAuth configuration
│   │   ├── db.ts             # Prisma client instance
│   │   └── stripe.ts         # Stripe client configuration
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Global styles & Tailwind config
├── public/                    # Static assets
└── .env.example               # Environment variables template
```

---

## ⚙️ Environment Setup

### **Prerequisites**
- Node.js 18+ or 20+ (LTS recommended)
- PostgreSQL 14+ installed and running
- Stripe account (for payment processing)
- Optional: OpenAI/Google API keys (for AI features)

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/your-username/barbershop-lobby.git
cd barbershop-lobby
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/barbershop_lobby"

# Application
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"

# Authentication
AUTH_SECRET="your-secure-random-string-here"
BETTER_AUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AI (Optional)
OPENAI_API_KEY="sk-..."
GOOGLE_GENERATIVE_AI_API_KEY="..."
```

4. **Set up the database**
```bash
# Run Prisma migrations
npx prisma migrate dev

# Seed the database with initial data (optional)
npx prisma db seed
```

5. **Generate Prisma Client**
```bash
npx prisma generate
```

---

## ▶️ Running the Project

### **Development Mode**
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### **Production Build**
```bash
# Build the application
npm run build

# Start the production server
npm start
```

### **Database Management**
```bash
# Open Prisma Studio (visual database editor)
npx prisma studio

# Create a new migration
npx prisma migrate dev --name your_migration_name

# Reset the database (⚠️ destroys all data)
npx prisma migrate reset
```

### **Code Quality**
```bash
# Run ESLint
npm run lint

# Format code with Prettier
npx prettier --write .
```

---

## 💡 Project Purpose & Learning Outcomes

This repository was developed as part of the **FSW FullStack Weekend** workshop, with the following learning objectives:

🎯 **Technical Mastery**
- Deep understanding of Next.js 16 App Router architecture
- Building production-grade backends using server actions and server components
- Working with relational databases through Prisma ORM
- Implementing type-safe APIs with Zod validation

🎯 **Real-World Application**
- Creating a complete booking/reservation system with complex business logic
- Handling payment processing and financial transactions
- Managing authentication flows and user sessions
- Building scalable admin panels and dashboards

🎯 **Modern Development Practices**
- Component-driven architecture with reusable, composable UI elements
- Type safety across the entire application stack
- Optimistic UI updates and real-time data synchronization
- Accessibility-first development with WCAG compliance

🎯 **Professional Standards**
- Code organization following industry best practices
- Comprehensive error handling and validation
- Performance optimization and SEO considerations
- Deployment-ready configuration

---

## ✨ Roadmap & Future Enhancements

### **Phase 1: Analytics & Reporting**
- [ ] Dashboard with business metrics and KPI visualization
- [ ] Revenue reports and financial analytics
- [ ] Customer retention and engagement metrics
- [ ] PDF report generation for bookkeeping

### **Phase 2: Advanced Features**
- [ ] Multi-barbershop/franchise support
- [ ] SMS/Email notification system
- [ ] Loyalty programs and discount codes
- [ ] Inventory management for products
- [ ] Staff scheduling and time-off management

### **Phase 3: Integration & Expansion**
- [ ] Stripe webhooks for automated payment handling
- [ ] Social media integrations (booking via Instagram/WhatsApp)
- [ ] Google Calendar synchronization
- [ ] Review and rating system
- [ ] Waitlist and cancellation management

### **Phase 4: Mobile & Offline**
- [ ] Progressive Web App (PWA) support
- [ ] Native mobile app with React Native/Expo
- [ ] Offline-first architecture
- [ ] Push notifications

---

## 🤝 Contributing

This is a study project, but contributions are highly welcome! Whether you're fixing bugs, improving documentation, or proposing new features, your input is valued.

### **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style (enforced by Prettier/ESLint)
- Write meaningful commit messages
- Add tests for new features (when test infrastructure is available)
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software for personal or commercial purposes, with attribution.

---

## 👨‍💻 Author

**Yuri Melo**  
Full-Stack Developer | Entrepreneur | Tech Enthusiast

🌐 [yurimotatech.com](https://yurimotatech.com)  
💼 [LinkedIn](https://linkedin.com/in/your-profile)  
🐙 [GitHub](https://github.com/your-username)  
📝 [Blog](https://blog.yurimotatech.com)

---

## 🙏 Acknowledgments

- **FullStack Weekend** workshop for the project foundation and learning structure
- **Vercel** for Next.js and deployment infrastructure
- **Prisma** team for the excellent ORM and developer experience
- The open-source community for the incredible tools and libraries

---

## 📊 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/barbershop-lobby)
![GitHub issues](https://img.shields.io/github/issues/your-username/barbershop-lobby)
![GitHub stars](https://img.shields.io/github/stars/your-username/barbershop-lobby)
![License](https://img.shields.io/github/license/your-username/barbershop-lobby)

---

**Built with ❤️ using Next.js, React, and modern web technologies**
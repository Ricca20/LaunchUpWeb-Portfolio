# LaunchUp Web Portfolio 🚀

LaunchUpWeb is a professional web design and development portfolio and agency website. This repository contains the source code for the LaunchUpWeb platform, built with modern web technologies to deliver high-performance, visually stunning digital experiences.

## 🌟 Features

*   **Modern UI/UX**: Built with React and Framer Motion for smooth animations and a premium feel.
*   **Multi-Page Architecture**: Distinct pages for Home, Services, Portfolio, About, and Contact.
*   **Responsive Design**: Fully optimized for all devices, from mobile to desktop.
*   **SEO Optimized**: structured metadata, JSON-LD schema, and semantic HTML for high search rankings.
*   **Contact Form**: Functional contact form integrated with a Node.js backend and MongoDB Atlas.
*   **MongoDB Integration**: Stores client inquiries securely in the cloud.

## 🛠 Tech Stack

### Client (Frontend)
*   **Framework**: Next.js 16 (App Router)
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion, React Parallax Tilt
*   **Icons**: Lucide React

### Server (Backend)
*   **Runtime**: Node.js & Express.js
*   **Database**: MongoDB Atlas
*   **Email**: Nodemailer (SMTP)

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   MongoDB Atlas Account
*   SMTP Server Details (for emails)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Ricca20/LaunchUpWeb-Portfolio.git
    cd LaunchUpWeb-Portfolio
    ```

2.  **Setup Frontend**
    ```bash
    cd next-client
    npm install
    # Create .env.local
    echo "NEXT_PUBLIC_API_URL=http://localhost:5001" > .env.local
    npm run dev
    ```

3.  **Setup Backend**
    ```bash
    cd server
    npm install
    # Configure .env (see .env.example if available, or set PORT, MONGO_URI, SMTP details)
    npm run dev
    ```

## 📬 Contact

**Ricky Perera**  
📧 pereraricky20@gmail.com  
🌐 launchupweb.com

# JonesDataBundles - Trial Setup Guide

Welcome to the JonesDataBundles demo! This guide will help you get started with the trial version.

## 🚀 Quick Start

### Frontend (Live)
The frontend is already deployed and live at:
- **Live URL**: [https://repo-xi-silk.vercel.app](https://repo-xi-silk.vercel.app)

### Backend Setup (Local or Cloud)

#### Option 1: Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/AudiCr254/JonesDataBundles.git
   cd JonesDataBundles
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Start the backend server:
   ```bash
   node nodes.js
   ```
   The API will be available at `http://localhost:3000`

#### Option 2: Deploy Backend to Heroku/Railway
You can deploy the `nodes.js` backend to a cloud service for production use.

## 📋 Trial Features

### Available Endpoints

#### 1. Health Check
```bash
GET http://localhost:3000/
```
Response: `JonesDataBundles API is running!`

#### 2. Get Available Data Bundles
```bash
GET http://localhost:3000/api/data
```
Response:
```json
{
  "status": "success",
  "message": "Trial Data Retrieved",
  "data": [
    { "id": 1, "type": "SME", "volume": "1GB", "price": "KES 250" },
    { "id": 2, "type": "Gifting", "volume": "5GB", "price": "KES 1000" },
    { "id": 3, "type": "Corporate", "volume": "10GB", "price": "KES 1800" }
  ]
}
```

#### 3. Process Payment (Demo)
```bash
POST http://localhost:3000/api/payment
Content-Type: application/json

{
  "phoneNumber": "0712345678",
  "amount": 55,
  "bundle": "1.25GB",
  "validity": "till midnight"
}
```
Response:
```json
{
  "status": "success",
  "message": "Demo Payment Processed Successfully",
  "transactionId": "DEMO-ABC123XYZ",
  "timestamp": "2026-04-08T17:30:00.000Z",
  "data": { ... }
}
```

## 🔐 Authentication Credentials

| Key | Value |
|-----|-------|
| **Customer Key** | `LUC6JkfBJ3MhcT8EILtu1nK4gjZyZtPWnEk22LS9gm9C8wVO` |
| **Customer Secret** | `CqXdKeiPwRAmc4VyNZi0AqIGtbO7r0qVgHVhwIxIq8RVJZOYxBbwb4JGcPHc8IbY` |

## 🎯 Demo Workflow

1. **Visit the Frontend**: Open [https://repo-xi-silk.vercel.app](https://repo-xi-silk.vercel.app)
2. **Select a Bundle**: Click on any data offer (DATA, SMS, or MINUTES)
3. **Enter Phone Number**: Provide a valid phone number (e.g., 0712345678)
4. **Request Payment**: Click "Request Payment Prompt"
5. **Confirmation**: You'll see a success message with transaction details

## 📦 Project Structure

```
JonesDataBundles/
├── src/                    # React frontend source
│   ├── App.tsx            # Main application component
│   ├── components/        # UI components (shadcn/ui)
│   └── ...
├── dist/                  # Built frontend (Vercel deployment)
├── nodes.js              # Express backend API
├── package.json          # Dependencies
├── vercel.json           # Vercel deployment config
├── .env.example          # Environment variables template
└── README.md             # Project documentation
```

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React 19 + TypeScript + Vite |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Backend** | Node.js + Express |
| **Deployment** | Vercel (Frontend) |
| **UI Components** | 40+ shadcn/ui components |

## 📝 Notes for Trial

- All payment processing is in **demo mode**
- Transaction IDs are prefixed with `DEMO-`
- No real payments are processed
- CORS is enabled for cross-origin requests
- The backend includes mock data for testing

## 🔗 Useful Links

- **GitHub Repository**: [https://github.com/AudiCr254/JonesDataBundles](https://github.com/AudiCr254/JonesDataBundles)
- **Live Frontend**: [https://repo-xi-silk.vercel.app](https://repo-xi-silk.vercel.app)
- **Support Contact**: 0792 412 139

## 📞 Support

For assistance during the trial, please contact:
- **Phone/SMS**: 0792 412 139
- **Contact Name**: Jones BUNDLES

---

**Ready to start the trial?** Visit the live application and explore the features!

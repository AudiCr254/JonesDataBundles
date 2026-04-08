import { useState } from 'react';
import { 
  Wifi, 
  MessageSquare, 
  Phone, 
  Smartphone, 
  Clock, 
  CheckCircle2, 
  Star,
  CreditCard,
  AlertCircle,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Offer {
  price: string;
  amount: string;
  validity: string;
  highlight?: boolean;
}

interface OfferCardProps extends Offer {
  icon: React.ReactNode;
  onClick: () => void;
}

const OfferCard = ({ price, amount, validity, icon, highlight, onClick }: OfferCardProps) => (
  <Card 
    onClick={onClick}
    className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
      highlight 
        ? 'border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50' 
        : 'border border-gray-200 hover:border-green-300'
    }`}
  >
    {highlight && (
      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg font-semibold">
        POPULAR
      </div>
    )}
    <CardContent className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-full ${highlight ? 'bg-green-500 text-white' : 'bg-green-100 text-green-600'}`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{price}</p>
          <p className="text-sm text-gray-500">Kenyan Shillings</p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-800">{amount}</p>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Valid {validity}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-center gap-1 text-green-600 text-sm font-medium">
          <span>Click to Buy</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const SectionTitle = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-2 mb-2">
      <div className="p-2 bg-green-500 rounded-full text-white">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="flex justify-center gap-1 mt-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

function App() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dataOffers: Offer[] = [
    { price: 'Ksh 55', amount: '1.25 GB', validity: 'till midnight', highlight: true },
    { price: 'Ksh 19', amount: '1 GB', validity: '1 hour', highlight: false },
    { price: 'Ksh 20', amount: '250 MBs', validity: '24 hours', highlight: false },
    { price: 'Ksh 50', amount: '1.5 GB', validity: '3 hours', highlight: false },
    { price: 'Ksh 99', amount: '1 GB', validity: '24 hours', highlight: false },
    { price: 'Ksh 48', amount: '350 MBs', validity: '7 days', highlight: false },
    { price: 'Ksh 300', amount: '2.5 GB', validity: '7 days', highlight: false },
    { price: 'Ksh 700', amount: '6 GB', validity: '7 days', highlight: false },
  ];

  const unlimitedData: Offer[] = [
    { price: 'Ksh 110', amount: '2 GB', validity: '24 hours', highlight: true },
    { price: 'Ksh 54', amount: '1.5 GB', validity: '3 hours', highlight: false },
    { price: 'Ksh 25', amount: '1 GB', validity: '1 hour', highlight: false },
  ];

  const smsOffers: Offer[] = [
    { price: 'Ksh 5', amount: '20 SMS', validity: 'daily', highlight: false },
    { price: 'Ksh 10', amount: '200 SMS', validity: 'daily', highlight: true },
    { price: 'Ksh 30', amount: '1000 SMS', validity: 'weekly', highlight: false },
  ];

  const minutesOffers: Offer[] = [
    { price: 'Ksh 210', amount: '250 Minutes', validity: '7 days', highlight: false },
    { price: 'Ksh 52', amount: '200 Bob Kredo', validity: 'till midnight', highlight: true },
    { price: 'Ksh 22', amount: '43 Minutes', validity: '3 hours', highlight: false },
  ];

  const handleOfferClick = (offer: Offer) => {
    setSelectedOffer(offer);
    setPhoneNumber('');
    setShowDialog(true);
    setShowPrompt(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 9) {
      setIsSubmitting(true);
      // Simulate processing
      setTimeout(() => {
        setIsSubmitting(false);
        setShowPrompt(true);
      }, 1500);
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
    setShowPrompt(false);
    setPhoneNumber('');
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <Smartphone className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            JONES Bingwa Sokoni Services
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-1">
              Automated
            </Badge>
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-xl md:text-2xl mb-2">Get instant services within 2 secs</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span>Even with <span className="font-bold text-yellow-300">Okoa Jahazi</span></span>
            <span className="text-2xl">💯</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Data Offers Section */}
        <section>
          <SectionTitle 
            icon={<Wifi className="w-6 h-6" />}
            title="DATA OFFERS"
            subtitle="Affordable data bundles for all your browsing needs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataOffers.map((offer, index) => (
              <OfferCard
                key={index}
                {...offer}
                icon={<Wifi className="w-5 h-5" />}
                onClick={() => handleOfferClick(offer)}
              />
            ))}
          </div>
        </section>

        {/* Unlimited Data Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 -mx-4 px-4 py-12 rounded-3xl">
          <SectionTitle 
            icon={<Wifi className="w-6 h-6" />}
            title="UNLIMITED DATA PURCHASES"
            subtitle="Purchase multiple times a day - no limits!"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {unlimitedData.map((offer, index) => (
              <OfferCard
                key={index}
                {...offer}
                icon={<Wifi className="w-5 h-5" />}
                onClick={() => handleOfferClick(offer)}
              />
            ))}
          </div>
        </section>

        {/* SMS Offers Section */}
        <section>
          <SectionTitle 
            icon={<MessageSquare className="w-6 h-6" />}
            title="SMS OFFERS"
            subtitle="Stay connected with affordable SMS bundles"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {smsOffers.map((offer, index) => (
              <OfferCard
                key={index}
                {...offer}
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => handleOfferClick(offer)}
              />
            ))}
          </div>
        </section>

        {/* Minutes Offers Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 -mx-4 px-4 py-12 rounded-3xl">
          <SectionTitle 
            icon={<Phone className="w-6 h-6" />}
            title="MINUTES OFFERS"
            subtitle="Talk more for less with our voice bundles"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {minutesOffers.map((offer, index) => (
              <OfferCard
                key={index}
                {...offer}
                icon={<Phone className="w-5 h-5" />}
                onClick={() => handleOfferClick(offer)}
              />
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section className="max-w-2xl mx-auto">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-gray-900">Important Notes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Service is available <strong>24/7</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You can purchase a data offer <strong>once</strong> a day. Choose a favourable offer (e.g., 1.25GB, 2GB Hourly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>All offers are <strong>automated</strong> - you'll receive your offer instantly after payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Payment Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {!showPrompt ? 'Complete Your Purchase' : 'Payment Prompt Sent!'}
            </DialogTitle>
          </DialogHeader>
          
          {!showPrompt ? (
            <div className="space-y-6">
              {selectedOffer && (
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">You are purchasing:</p>
                  <p className="text-xl font-bold text-green-700">{selectedOffer.amount}</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedOffer.price}</p>
                  <p className="text-sm text-gray-500">Valid {selectedOffer.validity}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter M-Pesa Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="e.g., 0712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-lg"
                    required
                    minLength={9}
                    maxLength={12}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the number to receive the M-Pesa prompt
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Pay to Till Number:</p>
                  <p className="text-2xl font-bold text-green-600">3141074</p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  disabled={phoneNumber.length < 9 || isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Request Payment Prompt
                    </span>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Payment Prompt Sent!
                </p>
                <p className="text-gray-600">
                  Please check your phone <strong>{phoneNumber}</strong> and enter your M-Pesa PIN to complete the payment of <strong>{selectedOffer?.price}</strong> to Till <strong>3141074</strong>.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  Once payment is confirmed, your <strong>{selectedOffer?.amount}</strong> will be sent instantly!
                </p>
              </div>
              
              <Button 
                onClick={closeDialog}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 p-4 rounded-full">
              <Smartphone className="w-10 h-10" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
          <div className="bg-gray-800 rounded-xl p-6 max-w-md mx-auto mb-6">
            <p className="text-gray-400 mb-2">SMS or Call:</p>
            <p className="text-3xl font-bold text-green-400">0792 412 139</p>
          </div>
          <p className="text-gray-400">Save my contact as <span className="text-white font-semibold">Jones BUNDLES</span></p>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} JONES Bingwa Sokoni Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

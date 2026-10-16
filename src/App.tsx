import { HashRouter, Routes, Route } from 'react-router-dom';
import { WishlistProvider } from '@/context/WishlistContext';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Properties } from '@/pages/Properties';
import { PropertyDetails } from '@/pages/PropertyDetails';
import { BuyRentPage } from '@/pages/BuyRentPage';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Contact } from '@/pages/Contact';
import { Wishlist } from '@/pages/Wishlist';
import { ListProperty } from '@/pages/ListProperty';

function App() {
  return (
    <WishlistProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/buy" element={<BuyRentPage purpose="Buy" />} />
              <Route path="/rent" element={<BuyRentPage purpose="Rent" />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/list-property" element={<ListProperty />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </WishlistProvider>
  );
}

export default App;

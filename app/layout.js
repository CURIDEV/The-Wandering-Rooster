import "./globals.css";
import "@css/bootstrap.min.css"
import "@css/font-awesome.css"
import "@css/animate.css"
import "@css/magnific-popup.css"
import "@css/meanmenu.css"
import "@css/swiper-bundle.min.css"
import "@css/nice-select.css"
import "@css/main.css"
import 'rc-slider/assets/index.css';

import Preloader from "@/layouts/Preloader";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  metadataBase: new URL("https://thewanderingrooster.com"),
  title: {
    default: "The Wandering Rooster | Food Truck in Key West",
    template: "%s | The Wandering Rooster",
  },
  description:
    "Key West's food truck for fresh, made-to-order eats. Order online for pickup or delivery.",
  openGraph: {
    title: "The Wandering Rooster | Food Truck in Key West",
    description:
      "Key West's food truck for fresh, made-to-order eats. Order online for pickup or delivery.",
    url: "https://thewanderingrooster.com",
    siteName: "The Wandering Rooster",
    images: ["/assets/img/logo/twr_logo.svg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Preloader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
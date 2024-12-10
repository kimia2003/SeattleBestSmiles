import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-5 mt-5">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-8">
          <a
            href="https://www.facebook.com/Seattlesbestsmiles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/@seattlesbestsmiles7311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
            aria-label="Youtube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.instagram.com/seattles.best.smiles/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        <p className="text-lg font-semibold">
          © 2024 Seattle's Best Smiles. All Rights Reserved.
        </p>
        <p className="text-sm">
          Located in Kirkland, WA | Contact us for your next dental appointment
        </p>
      </div>
    </footer>
  );
};

export default Footer;

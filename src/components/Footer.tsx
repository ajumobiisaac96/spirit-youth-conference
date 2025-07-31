import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-1">
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src={Logo || "/placeholder.svg"}
                alt="Spirit Youth Conference Logo"
                className="h-16 w-auto"
              />
            </div>

            <div className="text-center lg:text-left space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No 3. Muazu (Cross High School) street, opposite Refinery
                  Bustop, sabo, Kaduna
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">+234 813 024 7073</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <a
                href="https://web.facebook.com/TheEdifyingAssembly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@theedifyingassembly2985"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.22 3.5 12 3.5 12 3.5s-7.22 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.78 20.5 12 20.5 12 20.5s7.22 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4 text-center lg:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center lg:text-left">
              <li>
                <a
                  href="https://web.facebook.com/TheEdifyingAssembly"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@theedifyingassembly2985"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VbB17mtGk1FmihHB3k3g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Conference Info Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4 text-center lg:text-left">
              Conference Info
            </h3>
            <div className="text-center lg:text-left space-y-3">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Date:</span> August 9th-10th, 2025
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Theme:</span> PNUEMA (The Wind of
                the Spirit)
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Registration:</span> Free but
                Compulsory
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            © 2025 Spirit Youth Conference. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">SOLO</h3>
            <p className="text-sm leading-relaxed mb-4">
              The Symbiosis of Artificial Intelligence and High Art.
            </p>
            <p className="text-xs text-gray-500">
              Powered by SAVITSKYI ENGINE v8.0
              <br />
              SCITY SYSTEMS OÜ
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/SOLO_CinematicDirector_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Telegram Bot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@solo-engine.com"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 SOLO Engine. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:hello@solo-engine.com"
              className="text-xs text-gray-500 hover:text-white transition"
            >
              Email
            </a>
            <a
              href="https://t.me/SOLO_CinematicDirector_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition"
            >
              Telegram
            </a>
            <a
              href="https://github.com/allstarss4-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
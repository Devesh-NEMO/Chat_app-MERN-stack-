// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Name */}
        <div className="text-lg font-semibold">ChatApp</div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} ChatApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

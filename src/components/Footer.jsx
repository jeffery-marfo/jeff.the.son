import { CalendarDays } from 'lucide-react';

const Footer = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <footer className="backdrop-blur-lg bg-white/80 dark:bg-white/10 shadow-xl rounded-t-xl">
      <div className="max-w-[1200px] mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left: Copyright */}
        <p className="mb-2 md:mb-0 text-center md:text-left font-medium text-gray-800 dark:text-gray-500">
          © {new Date().getFullYear()} Jeffery Marfo. All rights reserved.
        </p>

        {/* Right: Date & Time */}
        <div className="flex items-center gap-2 text-gray-900 dark:text-gray-500">
          <CalendarDays className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>
            {formattedDate} • {formattedTime}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

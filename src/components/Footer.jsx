function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t bg-white px-6 py-8 text-center md:px-20 dark:bg-slate-900 dark:text-slate-400">
      <p>© {currentYear} Abhishek Paul. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

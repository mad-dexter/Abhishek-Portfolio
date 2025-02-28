import Link from "../components/Link";
import DarkMode from "./DarkMode";

function PageHeader() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-4 md:px-10 dark:text-white">
      <Link to={-1} className="flex items-center justify-center gap-2">
        <ion-icon name="arrow-back-circle-outline" class="h-6 w-6"></ion-icon>{" "}
        Back to Home
      </Link>
      <div className="flex flex-row-reverse items-center justify-end gap-4 md:flex-row">
        <DarkMode />
      </div>
    </header>
  );
}

export default PageHeader;

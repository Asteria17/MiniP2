import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link
            to="/"
            className="hover:underline"
          >
            Shopaholic-U
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              About
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
};

import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
} from 'lucide-react';

import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400" >Emrah Atalay &copy; {new Date().getFullYear()} -
                    Made with ❤️ in Turkey
                </span>
                <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                    <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="" target='_blank'>
                        <Github size={16} />
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="" target='_blank'>
                        <Instagram size={16} />
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="" target='_blank'>
                        <Twitter size={16} />
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="" target='_blank'>
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image className="rounded-3xl" src="/user.jpeg" alt="Emrah Atalay" width={200} height={150} />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Emrah Atalay">Emrah Atalay</h1>

                    <p className="title">Full-stack developer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    <i className="chevron-down"></i>
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <i className="mail-outline"></i>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:emrahatalay92@gmail.com" className="contact-link">emrahatalay92@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <i className="phone-portrait-outline"></i>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <i className="calendar-outline"></i>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time defaultValue="1982-06-23">June 23, 1993</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <i className="location-outline"></i>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Sacramento, California, USA</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <i className="logo-facebook"></i>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="#" className="social-link">
                            <i className="logo-twitter"></i>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="#" className="social-link">
                            <i className="logo-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

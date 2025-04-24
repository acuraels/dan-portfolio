import { Link } from "react-router-dom"
import "./HomePageMain.css"
import me from "/me.jpg"
import SV from "/SV.png"
import HR from "/HR.png"
import UrFU from "/UrFU.svg"

const HomePageMain = () => {
    return (
        <div className="portfolio-container">
            {/* Left Sidebar - 25% width */}
            <aside className="sidebar">
                <div className="sidebar-content">
                    {/* Profile Photo */}
                    <div className="profile-photo">
                        <img src={me || "/placeholder.svg"} alt="Профиль" width={128} height={128} />
                    </div>

                    {/* Name and Title */}
                    <div className="profile-info">
                        <h1 className="name">Даниил Устинов</h1>
                        <h2 className="job-title">ReactJS frontend <br /> разработчик</h2>
                    </div>

                    {/* Quote */}
                    <div className="quote-container">
                        <p className="quote">" Через тернии к звёздам "</p>
                        <p className="quote-author">Lucius Annaeus Sĕnĕca</p>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:daniil.rib@mail.ru" className="website-link">daniil.rib@mail.ru</a>
                        </div>

                        <div className="contact-item">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <Link to="https://github.com/acuraels" className="website-link">
                                https://github.com/acuraels
                            </Link>
                        </div>

                        <div className="contact-item">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+79122687019" className="website-link">+7 (912) 268-70-19</a>
                        </div>

                        <div className="contact-item">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Екатеринбург, Россия</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <h3 className="section-title">Соц. сети</h3>
                        <div className="social-items">
                            <div className="social-item">
                                <div className="social-icon telegram">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
                                        <path d="M11.5 14.5L14.5 21.5L16.5 13.5L21.5 4.5L11.5 14.5Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <a href="https://t.me/acuraels" className="website-link">@acuraels</a>
                            </div>

                            <div className="social-item">
                                <div className="social-icon vk">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8Z" stroke="none"></path>
                                        <path d="M12 16C14.6 16 16.5 13.7 16.5 10.5H14.5C14.5 12.7 13.4 14 12.5 14C11.6 14 11 13 11 11.5H9C9 14 10.4 16 12 16Z" fill="currentColor"></path>
                                        <path d="M9 8.5H11V11.5H9V8.5Z" fill="currentColor"></path>
                                        <path d="M14.5 8.5H16.5V10.5H14.5V8.5Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <a href="https://vk.com/acuraels" className="website-link">@acuraels</a>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="languages">
                        <h3 className="section-title">Языки</h3>
                        <div className="language-items">
                            <div className="language-item">
                                <div className="language-flag">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="8" fill="#FFFFFF" />
                                        <rect y="8" width="24" height="8" fill="#0039A6" />
                                        <rect y="16" width="24" height="8" fill="#D52B1E" />
                                    </svg>
                                </div>
                                <div className="language-info">
                                    <p className="language-name">Русский</p>
                                    <p className="language-level">Родной</p>
                                </div>
                            </div>

                            <div className="language-item">
                                <div className="language-flag">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="#012169" />
                                        <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="2.4" />
                                        <path d="M12 0V24M0 12H24" stroke="white" strokeWidth="4" />
                                        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="2.4" />
                                    </svg>
                                </div>
                                <div className="language-info">
                                    <p className="language-name">Английский</p>
                                    <p className="language-level">C1</p>
                                </div>
                            </div>

                            <div className="language-item">
                                <div className="language-flag">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="8" fill="#000000" />
                                        <rect y="8" width="24" height="8" fill="#FF0000" />
                                        <rect y="16" width="24" height="8" fill="#FFCC00" />
                                    </svg>
                                </div>
                                <div className="language-info">
                                    <p className="language-name">Немецкий</p>
                                    <p className="language-level">A1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content - 75% width */}
            <main className="main-content">
                {/* Experience Section */}
                <section className="experience-section">
                    <h2 className="content-title">
                        <span className="title-dot"></span>
                        Мой опыт
                    </h2>

                    <div className="experience-items">
                        <div className="experience-item">
                            <div className="timeline">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">
                                        <div>Сент. 2023 - Янв. 2024</div>
                                        <div className="experience-location">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Екатеринбург
                                        </div>
                                    </div>
                                    <div className="experience-company">
                                        <div className="company-logo">
                                            <img src={UrFU || "/placeholder.svg"} alt="УрФУ" />
                                        </div>
                                        <div>
                                            <h3 className="job-position">Геймдизайнер</h3>
                                            <p className="company-name">УрФУ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-description">
                                    <p>
                                        Как геймдизайнер в университетской команде я разрабатывал концепции и механики игрового процесса для визуального романа. Сотрудничал с дизайнерами и программистами, чтобы создать увлекательные сюжетные линии и интерактивные элементы, обеспечивая бесшовный пользовательский опыт, который захватывал аудиторию.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">
                                        <div>Февр. 2024 - Июнь 2024</div>
                                        <div className="experience-location">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Екатеринбург
                                        </div>
                                    </div>
                                    <div className="experience-company">
                                        <div className="company-logo">
                                            <img src={UrFU || "/placeholder.svg"} alt="УрФУ" />
                                        </div>
                                        <div>
                                            <h3 className="job-position">Тимлид</h3>
                                            <p className="company-name">УрФУ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-description">
                                    <p>
                                        Руководил командой студентов при разработке full-stack веб-приложения, предназначенного для помощи студентам в управлении курсами. Координировал разработку фронтенда, дизайна и аналитики, реализовывал временные рамки проекта и обеспечивал эффективную коммуникацию среди участников команды, что привело к созданию удобной платформы.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">
                                        <div>Сент. 2025 - Янв. 2025</div>
                                        <div className="experience-location">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Екатеринбург
                                        </div>
                                    </div>
                                    <div className="experience-company">
                                        <div className="company-logo">
                                            <img src={UrFU || "/placeholder.svg"} alt="УрФУ" />
                                        </div>
                                        <div>
                                            <h3 className="job-position">Тимлид и фронтендер</h3>
                                            <p className="company-name">StudentVoice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-description">
                                    <p>
                                        Руководил командой студентов при создании StudentVoice, full-stack веб-приложения, позволяющего студентам оценивать курсы и давать обратную связь о лекциях. В качестве тимлида и фронтенд-разработчика с использованием React координировал временные рамки проекта, управлял дизайном и интеграцией аналитики, обеспечивал слаженное сотрудничество в команде. Это привело к созданию интуитивно понятной и эффективной платформы для обратной связи и вовлеченности студентов, что стало моим самым значимым проектом на данный момент.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">
                                        <div>Февр. 2025 - Наст. время</div>
                                        <div className="experience-location">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Екатеринбург
                                        </div>
                                    </div>
                                    <div className="experience-company">
                                        <div className="company-logo">
                                            <img src={UrFU || "/placeholder.svg"} alt="УрФУ" />
                                        </div>
                                        <div>
                                            <h3 className="job-position">Фронтендер</h3>
                                            <p className="company-name">YET HR Platform</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-description">
                                    <p>
                                        Покинув роль тимлида смог полностью сфокусироваться на развитии в роли фронтендера. Создал с командой современную HR платформу для привлечения соискателей
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="education-section">
                    <h2 className="content-title">
                        <span className="title-dot"></span>
                        Образование
                    </h2>

                    <div className="education-grid">
                        <div className="education-card">
                            <div className="education-logo html-academy">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="none" />
                                    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" />
                                    <path d="M22 7L12 12L2 7" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="education-info">
                                <h3 className="education-title">Курс основ веб-разработки</h3>
                                <p className="education-institution">HTML Academy</p>
                                <p className="education-date">2023</p>
                            </div>
                        </div>

                        <div className="education-card">
                            <div className="education-logo yandex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 11.5L7 4H9L6 9.5H13V4H15V9.5H22V11.5H15V17H22V19H2V17H13V11.5H2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="education-info">
                                <h3 className="education-title">Курс веб-разработчик</h3>
                                <p className="education-institution">Яндекс</p>
                                <p className="education-date">2024</p>
                            </div>
                        </div>

                        <div className="education-card">
                            <div className="education-logo yandex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 11.5L7 4H9L6 9.5H13V4H15V9.5H22V11.5H15V17H22V19H2V17H13V11.5H2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="education-info">
                                <h3 className="education-title">Курс React-разработчик</h3>
                                <p className="education-institution">Яндекс</p>
                                <p className="education-date">2025</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills-section">
                    <h2 className="content-title">
                        <span className="title-dot"></span>
                        Навыки
                    </h2>

                    <div className="skills-container">
                        {/* Block 1: HTML, CSS, JS */}
                        <div className="skills-block">
                            <div className="skills-items">
                                <div className="skill-item">
                                    <div className="skill-logo html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 3L4 6.5V20L12 22L20 20V6.5L19 3H5Z" fill="none" />
                                            <path d="M17 8H7L8 14H16L15.5 17L12 18L8.5 17L8.25 15" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">HTML</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo css">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 3L4 6.5V20L12 22L20 20V6.5L19 3H5Z" fill="none" />
                                            <path d="M17 8H7L8 14H16L15.5 17L12 18L8.5 17L8.25 15" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">CSS</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo js">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" />
                                            <path d="M9 17C9 18.1 8.1 19 7 19C5.9 19 5 18.1 5 17V10" stroke="currentColor" />
                                            <path d="M15 10C15 8.9 15.9 8 17 8C18.1 8 19 8.9 19 10V13C19 14.1 18.1 15 17 15C15.9 15 15 14.1 15 13" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">JavaScript</p>
                                </div>
                            </div>
                        </div>

                        {/* Block 2: TS, SCSS */}
                        <div className="skills-block">
                            <div className="skills-items">
                                <div className="skill-item">
                                    <div className="skill-logo ts">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" />
                                            <path d="M14 10V16M10 10H7V16H10M10 13H13" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">TypeScript</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo scss">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="none" />
                                            <path d="M16 8C14 8 13 9 12 10C11 9 10 8 8 8C6 8 5 9 5 11C5 15 12 18 12 18C12 18 19 15 19 11C19 9 18 8 16 8Z" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">SCSS</p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3: React JS, Node JS, Vite */}
                        <div className="skills-block">
                            <div className="skills-items">
                                <div className="skill-item">
                                    <div className="skill-logo react">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3" fill="none" />
                                            <path d="M12 21.7C17.3 21.7 21.7 17.3 21.7 12C21.7 6.7 17.3 2.3 12 2.3C6.7 2.3 2.3 6.7 2.3 12C2.3 17.3 6.7 21.7 12 21.7Z" fill="none" stroke="currentColor" strokeDasharray="2" />\
                                            <path d="M12 21.7C17.3 21.7 21.7 17.3 21.7 12C21.7 6.7 17.3 2.3 12 2.3C6.7 2.3 2.3 6.7 2.3 12C2.3 17.3 6.7 21.7 12 21.7Z" fill="none" stroke="currentColor" strokeDasharray="2" transform="rotate(60 12 12)" />
                                            <path d="M12 21.7C17.3 21.7 21.7 17.3 21.7 12C21.7 6.7 17.3 2.3 12 2.3C6.7 2.3 2.3 6.7 2.3 12C2.3 17.3 6.7 21.7 12 21.7Z" fill="none" stroke="currentColor" strokeDasharray="2" transform="rotate(120 12 12)" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">React JS</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo node">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="none" />
                                            <path d="M12 7V22M3 7L12 12L21 7" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">Node JS</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo vite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" fill="none" />
                                            <path d="M12 22V12M20 6L12 12L4 6" stroke="currentColor" />
                                            <path d="M12 2V12" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">Vite</p>
                                </div>
                            </div>
                        </div>

                        {/* Block 4: Docker, Git */}
                        <div className="skills-block">
                            <div className="skills-items">
                                <div className="skill-item">
                                    <div className="skill-logo docker">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 13H21M5 9H7M9 9H11M13 9H15M5 5H7M9 5H11M13 5H15M17 5H19M17 9H19M17 13H19M17 17H19" stroke="currentColor" />
                                            <rect x="3" y="13" width="18" height="8" rx="2" fill="none" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">Docker</p>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-logo git">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" fill="none" />
                                            <circle cx="12" cy="12" r="3" fill="none" />
                                            <path d="M12 9V3M12 21V15M9 12H3M21 12H15" stroke="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="skill-name">Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest Projects Section */}
                <section className="projects-section">
                    <h2 className="content-title">
                        <span className="title-dot"></span>
                        Последние проекты
                    </h2>

                    <div className="project-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img
                                    src={SV || "/placeholder.svg"}
                                    alt="Система дизайна"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">Student Voice</h3>
                                <p className="project-description">
                                    Сервис оценки учебных занятий
                                </p>
                                <div className="project-link">
                                    <Link to="https://figma.com" className="link">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                        https://github.com/acuraels/Student-voice-Front-end
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src={HR || "/placeholder.svg"} alt="Современный веб-сайт" width={400} height={200} />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">HR-платформа</h3>
                                <p className="project-description">
                                    Современная HR платформа для привлечения соискателей
                                </p>
                                <div className="project-link">
                                    <Link to="https://ui-8.net" className="link">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                        https://acuraels.github.io/yet-hr-platform-frontend/
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePageMain;

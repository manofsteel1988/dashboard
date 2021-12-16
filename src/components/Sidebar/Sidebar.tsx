import styles from "./Sidebar.module.scss";
import samanthaImg from "../../assets/png/samantha.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="Samantha" />
              <p className={styles.notifications}>4</p>
              <p className={styles.userName}>Samantha</p>
              <p className={styles.userEmail}>samantha@email.com</p>
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavlink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavlink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavlink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavlink}`}
                  >
                    {sidebarNavlink.charAt(0).toUpperCase() +
                      sidebarNavlink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

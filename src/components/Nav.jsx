import styles from "./Nav.module.css"; // Import your CSS styles
import StatisticIcon from "./Icons/StatisticIcon";
import ContactIcon from "./Icons/ContactIcon";
import DriversIcon from "./Icons/DriversIcon";
import MessagesIcon from "./Icons/MessagesIcon";
import OrdersIcon from "./Icons/OrdersIcon";

function Nav() {
  const handleItemClick = (item) => {
    setActiveItem(item); // Update active item state on click
  };

  return (
    <div className={styles.navMenu}>
      <ul>
        <li
          className={`${styles.navItem} ${
            activeItem === "home" && styles.active
          }`} // Combine class names based on active state
          onClick={() => handleItemClick("home")}
        >
          <a href="#">Главная</a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeItem === "about" && styles.active
          }`}
          onClick={() => handleItemClick("about")}
        >
          <a href="#">О нас</a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeItem === "services" && styles.active
          }`}
          onClick={() => handleItemClick("services")}
        >
          <a href="#">Услуги</a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeItem === "contacts" && styles.active
          }`}
          onClick={() => handleItemClick("contacts")}
        >
          <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

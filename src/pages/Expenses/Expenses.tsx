import styles from "../Expenses/Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import Barchart from "../../components/BarChart/Barchart";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";

const todayExpenses = [
  {
    id: 1,
    expense: "Grocery",
    time: "5:12 pm",
    location: "Belanja di pascar",
    price: 326.8,
    icon: cartIcon,
    iconBackgroundColor: "#32a7e2",
  },
  {
    id: 2,
    expense: "Transportation",
    time: "5:12 pm",
    location: "Naik bus umum",
    price: 15.0,
    icon: transportIcon,
    iconBackgroundColor: "#B548C6",
  },
  {
    id: 3,
    expense: "Housing",
    time: "5:12 pm",
    location: "Bayar Listrik",
    price: 185.75,
    icon: houseIcon,
    iconBackgroundColor: "#FF8700",
  },
];

const previousExpenses = [
  {
    id: 1,
    expense: "Food and Drink",
    time: "5:12 pm",
    location: "Makan Steak",
    price: 156.0,
    icon: cartIcon,
    iconBackgroundColor: "#DC3434",
  },
  {
    id: 2,
    expense: "Entertainment",
    time: "5:12 pm",
    location: "Nonton Bioskop",
    price: 35.2,
    icon: transportIcon,
    iconBackgroundColor: "#4BA83D",
  },
];

const spendCategories = [
  {
    id: 1,
    category: "Food and Drinks",
    price: 872.4,
  },
  {
    id: 2,
    category: "Shopping",
    price: 1378.2,
  },
  {
    id: 3,
    category: "Housing",
    price: 928.5,
  },
  {
    id: 4,
    category: "Transportation",
    price: 420.7,
  },
  {
    id: 5,
    category: "Vehicle",
    price: 520,
  },
];

export default function Expenses() {
  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <div className={styles.personImages}>
                  <img className={styles.personOne} src={personOne} alt="1" />
                  <img className={styles.personTwo} src={personTwo} alt="2" />
                  <img
                    className={styles.personThree}
                    src={personThree}
                    alt="3"
                  />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="" />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March,2020</p>
            <Barchart />

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button className={styles.expensesActions}>
                <img
                  className={styles.expensesOption}
                  src={optionIcon}
                  alt="optionIcon"
                />
              </button>
            </div>

            <ul>
              {todayExpenses.map((expenses) => (
                <li key={expenses.id} className={styles.expenseItem}>
                  <div className={styles.expenseItemsLeft}>
                    <div
                      style={{
                        backgroundColor: `${expenses.iconBackgroundColor}`,
                      }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={expenses.icon} alt="cart" />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expenses.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expenses.time} • {expenses.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expenses.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>
                Monday, 23 March 2020
              </p>
              <button className={styles.expensesActions}>
                <img
                  className={styles.expensesOption}
                  src={optionIcon}
                  alt="optionIcon"
                />
              </button>
            </div>

            <ul>
              {previousExpenses.map((expenses) => (
                <li key={expenses.id} className={styles.expenseItem}>
                  <div className={styles.expenseItemsLeft}>
                    <div
                      style={{
                        backgroundColor: `${expenses.iconBackgroundColor}`,
                      }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={expenses.icon} alt="cart" />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expenses.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expenses.time} • {expenses.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expenses.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.moneyOverview}>
            <p className={styles.moneyOverviewTitle}>Where your money go?</p>

            <ul>
              <li>
                <div className={styles.spendCategory}>
                  <p className={styles.spendCategoryName}>Food and Drinks</p>
                  <p className={styles.spendCategoryPrice}>872.40</p>
                </div>
                <div className={styles.spendCategoryBar}>
                  <div className={styles.spendCategoryColoredBar}></div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

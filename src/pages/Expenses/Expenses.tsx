import styles from "../Expenses/Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import Barchart from "../../components/BarChart/Barchart";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";

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
                  <img src={personOne} alt="1" />
                  <img src={personTwo} alt="2" />
                  <img src={personThree} alt="3" />
                </div>
                <button>
                  <img src={addIcon} alt="" />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March,2020</p>
            <Barchart />

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button className="">
                <img src={optionIcon} alt="optionIcon" />
              </button>
            </div>

            <ul>
              <li className={styles.expenseItem}>
                <div className={styles.expenseItemsLeft}>
                  <div className={styles.expenseItemDiv}>
                    <img src={cartIcon} alt="cart" />
                  </div>
                  <div className={styles.expenseItemDetails}>
                    <p className={styles.expenseItemTitle}>Grocery</p>
                    <p className={styles.expenseItemTime}>
                      5:12pm • Belanja di pasar
                    </p>
                  </div>
                </div>
                <p className={styles.expenseItemPrice}>-326.800</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

import styles from '../ui/dashboard/dashboard.module.scss';
import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <aside><Rightbar /></aside>
    </main>
  )
}

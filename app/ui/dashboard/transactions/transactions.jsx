import Image from "next/image";
import styles from './transactions.module.scss';

export default function Transactions() {
    return (
        <div className={styles.transactions}>
            <h2>Latest Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>

                                <Image src="/noavatar.png" alt="user img" width={40} height={40} />
                                John Doe
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>25.04.2024</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>
                            <div>

                                <Image src="/noavatar.png" alt="user img" width={40} height={40} />
                                John Doe
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>25.04.2024</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>
                            <div>

                                <Image src="/noavatar.png" alt="user img" width={40} height={40} />
                                John Doe
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                        <td>25.04.2024</td>
                        <td>$500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

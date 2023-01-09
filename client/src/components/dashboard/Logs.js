import LogEntry from './LogEntry';
import buttonStyles from '../../button.module.scss';
import styles from './Logs.module.scss';

const Logs = ({ logs, all, toggle }) => (
  <>
    <h2>Door Access Logs</h2> <br />
    <table className={styles.Logs}>
      <thead>
        <tr>
          <th>time</th>
          <th>user</th>
        </tr>
      </thead>
      {logs && (
        <tbody>
          {logs.map((logItem, index) =>
            all ? (
              <LogEntry logItem={logItem} key={logItem._id} />
            ) : index < 6 ? (
              <LogEntry logItem={logItem} key={logItem._id} />
            ) : null
          )}
        </tbody>
      )}
    </table>
    <button className={buttonStyles.button} onClick={() => toggle(all)}>
      {all ? 'Show Less' : 'Show All'}
    </button>
  </>
);

export default Logs;

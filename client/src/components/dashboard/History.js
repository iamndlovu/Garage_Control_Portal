import Overview from './Overview';
import buttonStyles from '../../button.module.scss';
import styles from './History.module.scss';

const History = ({ variables, all, toggle }) => (
  <>
    <h2>History</h2> <br />
    <ol className={styles.History}>
      {variables[0] &&
        variables.map((item, index) =>
          all ? (
            <li key={item._id}>
              <Overview variables={item} controls={false} />
            </li>
          ) : index < 3 ? (
            <li key={item._id}>
              <Overview variables={item} controls={false} />
            </li>
          ) : null
        )}
    </ol>
    <button className={buttonStyles.button} onClick={() => toggle(all)}>
      {all ? 'Show Less' : 'Show All'}
    </button>
  </>
);

export default History;

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Dashboard.module.scss';
import Overview from './Overview';
import door from '../../modules/door';
import History from './History';
import Logs from './Logs';

const Dashboard = ({ user }) => {
  const [oldVar, setOldVar] = useState(null);
  const [latestVar, setLatestVar] = useState(null);
  const [logs, setLogs] = useState(null);
  const [allHist, setAllHist] = useState(false);
  const [allLogs, setAllLogs] = useState(false);

  useEffect(() => {
    setInterval(() => {
      axios
        .get('http://localhost:8080/variables')
        .then(res => {
          let all = res.data;
          setLatestVar(all.shift());
          setOldVar(all);
        })
        .catch(err => alert(`Dashboard COMPONENT > Variables - ${err}`));

      axios
        .get('http://localhost:8080/logs')
        .then(res => {
          setLogs(res.data);
        })
        .catch(err => alert(`Dashboard COMPONENT > Logs - ${err}`));
    }, 5000);
  }, []);

  const openDoor = async () => {
    try {
      const res = await door.open(user._id);
      setLatestVar(res[0]);
      setLogs(res[1]);
    } catch (err) {
      alert('Error while opening door - \n' + err);
    }
  };

  const closeDoor = async () => {
    try {
      const res = await door.close();
      setLatestVar(res);
    } catch (err) {
      alert('Error while closing door - \n' + err);
    }
  };

  const toggleAllHist = all => {
    if (all) setAllHist(false);
    else {
      setAllHist(true);
      setAllLogs(false);
    }
  };

  const toggleAllLogs = all => {
    if (all) setAllLogs(false);
    else {
      setAllLogs(true);
      setAllHist(false);
    }
  };

  return (
    <main className={styles.Dashboard}>
      <h1 className={styles.welcome}>
        Welcome <code>{`<${user.username}>`}</code>
      </h1>
      <section className={styles.overview}>
        <Overview
          variables={latestVar}
          doorOps={{ openDoor, closeDoor }}
          controls={true}
        />
      </section>
      <section className={styles.history}>
        <div className={styles.container}>
          {oldVar && latestVar && (
            <History
              variables={[latestVar, ...oldVar]}
              all={allHist && !allLogs}
              toggle={toggleAllHist}
            />
          )}
        </div>
      </section>
      <section className={styles.logs}>
        <div>
          <Logs logs={logs} all={allLogs && !allHist} toggle={toggleAllLogs} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

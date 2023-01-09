import { useEffect, useState } from 'react';
import fetchById from '../../modules/fetchById';

const LogEntry = ({ logItem }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetchById('users', logItem.user)
      .then(user => setUsername(user.username))
      .catch(err => alert(`LOGENTRY COMPONENT > Username - ${err}`));
  }, [logItem.user]);

  return (
    <tr>
      <td>{new Date(logItem.createdAt).toLocaleString()}</td>
      <td>{username}</td>
    </tr>
  );
};
export default LogEntry;

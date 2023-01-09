import styles from './Overview.module.scss';

const Overview = ({ variables, doorOps, controls }) => (
  <div className={controls ? styles.Overview : styles.histItem}>
    {controls && (
      <>
        <h2>Current Garage Condition</h2> <br />
      </>
    )}
    <table>
      {controls && (
        <tr>
          <td>door status</td>
          <td style={{ display: 'flex', justifyContent: 'space-between' }}>
            {variables ? (variables.status ? 'open' : 'closed') : 'unknown'}
            <>
              {variables ? (
                variables.status ? (
                  <button
                    style={{
                      height: '1.3rem',
                      fontSize: '1rem',
                      padding: '0.07rem 0.25rem',
                      borderRadius: '2px',
                    }}
                    className={styles.button}
                    onClick={() => doorOps.closeDoor()}
                  >
                    close
                  </button>
                ) : (
                  <button
                    style={{
                      height: '1.3rem',
                      fontSize: '1rem',
                      padding: '0.07rem 0.25rem',
                      borderRadius: '2px',
                    }}
                    className={styles.button}
                    onClick={() => doorOps.openDoor()}
                  >
                    open
                  </button>
                )
              ) : (
                '?'
              )}
            </>
          </td>
        </tr>
      )}
      {!controls && (
        <tr>
          <td>time</td>
          <td>
            {variables ? (
              <>
                <>
                  {variables.createdAt
                    ? new Date(variables.createdAt).toLocaleString()
                    : 'unknown'}
                </>{' '}
              </>
            ) : (
              'unknown'
            )}
          </td>
        </tr>
      )}
      <tr>
        <td>garage temp</td>
        <td>
          {variables ? (
            <>
              <>{variables.temp ? variables.temp : 'unknown'}</> <sup>0</sup>C{' '}
            </>
          ) : (
            'unknown'
          )}
        </td>
      </tr>
      <tr>
        <td>
          CO<sub>2</sub> level
        </td>
        <td>
          {variables ? (
            <>
              <>{variables.co2 ? variables.co2 : 'unknown'}</> {' %'}
            </>
          ) : (
            'unknown'
          )}
        </td>
      </tr>
      <tr>
        <td>dust level</td>
        <td>
          {variables ? (
            <>
              <>{variables.dust ? variables.dust : 'unknown'}</> {' %'}
            </>
          ) : (
            'unknown'
          )}
        </td>
      </tr>
      <tr>
        <td>humidity</td>
        <td>
          {variables ? (
            <>
              <>{variables.hum ? variables.hum : 'unknown'}</> {' %'}
            </>
          ) : (
            'unknown'
          )}
        </td>
      </tr>
    </table>
  </div>
);

export default Overview;

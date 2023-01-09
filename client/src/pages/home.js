import Dashboard from '../components/dashboard/Dashboard';
import Layout from '../components/Layout';

const Home = ({ user, handler }) => {
  return (
    <Layout title="Welcome to Garage Control" user={user} handler={handler}>
      <Dashboard user={user} />
    </Layout>
  );
};

export default Home;

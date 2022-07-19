import type { NextPage } from 'next';
import Helmet from '../components/Head';
import Header from '../components/Header';

const Contact: NextPage = () => {
  return (
    <div>
      <Helmet title="Tellemore | Contact" description="Jeffrey Helder's virtual contact card." />
      <Header />
      <main>
        <h1>
          This is Contact page
        </h1>
      </main>
    </div>
  )
}

export default Contact

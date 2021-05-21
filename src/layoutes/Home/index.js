import './home.css'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import api from '../../services/axios';

function Home() {

  const [islands, setIslands] = useState('');

  useEffect(() => {

    api.get('/islands').then(res =>setIslands(res.data.islands))

  }, [])



  return (
    <div className="container">
      <div className="content">
        <div className="top-content">
          <div className="selects">
            <Select className="islands" placeholder="select island"/>
            <Select className="county" placeholder="select county"/>
          </div>
          <div className="more-button">
            <Link className="more-link">add data</Link>
          </div>

        </div>

      </div>
    </div>
  );
}
export default Home;
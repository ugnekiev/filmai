import { useState } from 'react';
import { useContext } from 'react';
import Home from "../../Contexts/Home";
import Line from './Line';

const sortData = [
    { v: 'default', t: 'Default' },
    { v: 'price_asc', t: 'Price 1-9' },
    { v: 'price_desc', t: 'Price 9-1' },
    { v: 'rate_asc', t: 'Rating 1-9' },
    { v: 'rate_desc', t: 'Rating 9-1' },
];

   

function List() {

    const { movies } = useContext(Home);

    const [sortBy, setSortBy] = useState('default');


    return (
        <>
        <div className="card m-4">
            <h5 className="card-header">Sort</h5>
            <div className="card-body">
            <div className="mb-3">
          <label className="form-label">Sort by</label>
          <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value={0} disabled>Choose from list</option>
            {
              sortBy?.map(c => <option key={c.id} value={c.id}>{c.title}</option>)
            }
          </select>
        </div>
            </div>
        </div>
        <div className="card m-4">
            <h5 className="card-header">Movies List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        //movies?.map(m => <Line key={m.id} movie={m} />)
                        //kai darome filtra
                        movies?.map(m => m.show ? <Line key={m.id} movie={m} /> : null)
                    }
                </ul>
            </div>
        </div>
        </>
        
    );
}

export default List;
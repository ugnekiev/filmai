import { useContext, useState } from 'react';
import Movies from '../../Contexts/Movies';

function Create() {

const [name, setName] = useState ('');
const [surname, setSurname] = useState ('');
const [countnumber, setCountnumber] = useState('');
const [cat, setCat] = useState('0');

const { setCreateData, cats } = useContext(Movies);

//pasieme suppliers - generuojame <select>


const add = () => {
  setCreateData({
    name,
    surname,
    countnumber,
    cat: parseInt(cat)
    
  });

  setName('');
  setSurname('');
  setCountnumber('');
  setCat(0);
  
}


  return (
    // idesim is bootstarpo
    <div className="card m-4">
      <h5 className="card-header">New Consumer</h5>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label className="form-label">Counter Number</label>
        <input type="text" className="form-control" value={countnumber} onChange={e => setCountnumber(e.target.value)}/>
        </div>
        <div className="mb-3">
                    <label className="form-label">Categories</label>
                    <select className="form-select" value={cat} onChange={e => setCat(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            cats?.map(c => <option key={c.id} value={c.id}>{c.title}</option>)
                        }
                    </select>
                </div>
        <button onClick={add} type="button" className="btn btn-outline-dark">Add</button>
      </div>
    </div>
  );
        }

export default Create;

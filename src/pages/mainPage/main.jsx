import axios from 'axios';
import { useEffect, useState } from 'react';
import CardComponentAbout from '../../components/CardAbout/Index';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const tags = [
    "Games", "Dev", "News", "Personal"
  ]
  const [data, setData] = useState([]);
  const [tag, setTag] = useState("")
  console.log(tag)
  useEffect(() => {
    async function fetchdata() {
      try {
        
        const response = await axios.get('http://blogfeyalonserve.onrender.com/api/posts/' + tag);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, [tag]);
  return (
    <main className="homePage">
      <ul className='sorting'>
        <li>
          <button onClick={() => setTag("")}>
            All
          </button>
        </li>
        {tags.map((name, i) => (
          <li key={i}>
            <button onClick={() => setTag(name)}>
              {name}
            </button>
          </li> 
        ))}
      </ul>
      <div className="cards">
        {data.map((data) => (
            <CardComponentAbout props={data} />
        ))}
      </div>
      
    </main>
  );
}

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import parse from 'html-react-parser';
import axios from 'axios';
export default function SinglePostPage() {
  const [data, setData] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    async function fetcData() {
      try {
        const response = await axios.get(
          `http://blogfeyalonserve.onrender.com/api/post/${userId}`
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetcData();
  }, []);
  let dateMonth;
  if (data.month < 10) {
    dateMonth = '0' + data.month;
  } else if (data.month >= 10) {
    dateMonth = data.month;
  }
  const timePost = new Date(dateMonth).toLocaleString('ru', { month: 'long' });
  console.log(timePost);
  return (
    <div className="postPage">
      <div className="postTitle">
        <h3>
          {data.day} {timePost} {data.year}г
          
        </h3>
        <h1>{data.title}</h1>
      </div>
      <div className="postContent">{parse(String(data.content))}</div>
      <br />
    </div>
  );
}

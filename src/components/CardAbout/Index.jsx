import { Link } from 'react-router-dom';
export default function CardComponentAbout({ props }) {
  return (
    <div className="blog_post">
      <div
        className="blog_post_image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'center',
          backgroundSize: '100%'
        }}
      ></div>

      <div className="blog_post_title">
        <a href={'/post/' + props._id}>
          <h1>{props.title}</h1>
        </a>

        <h5>
          {props.day} {props.month >= 10 ? props.month : '0' + props.month}{' '}
          {props.year}г
        </h5>
        <button>{props.tag}</button>
      </div>
      <div className="blog_post_footer"></div>
    </div>
  );
}

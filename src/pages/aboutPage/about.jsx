import CardComponentAbout from '../../components/CardAbout/Index';

export default function AboutPage() {
  const contactData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png",
      aLink: "https://t.me/FeyaLon",
      title: "Telegram"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      aLink: "https://github.com/Feyalon",
      title: "Github"
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
      aLink: "https://www.linkedin.com/in/%D0%B3%D0%B0%D1%84%D1%83%D1%80-%D1%88%D0%B0%D1%80%D0%B8%D0%BF%D0%BE%D0%B2-525311247/",
      title: "linkedin"
    }
  ]
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_title">
          <h2>
            I'm Just a Frontend Dev
          </h2>
        </div>
        
        <div className="about_information">
          <p>
            Мне 18 лет, живу в Узбекистане.
          </p>
          <p>
            Основном разрабатываю веб-приложения. Мой любимый яп - Javascript/Typescript.
          </p>
          <div className="about_stack">
            <h3>
              Библеотеки/Фреймворки:
            </h3>
            <p>
              Frontend: React/Vue
            </p>
            <p>
              Backend: Express/Nest или Asp.net
            </p>
            <p>
              State manager: Redux/Vuex 
            </p>
          </div>
          <div className="about_tools">
            <h3>
              Инструменты:
            </h3>
            <p>
              СУБД: Mongodb
            </p>
            <p>
              OS: Windows 
            </p>
            <p>
              IDE: VScode
            </p>
            <p>
              ЯП(ы): C#, Javascript/Typescript и python
            </p>
          </div>
          
        </div>

        <div className="about_footer">
          <h3>
            Я есть в:
          </h3>
          <div className="about_contacts">
            <ul>
              {contactData.map((data) => (
                <li>
                  <img src={data.img} alt="" />
                  <a href={data.aLink}>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, {useState, useEffect} from 'react'
import HeaderEdit from './Header-edit'
import { NavLink } from 'react-router-dom'
import s from "./modules/Manager.module.css"
import "./modules/manager.css"
import cards from "../mainimage/pngegg.png"
import audio from "./modules/image/audio.png"
import video from "./modules/image/video.png"
import mainvideo from "./modules/image/main-video.png"
import footer from "./modules/image/footer.png"
import eyeIcon from './modules/image/lock.png';
import eyeSlashIcon from './modules/image/open.png';
import { t } from "i18next";
import { useTranslation } from 'react-i18next';



export const Manager = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const hardcodedUsers = [
    { username: 'Renanao', password: 'Renanaofliestospace' }
  ];

  const handleLogin = () => {
    const user = hardcodedUsers.find(
      u => u.username === username && u.password === password
    );
 if (user) {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', 'true');
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 5);
      document.cookie = `loggedIn=true; expires=${expirationDate.toUTCString()}`;
    } else {
      alert('Invalid username or password');
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    document.title = t('Manager Russian');
  }, []);
  
  return loggedIn ? (  
        <div>
<div style={{ backgroundColor: "#c4d3f6"}}>
  <HeaderEdit />
  <div className="container">
  <p style={{position: "absolute", top: "70px", fontSize: "25px"}}>Форма редактирования сайта для Русского языка</p>
    <div className={s.form}>
      <div className={s.ul}>
        <div className={s.li} >
          <NavLink to="/main-cards-edit">Карточки главной страницы</NavLink>
          <NavLink to="/main-cards-edit"><img width={"100px"} src={cards} alt='' /></NavLink>
        </div>
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
          <NavLink to="/footer-edit">Нижняя часть сайта</NavLink>
          <NavLink to="/footer-edit"><img width={"100px"} src={footer} alt='' /></NavLink>
        </div>
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
          <NavLink to="/main-video-edit">Видеосерии на главной странице</NavLink>
          <NavLink to="/main-video-edit"><img width={"100px"} src={mainvideo} alt='' /></NavLink>
        </div>
        
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
          <NavLink to="/videobook-edit">Видеокнига</NavLink>
          <NavLink to="/videobook-edit"><img width={"100px"} src={video} alt='' /></NavLink>
        </div>
        
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
          <NavLink to="/audiobook-edit">Аудиокнига</NavLink>
          <NavLink to="/audiobook-edit"><img width={"100px"} src={audio} alt='' /></NavLink>
        </div>
        
      </div>
    </div>
  </div>
</div>
        </div>
  ) : (
    <div className={s.containerManager}>
<div>
      <h1 style={{fontSize: "18px"}}>Войти в панель редактирования менеджера</h1>
      <div className={s.auth}>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    <input
  type={showPassword ? "text" : "password"}
  placeholder="Пароль"
  value={password}
  onChange={e => setPassword(e.target.value)}
/>
<span 
  className={s.passwordToggle}
  onClick={() => setShowPassword(!showPassword)}
  style={{
    backgroundImage: `url(${showPassword ? eyeSlashIcon : eyeIcon}) `
  }}
/>

      <button className={s.button} onClick={handleLogin}>Войти</button>
        </div>
      </div>    
    </div>
  );
};

export default Manager;
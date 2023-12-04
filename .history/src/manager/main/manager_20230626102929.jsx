import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import s from "./modules/Manager.module.css"
import eyeIcon from '../../image/manager/open.png';
import eyeSlashIcon from '../../image/manager/lock.png';
import "./modules/manager.css"
import { getDatabase, ref, onValue, update } from 'firebase/database';
import Header from '../../Main/Header';


export const Manager = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [objects, setObjects] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");
    onValue(objectsRef, (snapshot) => {
      const data = snapshot.val();
      setObjects(data);
    });
  }, []);

  const [objects2, setObjects2] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects2(data);
    });
  }, []);

  const [objects3, setObjects3] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objects3Ref = ref(db, "objects3");
    onValue(objects3Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects3(data);
    });
  }, []);

  const [objects4, setObjects4] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects4(data);
    });
  }, []);

  const [objects5, setObjects5] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objects5Ref = ref(db, "objects5");
    onValue(objects5Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects5(data);
    });
  }, []);


  const [objects6, setObjects6] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objects6Ref = ref(db, "objects6");
    onValue(objects6Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects6(data);
    });
  }, []);




  const hardcodedUsers = [
    { username: 'Manager', password: 'Renanaofliestospace' }
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
    document.title = 'Manager';
  }, []);
  
  return loggedIn ? (  
        
        


 
    <div style={{ backgroundColor: "#c4d3f6", margin: "0"}}>
   
  <p className={s.edit}>Форма редактирования объектов</p>
    <div className={s.form}>
      <div className={s.ul}>
        <div className={s.li} >
        <NavLink to="/general-edit-id1">{objects && objects.name1}</NavLink>
        
        </div>
        <img src={objects[`imageUrl1`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
        <NavLink to="/general-edit-id2">{objects2 && objects2.name2}</NavLink>
        </div>
        <img src={objects2[`imageUrl2`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
      </div>
    
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
        <NavLink to="/general-edit-id3">{objects3 && objects3.name3}</NavLink>
        </div>
        <img src={objects3[`imageUrl3`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
        <NavLink to="/general-edit-id4">{objects4 && objects4.name4}</NavLink>
        </div>
        <img src={objects4[`imageUrl4`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
        <NavLink to="/general-edit-id5">{objects5 && objects5.name5}</NavLink>
        </div>
        <img src={objects[`imageUrl5`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
      </div>
      <div className={s.ul} style={{marginTop: "100px"}}> 
        <div className={s.li} >
        <NavLink to="/general-edit-id6">{objects && objects.name6}</NavLink>
        </div>
        <img src={objects[`imageUrl6`]} width={"115px"} height={"95px"} style={{objectFit: "cover", borderRadius: "5px", padding: " 0 20px"}} />
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
    backgroundImage: `url(${showPassword ? eyeSlashIcon : eyeIcon})`,
    background: "no-repeat" 
  }}
/>

      <button className={s.button} onClick={handleLogin}>Войти</button>
        </div>
      </div>    
    </div>
  );
};

export default Manager;
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

const MainNavigation = () => {

    const authCtx = useContext(AuthContext);
    const [username, setUsername] = useState('');
    let isLogin = authCtx.isLoggedIn;
    let isGet = authCtx.isGetSuccess;

    const callback = (str) => {
        setUsername(str);
    };

    useEffect(() => {
        if (isLogin) {
            console.log('start');
            authCtx.getUser();
        }
    }, [isLogin]);

    useEffect(() => {
        if (isGet) {
            console.log('get start');
            callback(authCtx.userObj.username);
        }
    }, [isGet]);

    const toggleLogoutHandler = () => {
        console.log('logout');
        authCtx.logout();
    };

    return(
        <header>
          <Link to='/'><div>Home</div></Link>
          <nav>
            <ul>
              <li>{!isLogin && <Link to='/user/login'>Login</Link>}</li>
              <li>{!isLogin && <Link to='/user/register'>Sign-Up</Link>}</li>
              <li>{isLogin && <button onClick={toggleLogoutHandler}>Logout</button>}</li>
            </ul>
          </nav>
        </header>
      );
    };

export default MainNavigation;

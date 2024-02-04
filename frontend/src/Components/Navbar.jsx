import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authContext } from '../Context/AuthContext';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,role,token,isAuth,dispatch} = useContext(authContext)
   const navigate= useNavigate()


  const handleLogout =async (e) => {
    try {
      const res = await fetch(`${BASE_URL}/users/logout`,{
        method:'post',
        headers : {
          'Content-type' : 'application/json'
        }
      })

      const result = await res.json();
// console.log(result)
      if(!res.ok) {
        throw new Error(result.message)
      }

      toast.success(result.msg);
      dispatch({
        type : 'LOGOUT'
      })
      navigate('/')
      
    } catch (error) {
      toast.error(error.message);
    }
    
  }

  return (
    <HEAD>
      <div className='logo'>Library</div>
      <div className='navigation'>
        <CustomNavLink to='/' exact activeClassName='active-link'>
          Home
        </CustomNavLink>
        <CustomNavLink to='/about' activeClassName='active-link'>
          About
        </CustomNavLink>
        <CustomNavLink to='/books' activeClassName='active-link'>
          Books
        </CustomNavLink>
      </div>

      {/* ========nav-right============ */}
      <div className='right'>
        {
          token ? 
          <div>
            <button className='button' onClick={handleLogout}>
              Logout
            </button> 
        </div>
        :
        <div>       
          <Link to={"/login"}>
            <button className='button'>
              Login
            </button> 
          </Link>
        </div>
      }
      </div>
    </HEAD>
  );
};

export default Navbar;

const HEAD = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  width: 100%;
  padding: 15px 10px;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: white;

  .navigation {
    display: flex;
    gap: 25px;
  }
  .logo {

        color:#5e5757; 
      font-weight: 600;
      font-size: x-large;
      font-family: cursive;
  }
  .naem {
  margin-right: 7px;
  }
  .user {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .user img {
    width: 100%;
  }
  .hidden {
    display: none;
  }
  .button {
    background-color: #e97272;
    padding: 9px 15px;
    color: white;
    font-weight: 600;
    font-size: medium;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e97272;
  }
  .right {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .right Link {
    text-decoration: none;
    background-color: transparent;
  }
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color:var(--color-primary); 
  font-weight: 600;
  font-size: large;
  
  &.active-link {
    color: var(--color-secondary);
    font-size: larger;
  }
  
  &:hover {
    font-size: larger;
    color:var(--color-secondary); 
  }
`;

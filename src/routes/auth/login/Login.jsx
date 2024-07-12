import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [btnLoader, setBtnLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const formReset = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postLogin = async () => {
      try {
        setBtnLoader(true);
        const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          toast.success('Login successful');
          formReset();
          navigate('/');
        } else {
          throw new Error("Login failed");
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message === "Login failed" ? "Invalid email or password!" : "Login failed. Please try again!");
      } finally {
        setBtnLoader(false);
      }
    };
    postLogin();
  };

  return (
    <div className='flex items-center flex-col justify-center my-[200px]'>
      <Box component='div' className='flex flex-col justify-center items-center mb-16'>
        <Typography
          component='h1'
          sx={{
            fontSize: '52px',
            fontWeight: 500,
            color: '#333333',
          }}>
          Login
        </Typography>
        <Typography
          component='p'
          sx={{
            color: '#828282',
          }}>
          Enter your credentials to access your account.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { width: '419px' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div className='pb-3.5 text-[#333333]'>Email Address</div>
          <TextField
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="outlined-size-small"
            size="small"
            placeholder='email@domain.com'
          />
        </div>
        <div>
          <div className='max-w-[419px] mt-7 pb-3.5 text-[#333333] flex justify-between'>
            <p>Password</p>
            <Link to='' className='text-[#2F80ED] '>Forgot Password?</Link>
          </div>
          <TextField
            onChange={handleChange}
            name="password"
            value={formData.password}
            id="outlined-size-small"
            size="small"
            type='password'
            placeholder='Password'
          />
        </div>

        <Button
          type='submit'
          variant="contained"
          sx={{
            width: '419px',
            textTransform: 'capitalize',
            fontWeight: 500,
            fontSize: '20px',
            mt: '40px',
          }}>
          {btnLoader ? "Login..." : "Login"}
        </Button>
      </Box>
      <Typography component='p' sx={{ mt: '22px' }} className='text-[#828282]'>
        Don’t have an account? <Link to='/auth/register' className='text-black'>Register here.</Link>
      </Typography>
    </div>
  )
}

export default Login;

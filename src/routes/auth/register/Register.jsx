import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [btnLoader, setBtnLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: false,
    street: '',
    apartment: '',
    zip: '',
    city: '',
    country: ''
  });

  const formReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      isAdmin: false,
      street: '',
      apartment: '',
      zip: '',
      city: '',
      country: ''
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

    const postRegister = async () => {
      try {
        const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/register', {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...formData
          })
        })

        if (response.ok) {
          toast.success('Registration successful');
          setBtnLoader(true)
          formReset();
          navigate('/auth');

        } else {
          throw new Error("Registration failed");
        }
      }
      catch (error) {
        console.log(error);
        setBtnLoader(false);
        toast.error('Registration failed');
      }
    }
    postRegister();
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
          }} >
          Register
        </Typography>
        <Typography
          component='p'
          sx={{
            color: '#828282',
          }} >Enter your details to create an account.
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          maxWidth: '860px',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {[
          { label: 'Name', name: 'name' },
          { label: 'Email Address', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Phone', name: 'phone' },
          { label: 'Street', name: 'street' },
          { label: 'Apartment', name: 'apartment' },
          { label: 'Zip', name: 'zip' },
          { label: 'City', name: 'city' },
          { label: 'Country', name: 'country' }
        ].map((field) => (
          <div key={field.name}>
            <div className='pb-3.5 text-[#333333]'>{field.label}</div>
            <TextField
              name={field.name}
              size="small"
              placeholder={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              sx={{ width: '100%' }}
              type={field.type || 'text'}
            />
          </div>
        ))}
        <Button
          variant="contained"
          type='submit'
          sx={{
            gridColumn: 'span 3',
            textTransform: 'capitalize',
            fontWeight: 500,
            fontSize: '18px',
            mt: '40px',
          }}>
          {btnLoader ? 'Registering...' : 'Register'}
        </Button>
      </Box>
      <Typography component='p' sx={{ mt: '22px' }} className='text-[#828282]'>Already have an account? <Link to='/auth' className='text-black'>Login here.</Link></Typography>
    </div>
  );
}

export default Register;

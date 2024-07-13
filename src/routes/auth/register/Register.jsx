import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
        });

        if (response.ok) {
          toast.success(t("registerSuccessful"));
          setBtnLoader(true);
          formReset();
          navigate('/auth');

        } else {
          throw new Error(t("registerFailed"));
        }
      }
      catch (error) {
        console.log(error);
        setBtnLoader(false);
        toast.error(t("registerFailed"));
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
          {t("register")}
        </Typography>
        <Typography
          component='p'
          sx={{
            color: '#828282',
          }} >{t("registerSubtitle")}
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
          { label: t("registerName"), name: 'name' },
          { label: t("registerEmail"), name: 'email', type: 'email' },
          { label: t("loginPassword"), name: 'password', type: 'password' },
          { label: t("registerPhone"), name: 'phone', type: 'number' },
          { label: t("registerStreet"), name: 'street' },
          { label: t("registerApartment"), name: 'apartment' },
          { label: t("registerZip"), name: 'zip', type: 'number' },
          { label: t("registerCity"), name: 'city' },
          { label: t("registerCountry"), name: 'country' },
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
          {btnLoader ? t("register") + '...' : t("register")}
        </Button>
      </Box>
      <Typography component='p' sx={{ mt: '22px' }} className='text-[#828282]'> {t("registerQuestion")} <Link to='/auth' className='text-black'>{t("loginHere")}.</Link></Typography>
    </div>
  );
}

export default Register;

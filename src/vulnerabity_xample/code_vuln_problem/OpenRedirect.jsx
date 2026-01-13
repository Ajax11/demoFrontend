import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OpenRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    //const redirectUrl = params.get('redirect');
    const redirectPath = params.get('redirect');

    // ❌ Redirección sin validar el dominio
    // if (redirectUrl) {
    if (redirectPath && redirectPath.startsWith('/')) {
      //window.location.href = redirectUrl;
      navigate(redirectPath);
    }
  }, [navigate]);
  //}, []);

  return <h2>Redirecting...</h2>;
};

export default OpenRedirect;

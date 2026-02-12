import React, { useEffect } from 'react';

const OpenRedirect = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');

    // ❌ Redirección sin validar el dominio
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, []);

  return <h2>Redirecting...</h2>;
};

export default OpenRedirect;

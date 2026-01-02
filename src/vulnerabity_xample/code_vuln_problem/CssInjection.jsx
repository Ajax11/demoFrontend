import React, { useState } from 'react';

const CssInjection = () => {
  const [userCss, setUserCss] = useState('');

  return (
    <div>
      <h2>CSS Injection</h2>

      <textarea placeholder="Enter custom CSS" onChange={e => setUserCss(e.target.value)} />

      {/* ❌ Inyección directa de CSS controlado por el usuario */}
      <style>{userCss}</style>
      <style dangerouslySetInnerHTML={{ __html: userCss }} />

      <p>Styled content</p>
    </div>
  );
};

export default CssInjection;

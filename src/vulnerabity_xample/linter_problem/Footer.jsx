import React from 'react';

//import minimist from 'minimist';

//var name = 'Maria';
var last_name = 'Concepcion';

function Base() {
  return (
    <div>
      <p> {last_name}, name </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <hr className="mt-5 mb-4" />
      <p className="text-muted">Created for practice purposes. Article Web.</p>
      <div>
        <Base />
      </div>
    </footer>
  );
}

export default Footer;

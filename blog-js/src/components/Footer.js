import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-light mt-5">
      <div className="container">
        <p className="m-0 text-center">
          Copyright &copy; Alexandre de Souza Jr. -{" "}
          {`${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

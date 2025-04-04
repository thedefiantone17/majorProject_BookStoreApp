import React from "react";

const footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav className="w-100">
          <h6 className="footer-title">Book Store App</h6>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, officiis aspernatur enim eligendi cupiditate ea quasi
            quas earum ipsa deleniti, quibusdam numquam quis impedit! Aliquid.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Rehance Pvt. Ltd.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default footer;

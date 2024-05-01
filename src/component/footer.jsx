

const footer = () => {
    return (
        <div>
 <footer className="footer 
  p-20  text-gray-300 text-xl bg-black">
  <aside>
  <img src="/public/img/icons/logo.svg" alt="" />
    <p className="w-[250px]">Edwin Diaz is a software and web technologies engineer,
         a life coach trainer who is also a serial .</p>
  </aside> 
  <nav>
    <h6 className="footer-title">About</h6> 
    <a className="link link-hover">
    Service</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default footer;
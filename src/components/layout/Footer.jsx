import Logo from "../home/logo/Logo";
function Footer() {
  return (
    <div className='container-fluid'>
      <div className='row footer-dn'>
        <div className='col-md-12 sizing'>
          <div className='footer-wd'>
            <div className='row'>
              <div className='col-md-3'>
                <ul className='bottom-menu'>
                  <li className='footer-li-head'>About</li>
                  <li className='footer-li'>
                    <a href='/'>Contact</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Brand</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Blog</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Community</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>CAKE Token</a>
                  </li>
                  <li className='footer-li'>-</li>
                  <li className='footer-li'>
                    <a href='/'>Online Store</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <ul className='bottom-menu'>
                  <li className='footer-li-head'>Help</li>
                  <li className='footer-li'>
                    <a href='/'>Customer Support</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>TroubleShooting</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Guides</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <ul className='bottom-menu'>
                  <li className='footer-li-head'>Developers</li>
                  <li className='footer-li'>
                    <a href='/'>Github</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Documentation</a>
                  </li>
                  <li className='footer-li'>
                    <a href='/'>Guides</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <a className='footer-logo' href='/'>
                  <Logo />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='footer-wd'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='footer-sec d-flex justify-content-start'>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-telegram'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-reddit'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-discord'></i>
                  </a>
                  <a className='footer-icon' href='/'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='footer-wd'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='d-flex'>
                  <div className=''>
                    <input type='checkbox' id='toggle_checkbox' />
                    <label htmlFor='toggle_checkbox' className='tgl-aln'>
                      <div id='star'>
                        <div className='star' id='star-1'>
                          ★
                        </div>
                        <div className='star' id='star-2'>
                          ★
                        </div>
                      </div>
                      <div id='moon'></div>
                    </label>
                  </div>
                  <div className='bottom-2 d-flex flex-row'>
                    <div className='ml-4'>
                      <i className='fa-solid fa-globe'></i>
                    </div>
                    <div className='ml-2'>EN</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='bottom-2 d-flex flex-row-reverse'>
                  <button type='button' className='btn btn-btn-my'>
                    Buy CAKE
                  </button>
                  <div className='bottom-price'>$7.463</div>
                  <div className='circle-icon-bottom'>
                    <img
                      className='nab-img'
                      src='assets/images/favicon.png'
                      alt='logo'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../home/logo/Logo";
// import Icon from "../home/logo/Icon";

const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateStatus = (value, index) => {
    if (index === 1) {
      setShow(value);
    } else if (index === 2) {
      setShow1(value);
    } else if (index === 3) {
      setShow2(value);
    } else if (index === 4) {
      setShow3(value);
    } else if (index === 5) {
      setShow4(value);
    }
  };
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar bg='light' expand='lg' sticky='top'>
        <Container fluid>
          <Navbar.Brand className='ez-site-header__logo' href='/'>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title='Trade'
                id='collasible-nav-dropdown'
                show={show}
                onMouseEnter={(e) => updateStatus(true, 1)}
                onMouseLeave={(e) => updateStatus(false, 1)}
                className='nab-space'
              >
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Earn'
                id='collasible-nav-dropdown'
                show={show1}
                onMouseEnter={(e) => updateStatus(true, 2)}
                onMouseLeave={(e) => updateStatus(false, 2)}
                className='nab-space'
              >
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Win'
                id='collasible-nav-dropdown'
                show={show2}
                onMouseEnter={(e) => updateStatus(true, 3)}
                onMouseLeave={(e) => updateStatus(false, 3)}
                className='nab-space'
              >
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='NFT'
                id='collasible-nav-dropdown'
                show={show3}
                onMouseEnter={(e) => updateStatus(true, 4)}
                onMouseLeave={(e) => updateStatus(false, 4)}
                className='nab-space'
              >
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='...'
                id='collasible-nav-dropdown'
                show={show4}
                onMouseEnter={(e) => updateStatus(true, 5)}
                onMouseLeave={(e) => updateStatus(false, 5)}
                className='nab-space'
              >
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className='d-flex'>
              <div className='circle-icon'>
                <img
                  className='nab-img'
                  src='assets/images/favicon.png'
                  alt='logo'
                />
              </div>
              <div className='top-price'>$7.463</div>
              <div className='top-globe'>
                <i className='fa-solid fa-globe'></i>
              </div>
              <div className='top-gear' onClick={handleShow}>
                <i className='fa-solid fa-gear'></i>
              </div>
              <Button variant='btn-my'>Connect Walet</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className='my-md-h' closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row p-4'>
            <div className='col-md-12 fs3 f1 mb-4'>Global</div>
            <div className='col-md-8 mb-3'>Dark mode</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className='col-md-12 mb-3'>
              Default Transaction Speed (GWEI)
            </div>
            <div className='col-md-4 float-end mb-3'>
              <Button variant='btn-my'>Play On </Button>
            </div>
            <div className='col-md-4 float-end mb-3'>
              <Button variant='btn-my'>Walet (3)</Button>
            </div>
            <div className='col-md-4 float-end mb-3'>
              <Button variant='btn-my'>Connect</Button>
            </div>
            <div className='bd-btm mb-5'></div>
            <div className='col-md-12 fs3 f1 mb-4'>SWAPS & LIQUIDITY</div>
            <div className='col-md-8 mb-3'>Tx deadline (mins)</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className='col-md-8 mb-3'>Expert Mode</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className='col-md-8 mb-3'>Disable Multihops</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className='col-md-8 mb-3'>Subgraph Health Indicator</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className='col-md-8 mb-3'>Flippy sounds</div>
            <div className='col-md-4 float-end mb-3'>
              <div class='form-check form-switch d-inline-block'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='site_state'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Header;

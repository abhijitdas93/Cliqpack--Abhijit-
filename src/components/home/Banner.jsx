import { motion } from "framer-motion";

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-md-12'>
            <div className='d-flex justify-content-center'>
              <div className='glass-2 p-4'>
                <div class='d-flex flex-column'>
                  <h4 className='text-start f3'>Win $117,258 in Lottery</h4>
                  <div className='section-timer mt-3'>23h 55m 26s</div>
                  <div className='mt-3'>
                    <button
                      type='button'
                      className='btn btn-btn-my float-start p-2'
                    >
                      Play Now <i class='fa-solid fa-arrow-right'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-7'>
            <div className='text-sizing'>
              <h1 className='c-h text-start'>The moon is made of pancakes.</h1>
              <p className='c-d text-start mt-3'>
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </p>

              <button
                type='button'
                className='btn btn-success float-start mt-4'
              >
                Connect Wallet
              </button>
              <button
                type='button'
                className='btn btn-outline-success float-start ms-3 mt-4'
              >
                Trade Now
              </button>
            </div>
          </div>
          <div className='col-md-5'>
            <motion.img
              initial={{ y: -5 }}
              animate={{ y: 5 }}
              transition={{
                duration: 3,
                yoyo: Infinity,
              }}
              src='assets/images/bunny@2x.webp'
              className='img-res'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;

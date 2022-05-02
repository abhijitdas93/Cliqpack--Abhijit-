import { motion } from "framer-motion";

function SectionThird() {
  return (
    <section className='third'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='text-sizing'>
              <h1 className='c-h text-start'>
                <span>Trade</span> anything. No<br></br> registration, no
                hassle.
              </h1>
              <p className='c-d text-start mt-3'>
                Trade any token on BNB Smart Chain in seconds, just by
                connecting your wallet.
              </p>

              <button
                type='button'
                className='btn btn-success float-start mt-4'
              >
                Connect Wallet
              </button>
              <a href='/' className='float-start ms-3 my-a'>
                Trade Now
              </a>
            </div>
          </div>
          <div className='col-md-5'>
            <motion.img
              initial={{ y: -15 }}
              animate={{ y: 15 }}
              transition={{
                duration: 2,
                yoyo: Infinity,
              }}
              src='assets/images/BTC@2x.webp'
              className='img-res'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionThird;

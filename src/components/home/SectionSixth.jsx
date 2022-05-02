import { motion } from "framer-motion";
function SectionSixth() {
  return (
    <section className='third'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='text-sizing'>
              <h1 className='c-h text-start'>
                <span>CAKE</span> makes our world go round.
              </h1>
              <p className='c-d text-start mt-3'>
                CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
                win it, farm it, spend it, stake it... heck, you can even vote
                with it!
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
              src='assets/images/coin@2x.webp'
              className='img-res'
            />
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-md-12'>
            <div className='p-4 d-flex justify-content-center'>
              <div className='wd-20 b-l'>
                <p className='fs3'>Total supply</p>
                <h4 className='fs4 f2'>440,560</h4>
              </div>
              <div className='wd-20 b-l'>
                <p className='fs3'>Burned to date</p>
                <h4 className='fs4 f2'>440,560</h4>
              </div>
              <div className='wd-20 b-l'>
                <p className='fs3'>Market cap</p>
                <h4 className='fs4 f2'>440,560</h4>
              </div>
              <div className='wd-20'>
                <p className='fs3'>Current emissions</p>
                <h4 className='fs4 f2'>14.25/block</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionSixth;

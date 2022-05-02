import { motion } from "framer-motion";

function SectionSeventh() {
  return (
    <section className='seventh'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
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
          <div className='col-md-6'>
            <div className='text-sizing-2'>
              <h1 className='fs2 f3 text-center mb-5'>Start in seconds.</h1>
              <p className='fs3 f3 text-center mb-3'>
                Connect your crypto wallet to start using the app in seconds.
              </p>
              <p className='fs3 f3 text-center mb-5'>No registration needed.</p>

              <button type='button' className='btn btn-success'>
                Connect Wallet
              </button>
            </div>
          </div>
          <div className='col-md-3'>
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
export default SectionSeventh;

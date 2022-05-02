import { motion } from "framer-motion";

function SectionForth() {
  return (
    <section className='forth'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 ms-5'>
            <motion.img
              initial={{ y: -15 }}
              animate={{ y: 15 }}
              transition={{
                duration: 2,
                yoyo: Infinity,
              }}
              src='assets/images/stonks@2x.webp'
              className='img-res'
            />
          </div>
          <div className='col-md-7'>
            <div className='text-sizing3'>
              <h1 className='c-h text-start'>
                <span>Earn</span> passive income with crypto.
              </h1>
              <p className='c-d text-start mt-3'>
                PancakeSwap makes it easy to make your crypto work for you.
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
        </div>
      </div>
    </section>
  );
}
export default SectionForth;

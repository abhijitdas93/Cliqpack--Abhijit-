function SectionSecond() {
  return (
    <section className='section-second'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='fs2 f1 text-center'>Used by millions.</h3>
            <h3 className='fs2 f1 text-center mar-my'>
              Trusted with billions.
            </h3>
            <p className='fs3 f2 f2text-center mt-3'>
              PancakeSwap has the most users of any decentralized platform,
              ever.
            </p>
            <p className='fs3 f2 mar-my2'>
              {" "}
              And those users are now entrusting the platform with over $6
              billion in funds.
            </p>
            <h5 className='text-center c-d mt-4'>Will you join them?</h5>
            <div className='d-flex justify-content-center mt-5'>
              <div class='card me-3 gl-card p-4'>
                <div class='card-body'>
                  <div className='text-end cdf cdc-1 mb-5'>
                    <i class='fa-solid fa-users'></i>
                  </div>
                  <h5 class='card-title text-start cd-1'>4.4 billion</h5>
                  <h6 class='card-subtitle mb-2 text-start cd-2 cdc-1'>User</h6>
                  <p class='card-text cd-3 mt-4'>Some quick example text</p>
                </div>
              </div>
              <div class='card ms-3 me-3 gl-card p-4'>
                <div class='card-body'>
                  <div className='text-end cdf cdc-2 mb-5'>
                    <i class='fa-solid fa-coins'></i>
                  </div>
                  <h5 class='card-title text-start cd-1'>38 million</h5>
                  <h6 class='card-subtitle mb-2 text-start cd-2 cdc-2'>
                    Traders
                  </h6>
                  <p class='card-text cd-3 mt-4'>Some quick example text</p>
                </div>
              </div>
              <div class='card ms-3 gl-card p-4'>
                <div class='card-body'>
                  <div className='text-end cdf cdc-3 mb-5'>
                    <i class='fa-solid fa-chart-column'></i>
                  </div>
                  <h5 class='card-title text-start cd-1'>$5 billion</h5>
                  <h6 class='card-subtitle mb-2 text-start cd-2 cdc-3'>
                    Stacked
                  </h6>
                  <p class='card-text cd-3 mt-4'>Some quick example text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionSecond;

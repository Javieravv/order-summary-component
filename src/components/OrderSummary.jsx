

export const OrderSummary = () => {
    return (
        <section className="section-main">
        <img 
            className="image-main"
            src="/images/illustration-hero.png" 
            alt="Icono" 
        />
        <article>
            <h2>Order Summary</h2>
            <p>You can now listen to millions of songs, audiobooks and podcasts on any device anyhwere you like!</p>
            <div className="price-plan">
                <img src="/images/icon-music.svg" alt="Icono" />
                <div>
                    <p>Annual Plan</p>
                    <p>$59.99/year</p>
                </div>
                <a href="#">Change</a>
            </div>
            <button>Proceed to Payment</button>
            <p className="cancel-order">Cancel Order</p>
        </article>
    </section>
  )
}

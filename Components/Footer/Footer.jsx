const Footer = () => {
    return (
        <footer>
            <section className=" p-16  md:p-40">
                <article className="grid grid-cols-1 md:grid-cols-3 gap-16 text-white">
                    <div>
                        <h2 className="text-xl font-bold mb-8">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore in voluptatibus necessitatibus provident dolorem asperiores illum id consequuntur!</p>
                    </div>
                    <div>

                        <h2 className="text-xl font-bold mb-8">Contuct Us</h2>
                        <p>56/8, Santa Monica bullevard, Los angeles, california, United states of america</p>
                        <h2 className=" mt-10 text-2xl font-semibold">012-6532-568-9746</h2>
                        <h2 className="text-2xl font-semibold">012-6532-568-9746</h2>
                    </div>
                    <div>

                        <h2 className="text-xl font-bold mb-8">Newsletter</h2>
                        <p>You can trust us. we only send promo offers, not a single spam.</p>
                        <input className="mt-10 w-full  rounded-xl"/>
                    </div>
                </article>
            </section>
        </footer>
    )
}

export default Footer
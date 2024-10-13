import classes from './Banner.module.css'
const Banner = () => {
    return (
        <section className={classes.banner}>
            <div className="hero  min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl text-white font-bold">Build Your <span className={classes.dream}>Dream</span></h1>
                        <p className="py-6 text-white">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className={classes.discover}>Discover Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner
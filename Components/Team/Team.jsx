import Icons from "./Icons"
import classes from "./Team.module.css"
const Team = () => {
    return (
        <section className="container mt-20 mb-20 p-24 md:p-12 xl:p-36">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Meet Our Expert Members</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                <div className={`${classes.memberContainer}`}>
                    <div className={`${classes.imgContainer1}`}>
                        <img src="https://i.postimg.cc/jSzQFdgG/pix10.jpg" />
                        <div className={classes.imgOverlay}>
                            <Icons></Icons>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold">Mike Ross</h2>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
                <div className={`${classes.memberContainer}`}>
                    <div className={`${classes.imgContainer2}`}>
                        <img src="https://i.postimg.cc/gJ0VjyzW/pix11.jpg" />
                        <div className={classes.imgOverlay}>
                            <Icons></Icons>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold">Mike Ross</h2>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
                <div className={`${classes.memberContainer}`}>
                    <div className={`${classes.imgContainer3}`}>
                        <img src="https://i.postimg.cc/fbDjnn1k/pix7.jpg" />
                        <div className={classes.imgOverlay}>
                            <Icons></Icons>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold">Mike Ross</h2>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
                <div className={`${classes.memberContainer}`}>
                    <div className={`${classes.imgContainer3}`}>
                        <img src="https://i.postimg.cc/SKdLm1pd/pix9.jpg" />
                        <div className={classes.imgOverlay}>
                            <Icons></Icons>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold">Mike Ross</h2>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Team
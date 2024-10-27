import classes from './About.module.css'
const AboutUs = () =>
{
    return(
        <section className="mt-20 mb-10 p-12 md:px-44">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="my-auto">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <h1 className="text-3xl font-bold">Our mission</h1>
                    <h1 className="text-3xl font-bold">Misson and Vision</h1>
                    <p className="mt-4">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed</p>
                    <button className={`mt-10 ${classes.heroBtn}`}>RERQUEST CUSTOM PRICE</button>
                </div>
                <div>
                    <img src="https://i.postimg.cc/BQjywgRt/pix13.jpg" alt="" />
                </div>
            </article>
        </section>
    )
}

export default AboutUs
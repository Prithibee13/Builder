const Counter = () =>
{
    return(
        <section className="mt-20 mb-10 p-20 counterContainer">
            <article className="container px-36">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    <article>
                        <h1 className="text-4xl font-bold mb-4">470</h1>
                        <p>Project Completed</p>
                    </article>
                    <article>
                        <h1 className="text-4xl font-bold mb-4">436</h1>
                        <p>Relly Happy Client</p>
                    </article>
                    <article>
                        <h1 className="text-4xl font-bold mb-4">4709</h1>
                        <p>Total Task Completed</p>
                    </article>
                    <article>
                        <h1 className="text-4xl font-bold mb-4">797</h1>
                        <p>Cups of Coffee Taken</p>
                    </article>
                    <article>
                        <h1 className="text-4xl font-bold mb-4">343</h1>
                        <p>In House Proffesionals</p>
                    </article>
                </div>
            </article>
        </section>
    )
}

export default Counter
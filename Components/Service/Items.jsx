import classes from './Service.module.css'
const Items = () => {
    return (
        <div className="px-20 md:px-36">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="text-center p-12 hover:shadow-lg rounded">
                    <div className="">
                        <img className={classes.brandImg} src="https://i.postimg.cc/9QMRhjkD/design.png" alt="draw" />
                    </div>
                    <div className=''>
                        <h3 className='mb-4 mt-4 text-2xl font-semibold'>Building Drawings</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius pariatur quaerat atque molestias rerum totam tempore voluptates aliquid nobis.</p>
                    </div>
                </article>
                <article className='text-center p-12 hover:shadow-lg rounded'>
                    <div>
                        <img className={classes.brandImg} src="https://i.postimg.cc/5NfQszqq/paint-roller.png" alt="draw" />
                    </div>
                    <div className=''>
                        <h3 className='mb-4 mt-4 text-2xl font-semibold'>Painting Construction</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ut sint quis mollitia maxime alias. Dolore nihil itaque dicta delectus, quaerat asperiores modi in optio, tempore, ullam placeat quis fugit.</p>
                    </div>
                </article>
                <article className='text-center p-12 hover:shadow-lg rounded'>
                    <div>
                        <img className={classes.brandImg} src="https://i.postimg.cc/sDKQq2TF/customer-support.png" alt="draw" />
                    </div>
                    <div className=''>
                        <h3 className='mb-4 mt-4 text-2xl font-semibold'>Repair Constraction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus architecto amet deserunt laboriosam, perferendis dignissimos similique odit autem dolorum numquam.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Items
import { faUser } from "@fortawesome/free-regular-svg-icons"
import Feature from "./Feature"

const Features  = () =>
{
    return(
        <section className="mt-20 mb-10">
            <article className="text-center">
                <h1 className="text-2xl font-bold">Some Features that Made us Unique</h1>
                <p className="mt-3">Who are in extremely love with eco friendly system.</p>
            </article>
            <article className="p-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <Feature icon="lnr lnr-user" title="Expert Technicians"/>
                    <Feature icon="lnr lnr-license" title="Professional Service"/>
                    <Feature icon="lnr lnr-phone" title="Great Support"/>    
                    <Feature icon="lnr lnr-rocket" title="Technical Skills"/>        
                    <Feature icon="lnr lnr-diamond" title="Highly Recomended"/>     
                    <Feature icon="lnr lnr-bubble" title="Positive Reviews"/>     
                </div>
            </article>
        </section>
    )
}
export default Features
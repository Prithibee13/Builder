import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./Feature.module.css"
const Feature = (props) => {
    const { icon, title } = props
    return (
        <article className='border rounded-xl p-12 hover:shadow-2xl hover:border-0 '>
            <div className='flex gap-4 mb-5 hover:text-[#FABC3F]'>
                <i className={`${icon} text-[30px]`}></i>
                <h2 className='text-xl font-semibold'>{title}</h2>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        </article>
    )

}

export default Feature
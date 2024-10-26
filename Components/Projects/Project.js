import classes from "./Projects.module.css"
const Project = (props) => {
    const { project } = props
    const { img, title, details } = project
    return (
        <div className={classes.projectContainer}>
            <div className={classes.imgContainer}>
                <img className="h-full" src={img} />
                <div className={classes.imgOverlay}>
                    <h2 className="text-xl font-bold mb-6">{title}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export default Project
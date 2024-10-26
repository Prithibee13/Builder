import Project from "./Project"

const Projects = () =>
{
    const projects =  [
        {
            id:"1",
            img : "https://i.postimg.cc/jjbF2r2J/pix4.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        },
        {
            id:"2",
            img : "https://i.postimg.cc/dtgXMCK6/pix5.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        },
        {
            id:"3",
            img : "https://i.postimg.cc/BQjywgRt/pix13.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        },
        {
            id:"4",
            img : "https://i.postimg.cc/L4CwT7Cr/pix12.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        },
        {
            id:"5",
            img : "https://i.postimg.cc/XqzPYGBV/pix6.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        },
        {
            id:"6",
            img : "https://i.postimg.cc/L8fWms9p/pix14.jpg",
            title : "Alex Complex for Residence",
            details : "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."
        }
    ]
    return(
        <section className="mt-20 mb-10">
            <article className="text-center">
                <h1 className="text-3xl font-bold">Our Latest Projects</h1>
                <p className="mt-2">Who are in extremely love with eco friendly system.</p>
            </article>
            <article className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    projects.map(project=> <Project id={project.id} project={project}></Project>)
                }
            </article>
        </section>
    )
}

export default Projects
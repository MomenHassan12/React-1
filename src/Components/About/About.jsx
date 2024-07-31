import style from "./About.module.css"
export default function About() {
    return (
        <>
            <div className=" bg-[#1ABC9C]  py-52">
                <div className="container mx-auto w-[70%]">
                    <div className="  flex flex-col justify-center items-center ">
                        <h1 className={style.aboutHeading}>ABOUT COMPONENT</h1>
                        <div className="home-star flex justify-between items-center my-4">
                            <div className="line"></div>
                            <i className="fa-solid fa-star px-5"></i>
                            <div className="line"></div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row gap-3 justify-center items-center ">
                            <div className=" w-6/12">
                                <h3>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h3>
                            </div>
                            <div className=" w-6/12">
                                <h3>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
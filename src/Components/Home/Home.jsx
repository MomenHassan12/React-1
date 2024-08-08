import style from "./Home.module.css"
// import im
export default function Home() {



    return (
        <>
            <div className="  mx-auto bg-[#1ABC9C] ">
                <div className="container mx-auto ">
                    <div className=' flex flex-col mb-4 pt-16  justify-center items-center'>
                        <img src="./src/assets/avataaars.svg" alt="avatar" className="w-[250px]" />
                    </div>
                    <div className="home-content flex flex-col justify-normal items-center gap-4">
                        <h1 className={style.homeHeading}>START FRAMEWORK</h1>
                        <div className="home-star flex justify-between items-center">
                            <div className={style.line}></div>
                            <i className="fa-solid fa-star px-5"></i>
                            <div className={style.line}></div>
                        </div>
                        <h3 className='pb-16'>Graphic Artist - Web Designer - Illustrator</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
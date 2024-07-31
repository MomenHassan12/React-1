import style from "./Footer.module.css"
export default function Footer() {
    return (
        <>
            <footer className="bg-[#2C3E50]  ">
                <div className="flex text-center p-20  items-start">
                    <div className="flex flex-col w-4/12 justify-center items-center ">
                        <h1 className={style.footerHeading + " pb-1 "}>LOCATION</h1>
                        <h3>2215 John Daniel Drive</h3>
                        <h3>Clark, MO 65243</h3>
                    </div>
                    <div className="flex flex-col w-4/12 justify-center items-center ">
                        <h1 className={style.footerHeading + " pb-1 "}>AROUND THE WEB</h1>
                        <div className="social mt-1 flex gap-1 ">
                            <div className="icon-cover w-[30px] h-[30px] border  rounded-full flex justify-center items-center   ">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="icon-cover w-[30px] h-[30px] border  rounded-full flex justify-center items-center   ">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="icon-cover w-[30px] h-[30px] border  rounded-full flex justify-center items-center   ">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <div className="icon-cover w-[30px] h-[30px] border  rounded-full flex justify-center items-center   ">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-4/12 justify-center items-center ">
                        <h1 className={style.footerHeading + " pb-1 "}>ABOUT FREELANCER</h1>
                        <h3 className="">Freelance is a free to use, licensed Bootstrap theme created by Route</h3>
                    </div>
                </div>
                <div className="bg-[#18232C] flex items-center justify-center py-5">
                    <span className="text-sm">Copyright © Your Website 2021</span>
                </div>
            </footer>
        </>
    )
}
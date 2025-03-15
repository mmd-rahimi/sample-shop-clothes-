const Hero = () => {
    return(
        <section className="bg-pink-100 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full">
                {/* text  */}
                <div className="flex flex-col justify-center">
                    {/* title  */}
                    <h1 className="text-[70px] leading-[1.1] font-light mb-4">SHOP SALE STYLISH <br />
                    <span className="font-semibold">WOMENS & <br />MENS</span>
                    </h1>
                </div>
                {/* image  */}
                <div className="hidden lg:block">
                    <img className="h-[500px]" src='./public/woman_hero.png' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;
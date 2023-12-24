
const Banner = () => {
    return (
        <div className="carousel ">
            <div id="slide1" className="carousel-item relative w-full ">

                <img src="https://html.modernwebtemplates.com/craft/images/slide01.jpg" className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                <img src="https://html.modernwebtemplates.com/craft/images/slide01.jpg" className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">

                <img src="https://html.modernwebtemplates.com/craft/images/slide01.jpg" className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">

                <img src="https://html.modernwebtemplates.com/craft/images/slide01.jpg" className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
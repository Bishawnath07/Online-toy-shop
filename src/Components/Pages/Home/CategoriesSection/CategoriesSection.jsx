
const CategoriesSection = () => {
    return (
        <div className="mt-20">
            <h4 className="text-2xl font-semibold text-teal-500 text-center my-8">
                Making Educational Toys Fun for Kids
            </h4>
            <div>
                <h3 className="text-4xl font-bold text-center mb-6">Shop By Category</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-1-6ff1fa28.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">Go Wild</p>
                    </div>
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-2-60b25c91.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">LETS PLAY</p>
                    </div>
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-3-851e3fb8.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">BEST FRIEND</p>
                    </div>
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-4-9ebefdcc.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">NEW ARRIVALS</p>
                    </div>
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-5-b3140ab1.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">BEST OF BABY</p>
                    </div>
                    <div className="relative">
                        <img src="https://toys-shop-7b335.web.app/assets/category-6-daff7717.png" alt="" />
                        <p className="px-2 py-3 bg-slate-50 absolute bottom-5 left-36">BUNDLE & SAVE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;

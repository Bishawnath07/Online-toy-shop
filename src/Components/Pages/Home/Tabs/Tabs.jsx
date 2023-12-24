import { useEffect, useState } from "react";
import '../../../../App.css'
import Toy from "./Toy";

function Tabs() {
    const [toys, setToys] = useState([])



    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys').then(res => res.json()).then(data => setToys(data))
    }, [])



    return (
        <div className="mt-16">
            <h2 className="text-5xl font-bold text-orange-900 text-center">You can view the toy as per <br /> your choice here</h2>
            <div className="containers">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-16">
                    {
                        toys.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Tabs;
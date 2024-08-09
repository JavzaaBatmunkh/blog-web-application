import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const Contact = () => {
    return (
        <main>
            <Header/>
            <div className="max-w-xl mx-auto flex flex-col gap-10 p-8">
                <h1 className="text-4xl font-semibold">Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex gap-10">
                    <div className="card bg-base-10 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Address</h2>
                            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                    </div>
                    <div className="card bg-base-10 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Contact</h2>
                            <p>313-332-8662
                                info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-slate-200 dark:bg-slate-400 shadow-xl">
                    <div className="card-body">
                        Leave a Message
                        <div className="md:flex md:justify-between flex-wrap">
                            <label className="input input-bordered flex items-center gap-2 bg-white mb-2">
                                <input type="text" className="grow" placeholder="Your Name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 bg-white">
                                <input type="text" className="grow" placeholder="Your Email" />
                            </label>
                        </div>
                        <label className="input input-bordered flex items-center gap-2 bg-white">
                            <input type="text" className="grow" placeholder="Subject" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-white h-32">
                            <input type="text" className="grow" placeholder="Write a message" />
                        </label>
                        <button className="btn btn-info w-48">Send a message</button>

                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Contact
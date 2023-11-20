import Link from "next/link";

function HomeContainer() {
    return (
        <div
            className="p-16 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl shadow-inset-white dark:shadow-none"
        >
            <p
                className="inline-flex items-center text-center text-lg md:text-2xl text-gray-500 dark:text-gray-300 tracking-wide"
            >
                Hi
                <span className="wave text-5xl mx-3 max-2">👋🏻</span>
                I am
            </p>
            <h1 className="text-6xl md:text-8xl font-bold my-4 tracking-tight font-space">
                Emrah
            </h1>
            <p
                className="mt-6 text-lg md:text-xl text-center text-gray-500 dark:text-gray-300 tracking-wide"
            >
                FullStack Developer
            </p>

            <Link href="/about" className="button-next group mt-12 md:mt-24">
                About
                <div
                    className="i-feather-arrow-right w-6 h-6 duration transition-all ml-2 group-hover:ml-3"
                />
            </Link>
        </div>
    );
}

export default HomeContainer;
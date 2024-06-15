import Image from 'next/image'

function AboutContainer() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/images/pp-bw.jpeg" alt="Profile " width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Emrah is a talented developer who is always eager to learn new things. He is a great team player and always willing to help others. He is a great asset to any team
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            Emrah Atalay
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            Software Developer - Bitlis Turkey
                        </div>
                    </figcaption>
                </div>
            </figure>
            <div className="flex justify-center mt-4 space-x-4">
                <div className="text-gray-500 dark:text-gray-400">
                    <a href="dsds" target="_blank">
                        Github
                    </a>
                    <a href="dsds" target="_blank">
                        Linkedin
                    </a>
                    <a href="dsds" target="_blank">
                        Instagram
                    </a>
                    <a href="dsds" target="_blank">
                        Twitter
                    </a>
                </div>
            </div>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 100 }).map((_, index) => (
                        <tr key={index}>
                            <td>Intro to CSS</td>
                            <td>Adam</td>
                            <td>858</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AboutContainer
import Image from 'next/image'

function AboutContainer() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                <Image src="/images/pp-bw.jpeg" alt="Emrah Atalay" className="rounded-full" width={250} height={250} />
                <h1 className="text-2xl font-bold mt-4">Emrah Atalay</h1>
                <p className="text-center mt-2">Full-stack Developer</p>
            </div>
        </div>
    )
}

export default AboutContainer
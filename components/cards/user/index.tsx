import Image from 'next/image';

export default function UserCard(): JSX.Element {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-48" width={384} height={512}
                     src="/images/user-picture.jpg" alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Emrah Atalay</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Software Developer</a>
                    <p className="mt-2 text-slate-500"> I&apos;m a software developer who loves to learn new things. I&apos;m currently working on a project called
                    </p>
                </div>
            </div>
        </div>
    );
}
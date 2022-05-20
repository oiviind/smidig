import Head from 'next/head';

export default function HelloWorldPage() {
    return (
        <div className="">
            <Head>
                <title>Hello world</title>
            </Head>

            <main className="m-4">
                <h1 className="text-xl lg:text-2xl underline decoration-purple-1 decoration-wavy decoration-2">
                    Hello world
                </h1>

                <div className="text-md mt-2">
                    Just showing how you can have multiple pages by just adding
                    files to the pages folder.
                </div>
            </main>
        </div>
    );
}

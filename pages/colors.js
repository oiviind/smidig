import AppLayout from 'components/AppLayout';
import Image from 'next/image';

export default function ColorsPage() {
    return (
        <AppLayout title="atcampus - Colors">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">Colors</h1>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-colors.png'}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-colors-2.png'}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-colors-3.png'}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-icons.png'}
                    />
                </div>
            </main>
        </AppLayout>
    );
}

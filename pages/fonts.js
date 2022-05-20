import AppLayout from 'components/AppLayout';
import Image from 'next/image';

export default function FontsPage() {
    return (
        <AppLayout title="atcampus - Fonts">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">Fonts & typography</h1>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-fonts.png'}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-alignment.png'}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        tabIndex={0}
                        aria-label={'colors'}
                        className=""
                        width={1440}
                        height={900}
                        src={'/images/styleguide-typography.png'}
                    />
                </div>
            </main>
        </AppLayout>
    );
}

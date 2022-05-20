import AppLayout from 'components/AppLayout';
import Link from 'next/link';

export default function StyleguidePage() {
    return (
        <AppLayout title="atcampus - Styleguide">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">atcampus styleguide</h1>

                <div className="mt-4">
                    Download our{' '}
                    <Link
                        href={'/styleguide/atcampus-styleguide-2021-12-15.pdf'}
                    >
                        <a
                            target={'_blank'}
                            className="underline decoration-purple-1 decoration-2"
                        >
                            full styleguide here
                        </a>
                    </Link>
                    .
                </div>
            </main>
        </AppLayout>
    );
}

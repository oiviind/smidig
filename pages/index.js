import { MailIcon } from '@heroicons/react/outline';
import AppLayout from 'components/AppLayout';
import FlatButton from 'components/FlatButton';
import GradientButton from 'components/GradientButton';
import RoundedSearch from 'components/RoundedSearch';
import TabBar from 'components/TabBar/TabBar';
import TextInputField from 'components/TextInputField';
import TopSearch from 'components/TopSearch';

export default function HomePage() {
    return (
        <AppLayout title={'atcampus - Components'}>
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">atcampus components</h1>

                <div className="text-md mt-2">
                    <p>
                        A <strong>very</strong> early work in progress version
                        of the atcampus component library.
                    </p>
                    <p className="mt-2 font-semibold">
                        Make sure you check the README.md too!
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Gradient Button</h2>

                    <GradientButton as={'button'}>
                        Text goes here
                    </GradientButton>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Flat Button</h2>

                    <FlatButton as={'button'}>Text goes here</FlatButton>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Text Input Field</h2>

                    <TextInputField
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with label
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with icon
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                        icon={<MailIcon className="w-6 h-6 text-dark-2/70" />}
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with icon and button
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                        icon={<MailIcon className="w-7 h-7 text-dark-2/70" />}
                        button={
                            <GradientButton as={'button'}>
                                Text goes here
                            </GradientButton>
                        }
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Search bar</h2>

                    <TopSearch name={'search'} placeholder={'Søketekst her'} />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Rounded Search bar</h2>

                    <RoundedSearch
                        name={'search'}
                        placeholder={'Søketekst her'}
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl mb-4">Tab Bar</h2>

                    <TabBar
                        tabs={[
                            { name: 'Tab 1', selected: true, href: '#1' },
                            {
                                name: 'Lorem Ipsum 2',
                                selected: false,
                                href: '#2'
                            },
                            { name: 'Tab 3', selected: false, href: '#3' }
                        ]}
                    />
                </div>

                <div className="mt-4">
                    <p className="py-4 text-sm text-dark-1">
                        Feel free to modify the components so they fit your use!
                    </p>
                </div>
            </main>
        </AppLayout>
    );
}

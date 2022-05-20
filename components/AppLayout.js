import Menu from 'components/Menu';

const AppLayout = ({ title = 'atcampus components', children }) => {
    return (
        <>
            <title>{title}</title>
            <div className="flex flex-col h-full">
                <div className="h-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-64 relative">
                        <Menu />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default AppLayout;

import { SearchIcon } from '@heroicons/react/outline';

type RoundedSearchProps = {
    placeholder?: string;
    name: string;
};

export default function RoundedSearch(props: RoundedSearchProps) {
    return (
        <div className="border-2 focus:border-dark-5 rounded-full flex flex-row overflow-hidden">
            <div className="flex-grow">
                <input
                    className={'outline-none bg-white text-md w-full pl-4 p-2'}
                    placeholder={props.placeholder}
                    type="text"
                    name={props.name}
                />
            </div>
            <button className="border-2 border-transparent focus:border-purple-4 focus:bg-purple-4 focus:ring-2 m-1 px-4 rounded-full focus:ring-offset-0 focus:ring-purple-1 outline-none flex justify-center items-center text-gradient-left">
                <SearchIcon className="w-5 h-5" />
            </button>
        </div>
    );
}

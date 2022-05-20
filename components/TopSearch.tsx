import { SearchIcon } from '@heroicons/react/outline';

type TopSearchProps = {
    placeholder?: string;
    name: string;
};

export default function TopSearch(props: TopSearchProps) {
    return (
        <div className="ring-gradient-left ring-offset-2 border-2 border-gradient-left rounded-standard flex flex-row shadow">
            <div className="flex-grow">
                <input
                    className={
                        'outline-none bg-white text-md w-full p-2 rounded-standard'
                    }
                    placeholder={props.placeholder}
                    type="text"
                    name={props.name}
                />
            </div>
            <button className="flex justify-center focus:rounded-standard outline-none focus:ring-2 focus:ring-offset-4 focus:ring-purple-1 items-center px-4 bg-gradient-left text-white stroke-current">
                <SearchIcon className="w-7 h-7" />
            </button>
        </div>
    );
}

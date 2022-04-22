import classNames from 'classnames';
import Text from './Text';

export default function Button({ title, type = 'primary', width, onClick }) {
    const btnClass = classNames(
        'rounded-sm px-3 py-2 text-white',
        type === 'primary' && 'bg-blue-800 hover:bg-blue-900',
        type === 'secondary' && 'bg-green-600 hover:bg-green-800',
        type === 'outlined' &&
            'bg-white border border-blue-800 text-blue-800 hover:border-blue-900 hover:text-blue-900',
        width === 'full' && 'w-full'
    );

    return (
        <button className={btnClass} onClick={onClick}>
            <Text type="bold">{title}</Text>
        </button>
    );
}

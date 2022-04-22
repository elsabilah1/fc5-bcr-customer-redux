import classNames from 'classnames';

export default function Text({ children, type = 'base' }) {
    const textClass = classNames(
        type === 'heroTitle' && 'text-2xl md:text-4xl font-bold leading-normal mb-4',
        type === 'base' && 'text-xs md:text-sm font-light',
        type === 'bold' && 'text-xs md:text-sm font-bold',
        type === 'normal' && 'text-xs md:text-sm font-normal',
        type === 'small' && 'text-[10px] md:text-xs font-light'
    );

    return (
        <>
            <div className={textClass}>{children}</div>
        </>
    );
}

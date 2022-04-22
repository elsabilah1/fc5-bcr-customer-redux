import classNames from 'classnames';
import Text from '../Text';

export default function NavLinks({ type = 'row' }) {
    const navClass = classNames(
        type === 'col' ? 'flex flex-col gap-4' : 'flex flex-col gap-4 md:flex-row md:gap-8'
    );

    return (
        <div className={navClass}>
            <Link path="#our-services">Our Services</Link>
            <Link path="#why-us">Why Us</Link>
            <Link path="#testimonial">Testimonial</Link>
            <Link path="#faq">FAQ</Link>
        </div>
    );
}

function Link({ children, path }) {
    return (
        <a className="block cursor-pointer hover:text-slate-500" href={path}>
            <Text type="normal">{children}</Text>
        </a>
    );
}

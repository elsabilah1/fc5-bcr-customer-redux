import * as Icon from 'react-feather';

export default function SocialLinks() {
    return (
        <div className="space-x-4">
            <Link>
                <Icon.Facebook size={20} />
            </Link>
            <Link>
                <Icon.Instagram size={20} />
            </Link>
            <Link>
                <Icon.Twitter size={20} />
            </Link>
            <Link>
                <Icon.Mail size={20} />
            </Link>
            <Link>
                <Icon.Twitch size={20} />
            </Link>
        </div>
    );
}

function Link({ children, path }) {
    return (
        <a
            className="inline-block cursor-pointer rounded-full bg-blue-800 p-2 text-white hover:bg-blue-900"
            href={path}
        >
            {children}
        </a>
    );
}

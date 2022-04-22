import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import Button from './Button';
import Text from './Text';

export default function Error() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="text-center text-red-600">
                <Text type="heroTitle">404</Text>
                <Text type="heroTitle">Page not Found</Text>
            </div>
            <Link to="/">
                <Button
                    title={
                        <span className="flex items-center gap-4">
                            <ArrowLeft size={16} />
                            Go Back Home
                        </span>
                    }
                />
            </Link>
        </div>
    );
}

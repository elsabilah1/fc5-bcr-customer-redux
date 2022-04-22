import { X } from 'react-feather';
import Button from '../Button';
import Text from '../Text';
import NavLinks from './NavLinks';

export default function Sidebar({ setMenu }) {
    return (
        <div className="absolute top-0 right-0 z-50 h-full w-1/2 bg-white md:hidden">
            <div className="flex flex-col items-start gap-4 px-4 py-9">
                <div className="flex w-full items-center justify-between">
                    <Text type="bold">BCR</Text>
                    <button className="md:hidden" onClick={() => setMenu(false)}>
                        <X />
                    </button>
                </div>
                <NavLinks />
                <Button title="Register" type="secondary" />
            </div>
        </div>
    );
}

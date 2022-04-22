import { Menu } from 'react-feather';
import Button from '../Button';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Header({ setMenu }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-6 md:pb-10">
            <div className="md:flex md:justify-between">
                <div className="flex justify-between">
                    <Logo />
                    <button className="md:hidden" onClick={() => setMenu(true)}>
                        <Menu />
                    </button>
                </div>
                <div className="hidden flex-row items-center gap-8 md:flex">
                    <NavLinks />
                    <Button title="Register" type="secondary" />
                </div>
            </div>
        </div>
    );
}

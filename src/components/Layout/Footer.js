import Text from '../Text';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-28">
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 space-y-4">
                    <Text>
                        Jalan Suroyo No. 161 Mayangan Kota
                        <br /> Probolonggo 672000
                    </Text>
                    <Text>binarcarrental@gmail.com</Text>
                    <Text>081-233-334-808</Text>
                </div>
                <div className="md:w-32">
                    <NavLinks type="col" />
                </div>
                <div className="flex-1 space-y-4">
                    <Text>Connect with us</Text>
                    <SocialLinks />
                </div>
                <div className="flex-1 space-y-4">
                    <Text>Copyright Binar 2022</Text>
                    <Logo />
                </div>
            </div>
        </div>
    );
}

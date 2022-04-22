import LogoImg from '../../assets/images/logo.png';

export default function Logo() {
    return (
        <a className="inline-block" href="/">
            <img src={LogoImg} alt="logo" />
        </a>
    );
}

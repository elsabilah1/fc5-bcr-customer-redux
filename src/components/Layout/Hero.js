import CarImg from '../../assets/images/car.png';
import Text from '../Text';

export default function Hero() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col justify-center lg:h-96">
            <div className="px-4 pb-4 md:w-3/4 md:pb-0 lg:w-1/2">
                <Text type="heroTitle">Sewa &amp; Rental Mobil Terbaik di kawasan Jakarta</Text>
                <div className="mb-4 md:w-3/4">
                    <Text>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil
                        selama 24 jam.
                    </Text>
                </div>
                {/* <Button title="Mulai Sewa Mobil" type="secondary" /> */}
            </div>
            <div className="right-0 bottom-0 flex justify-end pl-4 lg:absolute lg:w-1/2 xl:w-auto">
                <img src={CarImg} alt="car" />
            </div>
        </div>
    );
}

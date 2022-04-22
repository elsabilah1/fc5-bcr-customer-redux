import { Calendar, Settings, Users } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Text from '../Text';

export default function CardCar() {
    const { payment } = useSelector((state) => state.btn);
    const { car } = useSelector((state) => state.car);

    return (
        <div className="rounded-lg p-6 shadow-md lg:w-80">
            <div
                className="mb-6 flex h-40 justify-center rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${car.image})` }}
            />
            <div className="mb-12 space-y-2">
                <Text type="bold">
                    {car.name}/{car.with_driver ? 'Dengan Supir' : 'Tanpa Supir'}
                </Text>
                <div className="flex gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                        <Users size={20} />
                        <Text type="small">{car.capacity} orang</Text>
                    </div>
                    <div className="flex items-center gap-1">
                        <Settings size={20} />
                        <Text type="small">{car.model}</Text>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={20} />
                        <Text type="small">Tahun {car.time}</Text>
                    </div>
                </div>
            </div>
            <div className="mb-6 flex justify-between">
                <Text>Total</Text>
                <Text type="bold">Rp {car.price} / hari</Text>
            </div>
            <Link to={`/order/${car.id}`}>
                <Button title={payment} type="secondary" width="full" />
            </Link>
        </div>
    );
}

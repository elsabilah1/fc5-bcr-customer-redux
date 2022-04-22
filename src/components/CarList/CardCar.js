import { Calendar, Settings, Users } from 'react-feather';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Text from '../Text';

export default function CardCar({ item }) {
    const year = item.time.substring(0, 4);

    return (
        <div className="rounded-lg p-6 shadow-md">
            <LazyLoad>
                <div
                    className="mb-4 flex h-40 justify-center rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            </LazyLoad>
            <div className="mb-4 space-y-2">
                <Text type="normal">
                    {item.name}/{item.with_driver ? 'Dengan Supir' : 'Tanpa Supir'}
                </Text>
                <Text type="bold">Rp {item.price.toLocaleString()} / hari</Text>
                <div className="line-clamp-2">
                    <Text>{item.description}</Text>
                </div>
            </div>
            <div className="mb-6 space-y-4">
                <div className="flex gap-2">
                    <Users color="#8A8A8A" size={20} />
                    <Text>{item.capacity} orang</Text>
                </div>
                <div className="flex gap-2">
                    <Settings color="#8A8A8A" size={20} />
                    <Text>{item.model}</Text>
                </div>
                <div className="flex gap-2">
                    <Calendar color="#8A8A8A" size={20} />
                    <Text>Tahun {year}</Text>
                </div>
            </div>
            <Link to={`${item.id}`}>
                <Button title="Pilih Mobil" type="secondary" width="full" />
            </Link>
        </div>
    );
}

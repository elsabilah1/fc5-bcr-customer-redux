import { Calendar, Settings, Users } from 'react-feather';
import { useSelector } from 'react-redux';
import Button from '../Button';
import Text from '../Text';

export default function CardOrder() {
    const { car } = useSelector((state) => state.car);

    return (
        <div className="rounded-lg p-6 shadow-md lg:w-80">
            <div className="mb-12 space-y-2">
                <Text type="bold">
                    {car.name}/{car.type}
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
                <Text type="bold">Rp {car.price?.toLocaleString()} / hari</Text>
            </div>
            <Section title="Harga">
                <li>
                    <div className="flex justify-between">
                        <Text>1 Mobil {car.with_driver ? 'dengan sopir' : 'tanpa supir'}</Text>
                        <Text>Rp {car.price?.toLocaleString()}</Text>
                    </div>
                </li>
            </Section>
            <Section title="Biaya Lainnya">
                <li>
                    <div className="flex justify-between">
                        <Text>Pajak</Text>
                        <div className="text-green-500">
                            <Text>Termasuk</Text>
                        </div>
                    </div>
                </li>
                {car.with_driver && (
                    <li>
                        <div className="flex justify-between">
                            <Text>Biaya makan supir</Text>
                            <div className="text-green-500">
                                <Text>Termasuk</Text>
                            </div>
                        </div>
                    </li>
                )}
            </Section>
            <Section title="Belum Termasuk">
                <li>
                    <Text>Bensin</Text>
                </li>
                <li>
                    <Text>Tol dan parkir</Text>
                </li>
            </Section>
            <hr />
            <div className="mt-4 mb-6 flex justify-between">
                <Text type="bold">Total</Text>
                <Text type="bold">Rp {car.price?.toLocaleString()} / hari</Text>
            </div>
            <Button title="Bayar" type="secondary" width="full" />
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-6">
            <Text type="bold">{title}</Text>
            <ul className="ml-6 list-disc">{children}</ul>
        </div>
    );
}

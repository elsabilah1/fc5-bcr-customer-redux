import Text from '../Text';

const data = {
    include: [
        'Apa saja yang termasuk dalam paket misal durasi max 12 jam',
        'Sudah termasuk bensin selama 12 jam',
        'Sudah termasuk Tiket Wisata',
        'Sudah termasuk pajak',
    ],
    exclude: [
        'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        'Tidak termasuk akomodasi penginapan',
    ],
    desc: [
        'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        'Tidak termasuk akomodasi penginapan',
        'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        'Tidak termasuk akomodasi penginapan',
        'Tidak termasuk biaya makan sopir Rp 75.000/hari',
        'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam',
        'Tidak termasuk akomodasi penginapan',
    ],
};

export default function CardDetail() {
    return (
        <div className="mb-6 rounded-lg p-6 shadow-md">
            <div className="mb-7">
                <Title>Tentang Paket</Title>
                <div className="space-y-4">
                    <Section title="Include" listItem={data.include} />
                    <Section title="Exclude" listItem={data.exclude} />
                </div>
            </div>
            <div>
                <Title>Refund, Reschedule, Overtime</Title>
                <Section listItem={data.desc} />
            </div>
        </div>
    );
}

function Title({ children }) {
    return (
        <div className="mb-4">
            <Text type="bold">{children}</Text>
        </div>
    );
}

function Section({ title, listItem }) {
    return (
        <div>
            <Text>{title}</Text>
            <ul className="ml-6 list-disc leading-loose text-gray-400">
                {listItem?.map((item, i) => (
                    <li key={i}>
                        <Text>{item}</Text>
                    </li>
                ))}
            </ul>
        </div>
    );
}

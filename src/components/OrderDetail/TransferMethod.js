import Text from '../Text';

export default function TransferMethod() {
    return (
        <div className="rounded-lg p-6 shadow-md">
            <div className="mb-6 gap-4">
                <Text type="bold">Pilih Bank Transfer</Text>
                <Text>
                    Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile
                    Banking
                </Text>
            </div>
            <div className="space-y-8">
                <Bank logo="BCA" title="BCA Transfer" />
                <Bank logo="BNI" title="BNI Transfer" />
                <Bank logo="Mandiri" title="Mandiri Transfer" />
            </div>
        </div>
    );
}

function Bank({ logo, title }) {
    return (
        <button className="flex items-center gap-4">
            <div className="flex h-8 w-16 items-center justify-center rounded-md border">
                {logo}
            </div>
            <Text>{title}</Text>
        </button>
    );
}

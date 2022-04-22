import { Calendar, ChevronDown, Truck, Users } from 'react-feather';
import { useSelector } from 'react-redux';
import Button from '../Button';
import InputField from './InputField';

export default function InputForm({ loc, id, formValues, setFormValues, handleSubmit }) {
    const { listOption } = useSelector((state) => state.car);
    const listData = {
        with_driver: listOption.with_driver,
        type: listOption.car_type,
    };

    return (
        <div className="flex flex-col items-end justify-between gap-4 lg:flex-row">
            <InputField
                type="select"
                label="Tipe Driver"
                listData={listData.with_driver}
                value={formValues.with_driver}
                onChange={(e) => setFormValues({ ...formValues, with_driver: e })}
                placeholder={
                    formValues.with_driver !== ''
                        ? formValues.with_driver
                            ? 'Dengan Driver'
                            : 'Tanpa Driver'
                        : 'Pilih Tipe Driver'
                }
                icon={<ChevronDown size={18} />}
            />
            <InputField
                name="rent_at"
                label="Tanggal"
                placeholder="Pilih Tanggal"
                value={formValues.rent_at}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                icon={<Calendar size={18} />}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
            />
            <InputField
                type="select"
                label="Tipe Mobil"
                listData={listData.type}
                value={formValues.type}
                onChange={(e) => setFormValues({ ...formValues, type: e })}
                placeholder={formValues.type || 'Pilih Tipe Mobil'}
                icon={<Truck size={18} />}
            />
            <InputField
                name="capacity"
                label="Jumlah Penumpang (optional)"
                value={formValues.capacity}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                placeholder="Jumlah Penumpang"
                icon={<Users size={18} />}
            />
            {!id &&
                (loc.pathname.includes('cars') ? (
                    <Button title="Edit" type="outlined" onClick={handleSubmit} />
                ) : (
                    <Button title="Cari Mobil" type="secondary" onClick={handleSubmit} />
                ))}
        </div>
    );
}

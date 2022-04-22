import { useEffect } from 'react';
import { Calendar, ChevronDown, Clock, Users } from 'react-feather';
import { useDispatch } from 'react-redux';
import { getCars } from '../../store/actions/carActions';
import Button from '../Button';
import InputField from './InputField';

const listData = {
    with_driver: [
        { name: 'with_driver', placeholder: 'Dengan Driver', value: true },
        { name: 'with_driver', placeholder: 'Tanpa Driver', value: false },
    ],
    start_rent_time: [
        { name: 'start_rent_time', placeholder: '10:00', value: '10.00' },
        { name: 'start_rent_time', placeholder: '11.00', value: '11.00' },
        { name: 'start_rent_time', placeholder: '12.00', value: '12.00' },
        { name: 'start_rent_time', placeholder: '13.00', value: '13.00' },
    ],
    type: [],
};

export default function InputForm({ loc, id, formValues, setFormValues, handleSubmit }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, []);

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
                label="Waktu Jemput/Ambil"
                listData={listData.start_rent_time}
                value={formValues.start_rent_time}
                onChange={(e) => setFormValues({ ...formValues, start_rent_time: e })}
                placeholder={formValues.start_rent_time || 'Pilih Waktu'}
                icon={<Clock size={18} />}
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

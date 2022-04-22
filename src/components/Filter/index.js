import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Text from '../Text';
import InputForm from './InputForm';

const initialState = {
    with_driver: '',
    rent_at: new Date().toJSON().slice(0, 10),
    type: '',
    capacity: '',
};

export default function Filter({ setFilterFocus }) {
    const loc = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { car } = useSelector((state) => state.car);
    const [formValues, setFormValues] = useState(initialState);

    useEffect(() => {
        function setValue() {
            if (id) {
                setFormValues({
                    with_driver: car.with_driver,
                    capacity: car.capacity,
                    type: car.type,
                });
            }
        }
        setValue();
    });

    function handleSubmit(e) {
        e.preventDefault();
        setFilterFocus(false);
        navigate('/cars', { state: formValues });
    }

    return (
        <div
            onFocus={() => setFilterFocus(true)}
            onBlur={() => setFilterFocus(false)}
            className="inset-x-0 -mt-10 flex justify-center px-4 lg:absolute lg:-bottom-14 lg:px-0"
        >
            <div className="z-20 max-w-5xl flex-1 rounded-lg bg-white p-4 shadow-md md:p-6">
                <div className="space-y-4">
                    {loc.pathname !== '/' &&
                        (loc.pathname.includes('order') ? (
                            <Text type="bold">Detail Pesananmu</Text>
                        ) : (
                            <Text type="bold">Pencarianmu</Text>
                        ))}
                    <InputForm
                        loc={loc}
                        id={id}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}
